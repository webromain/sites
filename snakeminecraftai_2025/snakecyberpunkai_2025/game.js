const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('resetButton');
const highScoreElement = document.getElementById('highScore');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [
    { x: 10, y: 10 }
];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;
let score = 0;
let isAutoMode = false;
const autoButton = document.getElementById('autoButton');
let highScore = 0;

// Gestion du curseur personnalisé
const cursor = document.querySelector('.cursor');
const trails = [];
const maxTrails = 10;

const INITIAL_SPEED = 200; // Augmenté de 150 à 200ms
const SPEED_INCREASE = 2; // Réduit de 5 à 2ms pour une accélération plus progressive
const MIN_SPEED = 120; // Augmenté de 80 à 120ms pour une vitesse maximale plus gérable
let currentSpeed = INITIAL_SPEED;

let isMouseControl = false;
let mouseTarget = { x: 0, y: 0 };

// Ajouter le bouton de contrôle souris
const mouseControlButton = document.createElement('button');
mouseControlButton.className = 'cyber-button';
mouseControlButton.innerHTML = `
    <span class="button-content">Mode Souris</span>
    <span class="button-glitch"></span>
`;
document.querySelector('.controls').appendChild(mouseControlButton);

// Gestionnaire pour le bouton de contrôle souris
mouseControlButton.addEventListener('click', () => {
    isMouseControl = !isMouseControl;
    mouseControlButton.classList.toggle('active');
    if (isMouseControl) {
        isAutoMode = false;
        autoButton.classList.remove('active');
    }
});

// Ajouter l'écouteur pour le canvas
canvas.addEventListener('mousemove', (e) => {
    if (!isMouseControl) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / gridSize);
    const y = Math.floor((e.clientY - rect.top) / gridSize);
    mouseTarget = { x, y };
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Création de la traînée
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);
    
    trails.push({
        element: trail,
        createdAt: Date.now()
    });
    
    // Suppression des anciennes traînées
    while (trails.length > maxTrails) {
        const oldestTrail = trails.shift();
        oldestTrail.element.remove();
    }
    
    // Animation de disparition des traînées
    trails.forEach((trail, index) => {
        const age = Date.now() - trail.createdAt;
        const opacity = 1 - (age / 200); // Disparaît après 200ms
        if (opacity > 0) {
            trail.element.style.opacity = opacity;
        } else {
            trail.element.remove();
            trails.splice(index, 1);
        }
    });
});

// Effet au clic
document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Effet hover sur les boutons
document.querySelectorAll('.cyber-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    
    button.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

autoButton.addEventListener('click', () => {
    isAutoMode = !isAutoMode;
    autoButton.classList.toggle('active');
    if (isAutoMode) {
        dx = 1; // Démarrer le mouvement vers la droite
        dy = 0;
    }
});

resetButton.addEventListener('click', () => {
    resetGame();
});

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    if (isAutoMode || isMouseControl) return; // Ignorer les touches si en mode auto ou souris
    
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -1;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -1;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 1;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 1;
    }
}

function drawGame() {
    clearCanvas();
    if (isAutoMode) {
        autoPlay();
    } else if (isMouseControl) {
        handleMouseControl();
    }
    moveSnake();
    drawSnake();
    drawFood();
    
    // Dessiner le curseur cible en mode souris
    if (isMouseControl) {
        ctx.strokeStyle = '#f0f';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#f0f';
        ctx.shadowBlur = 10;
        
        const targetX = mouseTarget.x * gridSize + gridSize/2;
        const targetY = mouseTarget.y * gridSize + gridSize/2;
        
        // Dessiner une croix de visée
        ctx.beginPath();
        ctx.moveTo(targetX - 10, targetY);
        ctx.lineTo(targetX + 10, targetY);
        ctx.moveTo(targetX, targetY - 10);
        ctx.lineTo(targetX, targetY + 10);
        ctx.stroke();
        
        // Dessiner un cercle autour
        ctx.beginPath();
        ctx.arc(targetX, targetY, 8, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
    }
    
    checkCollision();
    setTimeout(drawGame, currentSpeed);
}

function clearCanvas() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ajout d'une grille cyberpunk
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 0.5;
    for(let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        
        // Vérifier si on doit changer de mode
        checkDangerMode();
        
        generateFood();
        currentSpeed = Math.max(MIN_SPEED, currentSpeed - SPEED_INCREASE);
    } else {
        snake.pop();
    }
}

