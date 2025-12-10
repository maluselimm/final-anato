// Lista de temas
const temas = [
    "Tecnologia",
    "Filosofia",
    "Cultura Pop",
    "Ciência",
    "História",
    "Artes",
    "Psicologia",
    "Desenvolvimento Pessoal",
    "Música",
    "Literatura",
    "Cinema",
    "Esportes"
];

// Função para mostrar um tema aleatório
function mostrarTemaAleatorio() {
    const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];
    document.getElementById("tema").textContent = temaAleatorio;
}

// Chama a função na carga inicial da página
window.onload = mostrarTemaAleatorio;
