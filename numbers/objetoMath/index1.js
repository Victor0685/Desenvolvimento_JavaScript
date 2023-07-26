// OBJETO Math = Matematica

let num1 = 9.54578;
//let num2 = Math.floor(num1); // arredonda para baixo
//let num2 = Math.ceil(num1) // arredonda pra cima
//let num2 = Math.round(num1) // arredonda para o mais proximo, tanto para cima ou para baixo, vai depender das casas decimais
//console.log(num2)

console.log(Math.max(1,2,3,4,5,6,-10,-50,89,15500,-985623)) // aqui vai pegar o maior numro dessa seguencia
 
console.log(Math.min(1,2,3,4,5,6,-10,-50,89,15500,-985623)) // aqui vai pegar o menor numero dessa seguencia


console.log (Math.random()) // vai criando um numero aleatorio entre zero e 1, so que o 1 nunca vai ser incluido

const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio)// gera numros aleatorios entre 10 e 5
/* para tirar os numros decimais, podemos arendondar
const aleatorio = Math.round (Math.random() * (10 - 5) + 5;
*/

console.log(Math.PI); //valor de PI
console.log(Math.pow(2, 10)) //potenciação= 2 elevado a 10

// OU

console.log(2 ** 10);

let num3 = 9
console.log(num3 ** (1/2)) // raiz quadrada

//OU

console.log(num3 ** 0.5)

console.log(100/0); // nao da erro e é verdadeiro, pois da o valor infinity//infinito











