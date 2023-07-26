// criar uma lista
//                0       1
const alunos = ['Luiz', 'Maria', 'João']; // os arrays são indexados por elemento
console.log(alunos)
console.log(alunos[1]) //posso acessar o indice 1

// posso editar os valores 
alunos[0]= 'Eduardo'
console.log(alunos)

// posso saber o tamanho do meu array
console.log(alunos.length)

//posso coocar um elemento ao final do meu array
alunos.push("Romario")
console.log(alunos)

//posso adicionar elementos no começo
alunos.unshift("Victor")
console.log(alunos)


//posso remover elemento do array
alunos.pop(); //remove do final
console.log(alunos)
// posso salver ver os elemento que foram removidos
const removido = alunos.pop();
console.log(removido)

//remove do começo
alunos.shift();
console.log(alunos)
const removidoComeco = alunos.shift();
console.log(removidoComeco)

//apagar um elemento sem apagar o seu indice
delete alunos[1] // fica um elemento vazio

//posso fatiar o array
console.log(alunos.slice(0,3))
//posso fatiar da direita para a esquerda
console.log(alunos.slice(0, -2))// vai pegar o tamanho completo e subtrair pelo valor que vc colocou em negativo

console.group(typeof alunos) // objeto
console.log(alunos instanceof Array) // pergunta se é uma intancia de array (true/false)

//podemos acessar um indice que não existe no array
console.log(alunos[999])

// pegar o tamnho do array
alunos[alunos.length] = 'tura'

const array = [1,2,3]; // mesmo que é um const posso fazer essas alterações
array.push(4);
array[0] = "Luiz"
console.log(array)
//Só isso que eu não posso fazer // array = [4,5,6];

//array é criado com []