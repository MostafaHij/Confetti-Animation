

// window.addEventListener('load', e => {
//     /** @type {HTMLCanvasElement} */
//     const canvas = document.getElementById('canvas1');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const numOfParticles = 50;
//     let particlesArray = [];

//     const EMOJIS = new Image();
//     EMOJIS.src = 'images/emojis_sprite.png';


//     class Particle {
//         constructor() {
//             this.x = Math.random() * canvas.width;
//             this.y = Math.random() * canvas.height;
//             this.size = Math.random() * 50 + 50;
//             this.speed = Math.random() * 3 + 1;
//             this.angle = Math.random() * 360;
//             this.direction = Math.random() < 0.5 ? -1 : 1;
//             this.frameX = Math.floor(Math.random() * 3);
//             this.frameY = Math.floor(Math.random() * 3);
//             this.spriteSize = 512 / 4;
//         }

//         draw() {
//             ctx.save();
//             ctx.translate(this.x, this.y);
//             ctx.rotate(this.angle * Math.PI / 360 * this.direction);
//             ctx.drawImage(EMOJIS, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
//             ctx.restore();
//         }

//         update() {
//             this.angle += 2;

//             if (this.y - this.size / 2 > canvas.height) {
//                 this.x = Math.random() * canvas.width;
//                 this.size = Math.random() * 50 + 50;
//                 this.speed = Math.random() * 3 + 1;
//                 this.frameX = Math.floor(Math.random() * 3);
//                 this.frameY = Math.floor(Math.random() * 3);
//                 this.y = -this.size;
//             }

//             this.y += this.speed;
//         }
//     }


//     function init() {
//         particlesArray = [];
//         for (let i = 0; i < numOfParticles; i++) {
//             particlesArray.push(new Particle());
//         }
//     }
//     init();



//     function connectByLines() {
//         for (let i = 0; i < particlesArray.length; i++) {
//             for (let j = i; j < particlesArray.length; j++) {

//                 let dx = particlesArray[i].x - particlesArray[j].x;
//                 let dy = particlesArray[i].y - particlesArray[j].y;
//                 let distance = Math.sqrt(dx * dx + dy * dy);

//                 if (distance < 200) {
//                     ctx.beginPath();
//                     ctx.lineWidth = 0.5;
//                     ctx.globalCompositeOperation = "destination-over"; // draw lines behind emojis
//                     ctx.strokeStyle = 'orange';
//                     ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
//                     ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
//                     ctx.stroke();
//                     ctx.closePath();
//                 }
//             }
//         }
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         for (let i = 0; i < particlesArray.length; i++) {
//             particlesArray[i].draw();
//             particlesArray[i].update();
//         }
//         connectByLines();
//         requestAnimationFrame(animate);
//     }
//     animate();


//     window.addEventListener('resize', e => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         init();
//     });




// });

/************************************** */
/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const particlesArray = [];

const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Orange",
    "Crimson"
];

class Confetti {
    constructor() {
        this.width = 20;
        this.height = 30;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.weight = Math.floor(Math.random() * 4) + 3;
        this.angle = Math.random() * 360;
        this.direction = Math.random() < 0.5 ? -1 : 1;
    }

    update() {

        this.y += this.weight;
        this.angle++;


        if (this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height;
            this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
            this.weight = Math.floor(Math.random() * 4) + 3;
            this.angle = Math.random() * 360;
            this.direction = Math.random() < 0.5 ? -1 : 1;
        }

    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle * (Math.PI / 360) * this.direction);
        ctx.fillStyle = this.color;
        ctx.fillRect(0 - this.width / 2, 0 - this.height / 2, this.width, this.height);
        ctx.restore();
    }
}

for (let i = 0; i < 100; i++) {
    particlesArray.push(new Confetti());
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();


    }

    requestAnimationFrame(animate);
}
animate();