function drawSnake() {
    snake.forEach((segment, index) => {
        const isHead = index === 0;
        
        // Configuration du gradient selon la partie du serpent
        const gradient = ctx.createLinearGradient(
            segment.x * gridSize, 
            segment.y * gridSize, 
            (segment.x + 1) * gridSize, 
            (segment.y + 1) * gridSize
        );
        
        if (isHead) {
            gradient.addColorStop(0, '#f0f'); // Tête rose néon
            gradient.addColorStop(1, '#90f');
        } else {
            gradient.addColorStop(0, '#0ff');
            gradient.addColorStop(1, '#08f');
        }
        
        ctx.fillStyle = gradient;
        ctx.shadowColor = isHead ? '#f0f' : '#0ff';
        ctx.shadowBlur = isHead ? 15 : 10;
        
        // Dessiner le segment
        ctx.fillRect(
            segment.x * gridSize, 
            segment.y * gridSize, 
            gridSize - 2, 
            gridSize - 2
        );
        
        // Ajouter des détails cyberpunk pour la tête
        if (isHead) {
            // Lignes de circuit
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            
            // Lignes horizontales
            ctx.beginPath();
            ctx.moveTo(segment.x * gridSize + 3, segment.y * gridSize + gridSize/2);
            ctx.lineTo(segment.x * gridSize + gridSize - 3, segment.y * gridSize + gridSize/2);
            ctx.stroke();
            
            // Lignes verticales
            ctx.beginPath();
            ctx.moveTo(segment.x * gridSize + gridSize/2, segment.y * gridSize + 3);
            ctx.lineTo(segment.x * gridSize + gridSize/2, segment.y * gridSize + gridSize - 3);
            ctx.stroke();
        }
    });
    ctx.shadowBlur = 0;
}

// Ajouter cette méthode pour le support de roundRect si nécessaire
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
    };
}

