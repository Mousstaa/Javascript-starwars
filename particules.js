const arrayParticule = [];

class Particule {
    constructor() {
        this.x = sprite.x + 10;
        this.y = sprite.y + 60;
        this.size = Math.random() * 6;
        this.vitesseY = (Math.random() * 1) - 0.5;
        this.color = '#151E3D';
    }
    update() {
        this.x -= vitesseJeu;
        this.y += this.vitesseY;
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
    }
}

function gererParticules() {
    arrayParticule.unshift(new Particule);
    for (i = 0; i < arrayParticule.length; i++) {
        arrayParticule[i].update();
        arrayParticule[i].draw();
    }
    //si plus que 200 enleve 20 particule
    if (arrayParticule.length > 200) {
        for (let i = 0; i < 20; i++) {
            arrayParticule.pop(arrayParticule[i]);
        }
    }
}