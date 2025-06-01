// Pegando o canvas e o contexto

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Fazendo o canvas ocupar a tela toda
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres que vão "cair" — pode ser o que quiser!
const letters = "アァイィウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const chars = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize; // número de colunas

// Um array com a "posição Y" de cada coluna
const drops = new Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    // Pintando o fundo levemente transparente pra deixar o rastro
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Estilo das letras
    ctx.fillStyle = "#3c6dff"; 
    ctx.font = fontSize + "px monospace";

    // Loop por cada coluna
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Resetando a posição aleatoriamente pra dar um efeito de loop
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementa a "queda"
        drops[i]++;
    }
}

// Chama a função a cada 33ms (quase 30fps)
setInterval(drawMatrix, 33);

// Atualiza o tamanho do canvas se a janela mudar
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Conectando as páginas

document.querySelector('button').onclick = function(){
    window.location.href = "/assets/pages/gallery.html"
}