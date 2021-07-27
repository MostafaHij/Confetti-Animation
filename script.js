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
