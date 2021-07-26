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
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.width = 20;
        this.height = 30;
        this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.weight = Math.floor(Math.random() * 4) + 3;
        this.rotation = (Math.PI * 2) * Math.random();
        this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.009;
    }

    update() {

        this.y += this.weight;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height;
        }

    }

    draw() {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
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

    requestAnimationFrame(animate)
}
animate();