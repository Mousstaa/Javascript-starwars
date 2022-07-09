const vader = new Image();
vader.src = 'img/vader.png';
class Sprite {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.vy = 0;
        this.width = 32;
        this.height = 48;
        this.weight = 1;
    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > cadre.height - (this.height * 3) + curve) {
            this.y = cadre.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (spaceAppuie && this.y > this.height * 3) this.vol();
    }
    draw() {
        c.fillStyle = 'red';
        //c.fillRect(this.x, this.y, this.width, this.height);
        c.drawImage(vader, 0, 0, this.width, this.height,
            this.x - 12, this.y - 20, this.width * 1.5, this.height * 1.5);
    }
    vol() {
        this.vy -= 2;
    }
}
const sprite = new Sprite();