const h1 = document.querySelector(".container h1")
const data = new Date();
const opcoes = {
    dateStyle: "Full",
    timeStyle: "Short"
};

h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes);