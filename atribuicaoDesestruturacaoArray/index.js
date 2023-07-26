/*let a = 'a'; // b
let b = 'b'; // c
let c = 'c'; // a
*/

//reatribuino
//[a, b, c]     =   ['b','c','a'] // atribuição via desestruturação

// ou 
/* const valores = [1,2,3]
[a,b,c] = numeros
*/

/*console.log(a,b,c)

const numeros = [1,2,3,4,5,6,7,8,9];
const primeiroNumero = numeros[0]
// mostrendon o indice 0
console.log(numeros[0])
*/

// podemos criar dessa forma, atribuição via desestruturação
/*
const [primeiroNumero, segundoNumero] = numeros
console.log(primeiroNumero, segundoNumero)
*/

// podemos pegar o resto das coisas dentro do array
/*
const numeros = [100,200,300,4000,5000]
conmst [primeroNumero, segundoNumeros, ...resto] = numneros
console.logprimeiroNumero,segundoNumero)
console.og(resto);
*/

// o ....rest = pegar o resto de alguma coisa, e quando queremos espalhar alguma coisa usamos o spread

/* podmos pular elementos
const numeros = [1,2,3,4,5,6,7,8]
const [um, , tres, ,cinco, ,sete]
console.log(um,tres,cinco)
*/

// array com lista
const numeros = [
    [1,2,3], [4,5,6], [7,8,9]
]

// para acessar o numero 5
console.log(numeros[1][1])

