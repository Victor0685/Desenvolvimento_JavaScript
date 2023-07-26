//capturar o evento do formulario
const form = document.querySelector('#formulario')// id seleciona com o #


// o evento. target vai informar o elemento que vai receber o evento
form.addEventListener('submit', function(evento){
evento.preventDefault();
const inputPeso = evento.target.querySelector("#peso")
const inputAltura = evento.target.querySelector("#altura")

const peso = Number(inputPeso.value);//valor do input
const altura = Number(inputAltura.value);

//dentro de uma funçao nada mais é executado depois de um return

// se for diferente de peso,return false com essa mensagem
if (!peso) {
    setResultado("Peso inválido", false);
    return;
}
if (!altura){
    setResultado("Altura Inválida", false)
    return;
}

const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc)

const msg = `O seu IMC é ${imc} (${nivelImc}).`

//colocando a classe como verdadeira 
setResultado(msg, true);

});

// lista de string ( baseado no imc)
function getNivelImc(imc){
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

    // apartir que a função encontrar a palavra return ela não vai ser mais executada

    // checagem de tras pra frente 

    if (imc >= 39.9){
        return nivel[5];
    }
    if (imc >= 34.9){
        return nivel[4];
    }
    if (imc >= 29.9){
        return nivel[3];
    }
    if (imc >= 24.9){
        return nivel[2];
    }
    if (imc>= 18.5){
        return nivel[1];
    }
    if (imc<18.5){
        return nivel[0];
    }
}

// calculo imc
function getImc (peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

// função para criar paragrafos
function criaParagrafo(){
    const p = document.createElement("p");
    return p;
}

// receber resultados (seta os resultados) se são validos
function setResultado (mensagem, isValid){
    const resultado = document.querySelector('#resultado');

    //zerando html do resultado
    resultado.innerHTML = ""; 
    
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add("paragrafo-resultado")
    }//adiciona uma classe na lista de classes desse paragrafo 
    
    //se for incorreto
    else {
        p.classList.add("bad")
    }

    //adicionando o paragrafo no resulatdo
    p.innerHTML = mensagem
    resultado.appendChild(p)//insere um elemento
}


