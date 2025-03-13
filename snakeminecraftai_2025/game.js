class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.gridSize = 20;
        this.snake = [{x: 5, y: 5}];
        this.direction = {x: 1, y: 0};
        this.lastDirection = {x: 1, y: 0};
        this.food = this.generateFood();
        this.score = 0;
        this.highScore = 0;
        this.gameMode = 'keyboard';
        this.isRunning = false;
        this.autoBtn = document.getElementById('autoBtn');
        this.messageElement = document.getElementById('gameMessage');
        this.isPaused = false;
        this.pauseBtn = document.getElementById('pauseBtn');
        this.gameStarted = false;
        this.showMessage('Appuyez sur une flèche pour commencer', 0);
        this.isGameOver = false;
        this.scores = [];
        this.loadScores();

        this.setupEventListeners();
        this.gameLoop();
        this.setupCanvas();
        window.addEventListener('resize', () => this.setupCanvas());
    }

    setupEventListeners() {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('autoBtn').addEventListener('click', () => this.toggleAutoMode());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
    }

    handleKeyPress(e) {
        if (this.isGameOver) return;

        if (e.code === 'Space' || e.key === 'p' || e.key === 'P') {
            this.togglePause();
            return;
        }

        if (this.isPaused || this.gameMode !== 'keyboard') return;
        
        const keyDirections = {
            'ArrowUp': {x: 0, y: -1},
            'ArrowDown': {x: 0, y: 1},
            'ArrowLeft': {x: -1, y: 0},
            'ArrowRight': {x: 1, y: 0}
        };

        if (keyDirections[e.key]) {
            const newDirection = keyDirections[e.key];
            if (!this.isOppositeDirection(newDirection, this.lastDirection)) {
                this.direction = newDirection;
                if (!this.gameStarted) {
                    this.startGame();
                }
            }
        }
    }

    generateFood() {
        const maxX = Math.floor(this.canvas.width / this.gridSize);
        const maxY = Math.floor(this.canvas.height / this.gridSize);
        
        // Créer une liste de toutes les positions disponibles
        const availablePositions = [];
        for (let x = 0; x < maxX; x++) {
            for (let y = 0; y < maxY; y++) {
                if (!this.snake.some(segment => segment.x === x && segment.y === y)) {
                    availablePositions.push({x, y});
                }
            }
        }
        
        // S'il n'y a plus de position disponible, le joueur a gagné
        if (availablePositions.length === 0) {
            this.victory();
            return this.food; // Garder l'ancienne position
        }
        
        // Choisir une position aléatoire parmi les disponibles
        return availablePositions[Math.floor(Math.random() * availablePositions.length)];
    }

    autoPlay() {
        const head = this.snake[0];
        const food = this.food;
        
        let newDirection;
        if (head.x < food.x) newDirection = {x: 1, y: 0};
        else if (head.x > food.x) newDirection = {x: -1, y: 0};
        else if (head.y < food.y) newDirection = {x: 0, y: 1};
        else if (head.y > food.y) newDirection = {x: 0, y: -1};

        if (newDirection && !this.isOppositeDirection(newDirection, this.lastDirection)) {
            this.direction = newDirection;
        }
    }

    update() {
        if (this.isPaused || !this.isRunning || this.isGameOver) return;

        if (this.gameMode === 'auto') {
            this.autoMove();
        }

        this.lastDirection = {...this.direction};
        
        const newHead = {
            x: this.snake[0].x + this.direction.x,
            y: this.snake[0].y + this.direction.y
        };

        // Vérifier les collisions avant tout
        if (this.checkCollision(newHead)) {
            this.gameOver();
            return;
        }

        // Vérifier si on va manger la nourriture
        const willEat = newHead.x === this.food.x && newHead.y === this.food.y;

        // Mettre à jour le serpent
        this.snake.unshift(newHead);
        if (willEat) {
            this.score++;
            document.getElementById('score').textContent = this.score;
            this.generateNewFood();
        } else {
            this.snake.pop();
        }
    }

    draw() {
        // Effacer le canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Dessiner la nourriture
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(
            this.food.x * this.gridSize,
            this.food.y * this.gridSize,
            this.gridSize - 2,
            this.gridSize - 2
        );

        // Dessiner le serpent
        this.snake.forEach((segment, index) => {
            // Couleur dégradée du serpent
            const hue = (120 + index * 2) % 360;
            this.ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;
            
            this.ctx.fillRect(
                segment.x * this.gridSize,
                segment.y * this.gridSize,
                this.gridSize - 2,
                this.gridSize - 2
            );
        });
    }

    checkCollision(position) {
        const maxX = Math.floor(this.canvas.width / this.gridSize);
        const maxY = Math.floor(this.canvas.height / this.gridSize);

        // Vérifier les collisions avec les murs
        if (position.x < 0 || position.x >= maxX || 
            position.y < 0 || position.y >= maxY) {
            return true;
        }

        // Vérifier les collisions avec le serpent
        return this.snake.some((segment, index) => {
            // Ignorer la dernière position du serpent car elle va bouger
            if (index === this.snake.length - 1) return false;
            return segment.x === position.x && segment.y === position.y;
        });
    }

    isOppositeDirection(dir1, dir2) {
        return dir1.x === -dir2.x && dir1.y === -dir2.y;
    }

    showMessage(message, duration = 2000) {
        this.messageElement.innerHTML = message;
        this.messageElement.classList.add('show');
        
        if (duration) {
            setTimeout(() => {
                this.messageElement.classList.remove('show');
            }, duration);
        }
    }

    gameOver() {
        // Arrêter immédiatement le jeu et empêcher toute interaction
        this.isRunning = false;
        this.gameStarted = false;
        this.isGameOver = true;
        this.isPaused = false;
        const finalScore = this.score;

        // Dernier rendu pour montrer la collision
        this.draw();

        // Gérer le score immédiatement
        if (finalScore > 0) {
            // Demander le nom avant d'afficher game over
            this.addScoreToLeaderboard(finalScore).then(() => {
                this.showMessage(`Game Over!<br>Score: ${finalScore}`, 2000);
                setTimeout(() => {
                    this.reset();
                    this.draw();
                }, 2000);
            });
        } else {
            this.showMessage(`Game Over!`, 2000);
            setTimeout(() => {
                this.reset();
                this.draw();
            }, 2000);
        }
    }

    reset() {
        this.snake = [{x: 5, y: 5}];
        this.direction = {x: 1, y: 0};
        this.lastDirection = {x: 1, y: 0};
        this.score = 0;
        this.gameStarted = false;
        this.isRunning = false;
        this.isPaused = false;
        this.isGameOver = false;
        
        // Réinitialiser l'interface
        document.getElementById('score').textContent = '0';
        this.gameMode = 'keyboard';
        this.autoBtn.style.backgroundColor = '#727272';
        this.pauseBtn.style.backgroundColor = '#727272';
        this.autoBtn.classList.remove('active');
        this.pauseBtn.textContent = 'Pause';
        
        // Générer nouvelle nourriture et nettoyer l'interface
        this.generateNewFood();
        this.showMessage('Appuyez sur une flèche pour commencer', 0);
        document.getElementById('highScore').parentElement.classList.remove('new-high-score');
        
        this.draw();
    }

    gameLoop() {
        if (this.isRunning) {
            this.update();
            this.draw();
            setTimeout(() => this.gameLoop(), 100);
        }
    }

    setupCanvas() {
        const container = this.canvas.parentElement;
        const maxWidth = container.clientWidth - 40; // 40px pour le padding
        const size = Math.min(maxWidth, 400);
        
        this.canvas.style.width = `${size}px`;
        this.canvas.style.height = `${size}px`;
        this.canvas.width = 400;  // Garder une résolution fixe
        this.canvas.height = 400; // pour le rendu interne
    }

    togglePause() {
        if (this.isGameOver) return;
        
        this.isPaused = !this.isPaused;
        this.pauseBtn.textContent = this.isPaused ? 'Reprendre' : 'Pause';
        this.pauseBtn.style.backgroundColor = this.isPaused ? '#50C878' : '#727272';

        if (this.isPaused) {
            this.showMessage('Pause', 0);
        } else {
            this.messageElement.classList.remove('show');
        }
    }

    startGame() {
        if (this.isGameOver) return;
        this.gameStarted = true;
        this.isRunning = true;
        this.messageElement.classList.remove('show');
        this.gameLoop();
    }

    loadScores() {
        // Charger les scores depuis le fichier JSON local
        fetch('scores.json')
            .then(response => response.json())
            .then(data => {
                this.scores = data.scores;
                this.updateLeaderboardDisplay();
                if (this.scores.length > 0) {
                    this.highScore = this.scores[0].score;
                    document.getElementById('highScore').textContent = this.highScore;
                }
            })
            .catch(error => console.error('Erreur chargement scores:', error));
    }

    async addScoreToLeaderboard(score) {
        try {
            let name = await this.getValidatedPlayerName();
            if (!name) name = 'Anonyme';

            // Envoyer le score au serveur
            const response = await fetch('save_score.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, score })
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la sauvegarde du score');
            }

            const data = await response.json();
            
            // Mettre à jour les scores locaux
            this.scores = data.scores;
            this.updateLeaderboardDisplay();

            if (score > this.highScore) {
                this.highScore = score;
                document.getElementById('highScore').textContent = this.highScore;
                document.getElementById('highScore').parentElement.classList.add('new-high-score');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du score:', error);
            alert('Erreur lors de la sauvegarde du score. Réessayez plus tard.');
        }
    }

    getValidatedPlayerName() {
        return new Promise((resolve) => {
            let name = prompt('Nouveau meilleur score ! Entrez votre nom:') || '';
            
            // Nettoyer et valider le nom
            name = this.sanitizeName(name);
            
            resolve(name);
        });
    }

    sanitizeName(name) {
        // Enlever les caractères spéciaux et espaces multiples
        let sanitized = name
            .trim()
            .replace(/[<>{}[\]"'`]/g, '')
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, ' ')
            .substring(0, 15);
        
        // Vérifier si le nom est vide ou trop court
        if (!sanitized || sanitized.length < 2) {
            return 'Anonyme';
        }
        
        // Capitaliser la première lettre
        return sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
    }

    autoMove() {
        if (!this.isRunning || this.isPaused || this.isGameOver) return;

        const head = this.snake[0];
        const food = this.food;
        
        // Vérifier d'abord si on peut aller directement vers la nourriture
        let directPath = this.getDirectPathToFood(head, food);
        if (directPath) {
            this.direction = directPath;
            return;
        }

        // Sinon, chercher un chemin sûr
        const possibleDirections = this.getSafeDirections(head);
        if (possibleDirections.length === 0) {
            this.gameOver();
            return;
        }

        // Choisir la meilleure direction
        this.direction = this.getBestDirection(possibleDirections, head, food);
    }

    getDirectPathToFood(head, food) {
        // Essayer d'abord horizontalement
        if (head.x !== food.x) {
            const dir = { x: Math.sign(food.x - head.x), y: 0 };
            if (!this.isOppositeDirection(dir, this.lastDirection) && 
                !this.checkCollision({ x: head.x + dir.x, y: head.y + dir.y })) {
                return dir;
            }
        }
        // Puis verticalement
        if (head.y !== food.y) {
            const dir = { x: 0, y: Math.sign(food.y - head.y) };
            if (!this.isOppositeDirection(dir, this.lastDirection) && 
                !this.checkCollision({ x: head.x + dir.x, y: head.y + dir.y })) {
                return dir;
            }
        }
        return null;
    }

    getSafeDirections(head) {
        return [
            {x: 1, y: 0}, {x: -1, y: 0},
            {x: 0, y: 1}, {x: 0, y: -1}
        ].filter(dir => {
            if (this.isOppositeDirection(dir, this.lastDirection)) return false;
            const nextPos = {
                x: head.x + dir.x,
                y: head.y + dir.y
            };
            return !this.checkCollision(nextPos);
        });
    }

    getBestDirection(directions, head, food) {
        return directions.reduce((best, dir) => {
            const nextPos = {
                x: head.x + dir.x,
                y: head.y + dir.y
            };
            const distanceToFood = Math.abs(nextPos.x - food.x) + Math.abs(nextPos.y - food.y);
            const currentBestDistance = Math.abs(head.x + best.x - food.x) + Math.abs(head.y + best.y - food.y);
            return distanceToFood < currentBestDistance ? dir : best;
        }, directions[0]);
    }

    toggleAutoMode() {
        if (this.gameMode === 'auto') {
            this.gameMode = 'keyboard';
            this.autoBtn.style.backgroundColor = '#727272';
            this.autoBtn.classList.remove('active');
        } else {
            this.gameMode = 'auto';
            this.autoBtn.style.backgroundColor = '#50C878';
            this.autoBtn.classList.add('active');
            
            if (!this.gameStarted) {
                this.startGame();
            }
        }
    }

    victory() {
        this.showMessage('Victoire ! Vous avez rempli tout le terrain !', 3000);
        setTimeout(() => this.reset(), 3000);
    }

    generateNewFood() {
        let newFood;
        let attempts = 0;
        const maxAttempts = 100;

        do {
            newFood = this.generateFood();
            attempts++;
            if (attempts >= maxAttempts) {
                this.victory();
                return;
            }
        } while (this.snake.some(segment => 
            segment.x === newFood.x && segment.y === newFood.y
        ));

        this.food = newFood;
    }

    updateLeaderboardDisplay() {
        const leaderboardList = document.getElementById('leaderboardList');
        leaderboardList.innerHTML = this.scores
            .map((entry, index) => {
                let medalClass = '';
                let medal = '';
                switch(index) {
                    case 0: 
                        medalClass = 'gold';
                        medal = '🥇';
                        break;
                    case 1: 
                        medalClass = 'silver';
                        medal = '🥈';
                        break;
                    case 2: 
                        medalClass = 'bronze';
                        medal = '🥉';
                        break;
                }
                
                return `
                    <div class="leaderboard-item ${medalClass}">
                        <span class="leaderboard-rank">${medal}${index + 1}.</span>
                        <span class="leaderboard-name">${entry.name}</span>
                        <span class="leaderboard-score">${entry.score}</span>
                    </div>
                `;
            })
            .join('');
    }
}

function saveScore(score, name = 'Anonyme') {
    fetch('index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            score: score,
            name: name
        })
    })
    .then(response => response.json())
    .then(data => {
        // Mettre à jour l'affichage du leaderboard
        this.scores = data.scores;
        this.updateLeaderboardDisplay();
    })
    .catch(error => console.error('Erreur:', error));
}

// Démarrer le jeu
window.onload = () => new SnakeGame(); 