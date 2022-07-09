const cadre = document.getElementById('cadreJeu');
const c = cadre.getContext('2d');
cadre.width = 600;
cadre.height = 400;

let spaceAppuie = false;
let angle = 0;
let frame = 0;
let resultat = 0;
let vitesseJeu = 2;

const back = new Image();
back.src = 'img/back.png';
const bg = {
    x1: 0,
    x2: cadre.width,
    y: 0,
    width: cadre.width,
    height: cadre.height

}


function gererbackground() {
    if (bg.x1 <= -bg.width + vitesseJeu) bg.x1 = bg.width;
    else bg.x1 -= vitesseJeu;
    if (bg.x2 <= -bg.width + vitesseJeu) bg.x2 = bg.width;
    else(bg.x2 -= vitesseJeu);
    c.drawImage(back, bg.x1, bg.y, bg.width, bg.height);
    c.drawImage(back, bg.x2, bg.y, bg.width, bg.height);
}

function animer() {
    c.clearRect(0, 0, cadre.width, cadre.height);
    gererbackground();
    gererObstacles();
    gererParticules();
    sprite.update();
    sprite.draw();
    gererCollision();
    c.strokeText(resultat, 450, 70);
    c.fillText(resultat, 450, 70);
    if (gererCollision()) return;
    requestAnimationFrame(animer);
    angle += 0.11;
    frame++;
}

animer();

window.addEventListener('keydown', function(a) {
    if (a.code === 'Space') spaceAppuie = true;
});

window.addEventListener('keyup', function(a) {
    if (a.code === 'Space') spaceAppuie = false;
});



function gererCollision() {
    for (let i = 0; i < arrayObstacle.length; i++) {
        //Conditions pour detecter un collision
        if (sprite.x < arrayObstacle[i].x + arrayObstacle[i].width &&
            sprite.x + sprite.width > arrayObstacle[i].x &&
            ((sprite.y < 0 + arrayObstacle[i].haut && sprite.y + sprite.height > 0) ||
                (sprite.y > cadre.height - arrayObstacle[i].bas &&
                    sprite.y + sprite.height < cadre.height))) {
            //détecter une collision  
            c.fillStyle = 'black';
            c.fillText('Game Over, les rebelles se sont enfuis,' + ' Votre resultat est ' + resultat, 160, cadre.height / 2 - 10);
            return true;
        }
    }
}