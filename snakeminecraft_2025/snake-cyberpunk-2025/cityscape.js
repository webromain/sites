class CityScape {
    constructor() {
        this.canvas = document.getElementById('cityscapeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        this.buildings = [];
        this.lights = [];
        this.flyingCars = [];
        
        this.generateCity();
        this.animate = this.animate.bind(this);
        
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.generateCity();
    }

    generateCity() {
        this.buildings = [];
        this.lights = [];
        this.flyingCars = [];
        
        // Générer les buildings
        for (let i = 0; i < this.canvas.width; i += 50) {
            const height = Math.random() * (this.canvas.height * 0.8) + (this.canvas.height * 0.2);
            this.buildings.push({
                x: i,
                y: this.canvas.height,
                width: 40 + Math.random() * 30,
                height: height,
                windows: this.generateWindows(height)
            });
        }

        // Générer les lumières ambiantes
        for (let i = 0; i < 50; i++) {
            this.lights.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.5,
                color: Math.random() > 0.5 ? '#0ff' : '#f0f'
            });
        }

        // Générer les voitures volantes
        for (let i = 0; i < 10; i++) {
            this.flyingCars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * (this.canvas.height * 0.7),
                speed: Math.random() * 2 + 1,
                width: 20,
                height: 8,
                tailLightAlpha: Math.random()
            });
        }
    }

    generateWindows(buildingHeight) {
        const windows = [];
        const rows = Math.floor(buildingHeight / 20);
        const cols = 3;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (Math.random() > 0.3) {
                    windows.push({
                        row,
                        col,
                        lit: Math.random() > 0.5,
                        blinkRate: Math.random() * 0.02,
                        lastBlink: Date.now()
                    });
                }
            }
        }
        return windows;
    }

    drawBuilding(building) {
        // Effet holographique de base
        const gradient = this.ctx.createLinearGradient(
            building.x,
            this.canvas.height - building.height,
            building.x,
            this.canvas.height
        );
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 0, 255, 0.2)');

        // Effet de scan
        const scanLinePos = (Date.now() % 3000) / 3000;
        const buildingHeight = building.height;
        const scanY = this.canvas.height - buildingHeight + (buildingHeight * scanLinePos);

        // Dessiner le bâtiment avec effet holographique
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(
            building.x,
            this.canvas.height - building.height,
            building.width,
            building.height
        );

        // Lignes de grille holographiques
        this.ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        this.ctx.lineWidth = 0.5;
        
        // Lignes horizontales
        for (let y = 0; y < building.height; y += 20) {
            this.ctx.beginPath();
            this.ctx.moveTo(building.x, this.canvas.height - y);
            this.ctx.lineTo(building.x + building.width, this.canvas.height - y);
            this.ctx.stroke();
        }

        // Lignes verticales
        for (let x = 0; x <= building.width; x += 20) {
            this.ctx.beginPath();
            this.ctx.moveTo(building.x + x, this.canvas.height);
            this.ctx.lineTo(building.x + x, this.canvas.height - building.height);
            this.ctx.stroke();
        }

        // Effet de scan line
        const scanGradient = this.ctx.createLinearGradient(
            building.x,
            scanY - 10,
            building.x,
            scanY + 10
        );
        scanGradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
        scanGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)');
        scanGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

        this.ctx.fillStyle = scanGradient;
        this.ctx.fillRect(building.x, scanY - 10, building.width, 20);

        // Effet de glitch aléatoire
        if (Math.random() < 0.03) {
            const glitchHeight = Math.random() * 10;
            const glitchY = this.canvas.height - Math.random() * building.height;
            this.ctx.fillStyle = 'rgba(255, 0, 255, 0.2)';
            this.ctx.fillRect(building.x, glitchY, building.width, glitchHeight);
        }

        // Dessiner les fenêtres avec effet holographique
        building.windows.forEach(window => {
            if (Date.now() - window.lastBlink > 1000) {
                window.lit = Math.random() > 0.95;
                window.lastBlink = Date.now();
            }

            const windowWidth = 10;
            const windowHeight = 15;
            const windowX = building.x + (window.col * 12) + 5;
            const windowY = this.canvas.height - building.height + (window.row * 20) + 5;

            // Effet de lueur pour les fenêtres
            if (window.lit) {
                this.ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
                this.ctx.shadowColor = '#0ff';
                this.ctx.shadowBlur = 10;
                this.ctx.fillRect(windowX - 2, windowY - 2, windowWidth + 4, windowHeight + 4);
                this.ctx.shadowBlur = 0;
            }

            this.ctx.fillStyle = window.lit ? 'rgba(0, 255, 255, 0.8)' : 'rgba(0, 255, 255, 0.1)';
            this.ctx.fillRect(windowX, windowY, windowWidth, windowHeight);
        });
    }

    drawFlyingCar(car) {
        // Corps de la voiture
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(car.x, car.y, car.width, car.height);

        // Effet de lueur
        const gradient = this.ctx.createLinearGradient(car.x, car.y, car.x + car.width, car.y);
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.2)');
        gradient.addColorStop(1, 'transparent');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(car.x - 10, car.y - 2, car.width + 20, car.height + 4);

        // Feux arrière
        this.ctx.fillStyle = `rgba(255, 0, 0, ${car.tailLightAlpha})`;
        this.ctx.fillRect(car.x - 2, car.y + 2, 4, 4);
    }

    animate() {
        // Modifier l'effacement pour créer un effet de persistance
        this.ctx.fillStyle = 'rgba(10, 10, 15, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Dessiner les bâtiments et leurs fenêtres
        this.buildings.forEach(building => this.drawBuilding(building));

        // Animer les lumières
        this.lights.forEach(light => {
            light.alpha = 0.3 + Math.sin(Date.now() / 1000 + light.x) * 0.2;
            this.ctx.fillStyle = `${light.color}${Math.floor(light.alpha * 255).toString(16).padStart(2, '0')}`;
            this.ctx.beginPath();
            this.ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Animer les voitures volantes
        this.flyingCars.forEach(car => {
            car.x += car.speed;
            car.tailLightAlpha = 0.5 + Math.sin(Date.now() / 200) * 0.5;
            if (car.x > this.canvas.width + 50) {
                car.x = -50;
                car.y = Math.random() * (this.canvas.height * 0.7);
            }
            this.drawFlyingCar(car);
        });

        requestAnimationFrame(this.animate);
    }
} 