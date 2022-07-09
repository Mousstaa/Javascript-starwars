const arrayObstacle = [];

class Obstacle {
    constructor() {
        this.haut = (Math.random() * cadre.height / 2.5) + 22;
        this.bas = (Math.random() * cadre.height / 3) + 22;
        this.x = cadre.clientWidth;
        this.width = 50;
        this.color = '#3A0002'
        this.counted = false;
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, 0, this.width, this.haut);
        c.fillRect(this.x, cadre.height - this.bas, this.width, this.bas);
    }
    update() {
        this.x -= vitesseJeu;
        if (!this.counted && this.x < sprite.x) {
            resultat++;
            this.counted = true;
        }
        this.draw();
    }
}

function gererObstacles() {
    if (frame % 50 === 0) {
        arrayObstacle.unshift(new Obstacle);
    }
    for (let i = 0; i < arrayObstacle.length; i++) {
        arrayObstacle[i].update();
    }
    if (arrayObstacle.length > 20) {
        arrayObstacle.pop(arrayObstacle[0]);
    }
}