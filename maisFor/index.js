const frutas = ['pera', 'maça', 'uva']

//for classico
for(let i = 0; i< frutas.length; i++){
console.log(frutas[i])
}

//for in, ele le os indices ou as chaves do objeto
for (let i in frutas){
    console.log(i)
}

// utilizar como objeto

const pessoa = {
    nome: 'Victor',
    sobenome:'Batista',
    Idade: 19
};

for (let i in pessoa){
    console.log(i)
} // aqui ele lê as cahaves

// aqui ele vai ler as informações que estão dentro das chaves
/*
for (let i in pessoa){
    console.log(pessoa[i])
}

acessar as duas informações tambem

for (let i in pessoa){
    console.log(i,pessoa[i])
}
*/

// podemos acessar as informações que estão dentro das chaves assim no objeto = console.log(pessoa.nome)

// for of no array 
const nome = 'Victor Batista'

// interar
//for classico
for ( let i = 0; i< nome.length; i++){
    console.log(nome[i])
}

// for in funciona para objetos
for ( let i in nome){
    console.log(nome[i])
}
// exemplo
const ser = {
    nome: 'Victor',
    sobrenome: 'Batista'
};
for (let chave in ser){
    console.log(chave, ser[chave])
}

// for of, para objetos não conseguimos utilizar o for of, pois o objeto não é interavel
for (let valor of nome){
    console.log(valor)
}

//for que recebe uma função
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

// interavel= tudo que tem indice como string e array

// for classico - geralmente com interaveis ( array ou string)
// for in - Retorna o imdice ou chaves (string, array ou objetos)
// for of - Retorna o valor em si ( interaveis, arrays ou string)