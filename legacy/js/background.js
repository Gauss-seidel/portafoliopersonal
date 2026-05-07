document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    const waves = [];

    class SineWave {
        constructor(options) {
            this.amplitude = options.amplitude;
            this.length = options.length;
            this.speed = options.speed;
            this.phase = 0;
            this.color = options.color;
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(0, height / 2);

            for (let x = 0; x < width; x++) {
                const y = height / 2 + this.amplitude * Math.sin((x / this.length) + this.phase);
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            this.phase += this.speed;
        }
    }

    function init() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        waves.length = 0;

        // Crea varias ondas
        waves.push(new SineWave({
            amplitude: 40,
            length: 200,
            speed: 0.02,
            color: 'rgba(66,153,225,0.3)'
        }));

        waves.push(new SineWave({
            amplitude: 60,
            length: 300,
            speed: 0.015,
            color: 'rgba(246,173,85,0.25)'
        }));

        waves.push(new SineWave({
            amplitude: 30,
            length: 150,
            speed: 0.01,
            color: 'rgba(45,55,72,0.2)'
        }));
    }

    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#FAFBFC');
        gradient.addColorStop(1, '#F0F4F8');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    }

    function animate() {
        drawBackground();
        waves.forEach(wave => wave.draw());
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);

    init();
    animate();
});
