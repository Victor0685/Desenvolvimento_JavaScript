const pessoa = {
    nome: 'Victor',
    sobrenome: 'Batista',
    idade: 19,
    endereco: {
        bairro: 'Jardim Floridia',
        numero: 593
    }
};
// para mostrar apenas uma informção
console.log(pessoa.nome)

// para jogar em uma variavel
// atribuição normal
/*
const nome = pessoa.nome;
console.log(nome)
*/

// atribuição via desestruração
/*
const { nome } = pessoa;
console.log(nome)
*/
// passei o objeto e mendei ele extrair desse objeto essa chave aqui no nome que ja cria uma variavel que come com um nome que eu estou buscando que no caso é o nome da da chave que esta dentro do objeto mesmo 

// asssim fica mais facil pois posso pegar quantas variaveis eu quiser

/*
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade)
*/

// se alguma variavel não existir dentro do meu objeto eu posso setar um valor padrão pra ela para não dar undefined
/*
const { nome = '', sobrenome, idade} = pessoa
*/
// vai mostrar um valor vazio caso não seja escrito nada na variavel nome do objeto

// eu posso mudar o nome da variavel do objeto
/*
const { nome: teste = '', sobrenome, idade} = pessoa;
console.log(teste,sobrenome,idade) // o teste vai ter o valor de nome do objeto
*/

// biblioteca react naitv tem tudo isso explicado

// aqui o endereço vai vir em forma de objeto
/*
const {endereco}= pessoa
console,log(endereco)
*/
// posso especificar para sair do objeto
/*
const {endeco: {rua, numero } } = pessoa;
console.log(rua, numero)
*/

// eu quero que a rua seja atribuida a variavel r
/*
const { endereco: { rua: r,} } = pessoa
console.log(r)
*/
// podemos colocar um valor padrão caso não seja nada escrito na rua
/*
const { enderco:{ rua: r = 12345} } = pessoa
console.log(r)
*/

// podemos usar o operador rest para pegar o restante das informações
/*
const { nome, ... resto } = pessoa
console.log(resto) tem tudo menos o nome
*/