function drawFood() {
    const x = food.x * gridSize;
    const y = food.y * gridSize;
    const size = gridSize - 2;
    
    // Créer un effet de lueur pulsante
    const pulseSize = Math.sin(Date.now() / 200) * 2;
    
    // Gradient radial pour l'effet holographique
    const gradient = ctx.createRadialGradient(
        x + size/2, y + size/2, 0,
        x + size/2, y + size/2, size
    );
    
    gradient.addColorStop(0, '#f0f');
    gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.5)');
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.shadowColor = '#f0f';
    ctx.shadowBlur = 15 + pulseSize;
    
    // Dessiner l'hexagone de base
    ctx.beginPath();
    for(let i = 0; i < 6; i++) {
        const angle = i * Math.PI / 3;
        const px = x + size/2 + Math.cos(angle) * (size/2 + pulseSize);
        const py = y + size/2 + Math.sin(angle) * (size/2 + pulseSize);
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    
    // Ajouter des détails holographiques
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    
    // Lignes internes
    for(let i = 1; i < 3; i++) {
        ctx.beginPath();
        for(let j = 0; j < 6; j++) {
            const angle = j * Math.PI / 3;
            const px = x + size/2 + Math.cos(angle) * (size/3 * i);
            const py = y + size/2 + Math.sin(angle) * (size/3 * i);
            if(j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    ctx.shadowBlur = 0;
}

function generateFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
}

function checkCollision() {
    const head = snake[0];
    
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

function resetGame() {
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
    }
    
    alert(`SYSTÈME TERMINÉ\nScore final: ${score}\nMeilleur score: ${highScore}`);
    
    snake = [{ x: 10, y: 10 }];
    food = { x: 15, y: 15 };
    dx = isAutoMode ? 1 : 0;
    dy = 0;
    score = 0;
    scoreElement.textContent = score;
    currentSpeed = INITIAL_SPEED;
    
    if (isMouseControl) {
        mouseTarget = { x: 10, y: 10 };
    }
    
    isInDangerMode = false;
    exitDangerMode();
}

function autoPlay() {
    if (!isAutoMode) return;
    
    const head = snake[0];
    const nextHead = { x: head.x + dx, y: head.y + dy };
    
    // Créer une carte des dangers (murs et corps du serpent)
    const dangerMap = createDangerMap();
    
    // Trouver le meilleur chemin vers la nourriture
    const path = findPathToFood(head, food, dangerMap);
    
    if (path && path.length > 1) {
        // Suivre le chemin trouvé
        const nextMove = path[1];
        dx = nextMove.x - head.x;
        dy = nextMove.y - head.y;
    } else {
        // Si aucun chemin n'est trouvé, chercher l'espace le plus sûr
        findSafestDirection(head, dangerMap);
    }
}

function createDangerMap() {
    const dangerMap = Array(tileCount).fill().map(() => Array(tileCount).fill(false));
    
    // Marquer le corps du serpent
    snake.forEach(segment => {
        dangerMap[segment.y][segment.x] = true;
    });
    
    return dangerMap;
}

function findPathToFood(start, target, dangerMap) {
    const queue = [];
    const visited = new Set();
    const parent = new Map();
    
    queue.push(start);
    visited.add(`${start.x},${start.y}`);
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        if (current.x === target.x && current.y === target.y) {
            return reconstructPath(parent, start, current);
        }
        
        // Explorer les 4 directions possibles
        const directions = [
            {x: 1, y: 0}, {x: -1, y: 0},
            {x: 0, y: 1}, {x: 0, y: -1}
        ];
        
        for (const dir of directions) {
            const next = {
                x: current.x + dir.x,
                y: current.y + dir.y
            };
            
            const key = `${next.x},${next.y}`;
            
            if (isValidMove(next, dangerMap) && !visited.has(key)) {
                queue.push(next);
                visited.add(key);
                parent.set(key, current);
            }
        }
    }
    
    return null; // Aucun chemin trouvé
}

function reconstructPath(parent, start, end) {
    const path = [end];
    let current = end;
    
    while (current.x !== start.x || current.y !== start.y) {
        const key = `${current.x},${current.y}`;
        current = parent.get(key);
        path.unshift(current);
    }
    
    return path;
}

function isValidMove(pos, dangerMap) {
    return pos.x >= 0 && pos.x < tileCount &&
           pos.y >= 0 && pos.y < tileCount &&
           !dangerMap[pos.y][pos.x];
}

function findSafestDirection(head, dangerMap) {
    const directions = [
        {dx: 1, dy: 0}, {dx: -1, dy: 0},
        {dx: 0, dy: 1}, {dx: 0, dy: -1}
    ];
    
    let bestDirection = null;
    let maxSpace = -1;
    
    for (const dir of directions) {
        const nextPos = {
            x: head.x + dir.dx,
            y: head.y + dir.dy
        };
        
        if (isValidMove(nextPos, dangerMap)) {
            const spaceAvailable = calculateAvailableSpace(nextPos, dangerMap);
            if (spaceAvailable > maxSpace) {
                maxSpace = spaceAvailable;
                bestDirection = dir;
            }
        }
    }
    
    if (bestDirection) {
        dx = bestDirection.dx;
        dy = bestDirection.dy;
    }
}

function calculateAvailableSpace(start, dangerMap) {
    const visited = new Set();
    const queue = [start];
    let space = 0;
    
    while (queue.length > 0) {
        const current = queue.shift();
        const key = `${current.x},${current.y}`;
        
        if (visited.has(key)) continue;
        
        visited.add(key);
        space++;
        
        // Explorer les cases adjacentes
        const directions = [
            {x: 1, y: 0}, {x: -1, y: 0},
            {x: 0, y: 1}, {x: 0, y: -1}
        ];
        
        for (const dir of directions) {
            const next = {
                x: current.x + dir.x,
                y: current.y + dir.y
            };
            
            if (isValidMove(next, dangerMap) && !visited.has(`${next.x},${next.y}`)) {
                queue.push(next);
            }
        }
    }
    
    return space;
}

// Ajouter cette fonction pour le contrôle à la souris
function handleMouseControl() {
    if (!isMouseControl) return;
    
    const head = snake[0];
    
    // Calculer la direction vers la cible
    if (mouseTarget.x > head.x && dx !== -1) {
        dx = 1;
        dy = 0;
    } else if (mouseTarget.x < head.x && dx !== 1) {
        dx = -1;
        dy = 0;
    } else if (mouseTarget.y > head.y && dy !== -1) {
        dx = 0;
        dy = 1;
    } else if (mouseTarget.y < head.y && dy !== 1) {
        dx = 0;
        dy = -1;
    }
}

// Ajouter ces constantes au début du fichier
const COLOR_THEMES = {
    normal: {
        primary: '#0ff',
        secondary: '#f0f'
    },
    danger: {
        primary: '#ff0000',
        secondary: '#ff6b6b'
    }
};

let isInDangerMode = false;
let dangerModeStartScore = 0;

// Ajouter cette nouvelle fonction
function checkDangerMode() {
    // Vérifier si le score est dans une zone de danger
    if (score >= 500) {
        const phase = Math.floor(score / 500); // 1 pour 500-999, 2 pour 1000-1499, etc.
        const scoreInPhase = score - (phase * 500); // Position dans la phase actuelle
        
        if (scoreInPhase < 200) { // Les 200 premiers points de chaque phase de 500
            if (!isInDangerMode) {
                console.log("Entering danger mode at score:", score); // Debug
                enterDangerMode();
            }
        } else if (isInDangerMode) {
            console.log("Exiting danger mode at score:", score); // Debug
            exitDangerMode();
        }
    }
}

function enterDangerMode() {
    isInDangerMode = true;
    dangerModeStartScore = score;
    
    // Changer les couleurs
    document.documentElement.style.setProperty('--primary-color', COLOR_THEMES.danger.primary);
    document.documentElement.style.setProperty('--secondary-color', COLOR_THEMES.danger.secondary);
    
    // Effet de transition
    canvas.style.animation = 'danger-pulse 2s infinite';
    
    // Ajouter un effet sonore ou visuel pour indiquer le changement
    console.log("DANGER MODE ACTIVATED"); // Debug
}

function exitDangerMode() {
    isInDangerMode = false;
    
    // Restaurer les couleurs normales
    document.documentElement.style.setProperty('--primary-color', COLOR_THEMES.normal.primary);
    document.documentElement.style.setProperty('--secondary-color', COLOR_THEMES.normal.secondary);
    
    // Retirer l'animation
    canvas.style.animation = '';
    
    console.log("DANGER MODE DEACTIVATED"); // Debug
}

drawGame(); 

drawGame(); 