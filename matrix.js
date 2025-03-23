const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Nastavte velikost canvasu na celou obrazovku
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Znaky, které budou padat
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
const charactersArray = characters.split('');

// Nastavení sloupců a rychlosti
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Inicializace pozic padajících znaků
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height);
}

// Funkce pro vykreslení efektu
function draw() {
    // Nastavte poloprůhledné pozadí pro rozmazaný efekt
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Nastavte barvu a styl písma
    ctx.fillStyle = 'limegreen';
    ctx.font = `${fontSize}px monospace`;

    // Vykreslete znaky pro každý sloupec
    for (let i = 0; i < drops.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Resetujte pozici, pokud znak spadne z obrazovky
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Posuňte znak dolů
        drops[i]++;
    }
}

// Spusťte animaci
setInterval(draw, 50);

// Přizpůsobte velikost canvasu při změně velikosti okna
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});