let nome // Só declarou avariavel
nome= "qualquer valor" // Deu o valor para a variavel
console.log(nome)
nome = "Otavio" // Declarei outro valor para a variavel
console.log(nome)
//nao podemos criar variaveis com palavras reservadas = let if// if ´é a condição SE
// Let nome=eu// isso nao pode fazer// so pode fazer os exemplos de acima
//a variavel não pode começar com um numero= let 1nome
//a variavel tambem nao pode conter espaços ou traços= let nome-cliente
//para que voce possa utilizar nomes compostos como exemplo acima, utiliza o camelCase= let nomeCompleto
//case-sensitive=se vc colocar nomes compostos em uma variavel com ou sem letra maiuscula tem diferença= let nomeCliente = joao// let nomecliente = otavio
// nao utilise VAR e sim let ou const= o valor da variavel nao muda por nada, ela é contante
// nao podemos modificar o valor de uma const= const nome=5// console.log (nome)// ja tem que dar o valor direto no const ^ 
const primeiroNumero = 5
const SegundoNumero = 10
const resultado = primeiroNumero * SegundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado =resultado * 3
resultadoTriplicado = resultadoTriplicado + 5 // aqui eu alterei o valor da variavel resultadoTriplicado, pois eu perdi o primeiro valor do ResultadoTriplicado por conta de eu ter usado a variavel LET ao invés de ter usado CONST
console.log(resultadoTriplicado),




// para descobiri o tipo da sua variavel é so colocar 
console.log (typeof primeiroNumero)
