// não poodemos redeclarar uma variavel
/*
let nome2 = 'giulia'
*/

// o var ja pode fazer a redeclaração
/*
var nome = 'dario'
var nome = 'romario'

let tem escopo de bloco
var tem escopo de função*/

/*
const verdadeira = true;

var nome = 'luiz' //criando
let nome2 = 'victor' // criando

if (verdadeira){
    let nome = 'Romario'// redeclaração
    console.log(nome, nome2)
}// isso não vai dar erro, pois o let tem escopo de bloco = tudo que tiver dentro de chaves= {.......bloco}, não estamos redeclarando a variavel, estamos criando outra varivel dentro de um bloco

// * o motor javascript vai procurando as variaves nos blocos disponiveis = vai de bloco em bloco ate chegar no bloco global, e se não achar da um erro.
*/

// para o var função
// toda função tem um escopolo especial, pois tudo que tiver dentro de uma função esta , protege as variaveis que estão dentro dela

/*
detalhe importante
 function falaOi (){
    var nome = "ribinho"
 }
 console.log(nome)
 falaOi()
 tenho que colocar o console.log dentro do bloco da função para poder dar um valor para a fução, se fizer desse jeito o valor não vai ser definido
 */
// a meniracerta pode ser assim
/*
//desse jeito esta protegido as variaveis dentor da função
function falaOi(){
    var nome = 'Victor'
    console.log(nome)
}
falaOi();

// ou
// aqui o sobreenome não esta protegido, pois ele esta no bloco geral

var sobrenome = 'Batista'

function falaOi2(){
    console.log(sobrenome)
}
falaOi2()
*/

// com let na função maneira errada

/*
    function falaOi (){
    
      if (verdadeiro){
        let nome = 'Victor'
      }  
      console.log(nome)
    }
  falaOi()
  // aqui não defino o valor da variavel 'nome'  
*/
// maneira certa
/*
function falaoi3 () {
    if (verdadeiro){
        let nome = 'victor'
        console.log(nome)
    }
}
falaoi3()
*/
// com var não teria problema e podeia fazer conforme o exemplo errado mostrado acima

// rostin (acontece com o var e com a function)
// nesse exemplo estou usando a variavel antes de declarala
/*
console.log(sobrenome)
*/
// isso vai dar erro

// mas isso vai dar undefined
/*
console.log(sobrenome)

var sobrenome= 'victor'
*/

// isso acontece pois o javascript eleva a declaração de variaveis (rostin) declara as variaveis no topo do arquivo
// mas isso não acontece com o let = da´erro pois é exatamente o que era pra acontecer

/* o rostin na função so vai acontecer assim = function falaoi(){

}

// assim não acontece = const func = function (){
    
}
*/