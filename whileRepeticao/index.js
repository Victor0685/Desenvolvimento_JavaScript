let i = 0;

while (i <= 10){
console.log(i);
i++;
}

const nome = "Victor";
let o = 0;

while (o <= nome.length){
console.log(nome[o]);
o++;
}

// função alatorio

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);// para gerar um numero inteiro
}
const min = 1;
const max = 50;
// informando que o numero alatorio tem que que ir de ate o 50
let rand = random(1, 50);

//quando o numero for 10 ele sai fora do laço de repetição
while(rand !==10){
    rand = random(min, max); // atualizando o valor da variavel para não ter um laço infinito
    console.log(rand)
}

// do while executa o codigo primeiro e depois chega a condição
// se o rand for 10: let rand = 10, o primeiro while não vai ser executado, vai passar direto, já no do while ele vai ser executado 1 vez

do {
    rand = random(min, max);
    console.log(rand);
}while(rand!==10);