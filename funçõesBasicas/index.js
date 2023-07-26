function saudacao1(nome) {
    console.log(`Bom Dia ${nome}`);
}

/*saudacao1("Victor");
saudacao1("Maria");    //posso adicionar quanatas vezes que quiser
saudacao1("Felipe");
*/

// vai retornar undefined
/*function saudacao1(nome){
    console.log(`Bom Dia ${nome}`);
    }
    const variavel = saudacao1("Luiz")
    console.log(variavel)
*/
    // para retornar um valor
/*
function saudacao1(nome){
console.log(`Bom Dia ${nome}`);
return 12345
}

const variavel = saudacao("Luiz")
console.log(variavel) // vai ser 12345
*/

// o certo é

/*function saudacao1(nome){
    return `Bom dia ${nome}`
    }
    const variavel = saudacao1("Luiz");
    console.log(variavel)
*/

// podemos fazer calculos
/*
function soma(x,y) {
    const resultado = x + y;
    return resultado;
} // tudo que estiver dentro das chaves esta protegido, não conseguimos alterar esses valores fora das chaves

console.log(soma(2,2));
console.log(soma(4,4));
console.log(soma(10,10));
*/
// podemos salvar na memoria
/*function soma(x,y) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(2,2);
console.log(resultado);
*/

//protegido
/*function soma(x,y) {
    const resultado = x + y;
    return resultado; // apartir da palavra return= nada mais que estiver abaixo dafunção/ não é mais executado// só vai executar se colocar mais um return abaixo =
    function soma(x,y) {
    const resultado = x + y;
    return resultado;
    console.log("Ola mundo");
    return resultado;
    }
    const resultado = soma(2,2);
    console.log(resultado);
    */

    // concatenar
/*function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma("Luiz"," Otavio");
console.log(resultado)
*/

// podemos colocar valores pre definidos

/*function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma();// não foi informado valor algum para X e Y
console.log(resultado);
*/

//com isso podemos informar apenas um valor

/*function soma(x=1,y=1) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(4); //so o valor do X informado
console.log(resultado)
*/

// funçao dentro de uma variavel (função anonima)

/*const raiz = function (n){
return n ** 0.5//= raiz quadrada
}; // precisa terminar com ;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

//ierow functuion(simplificação da função)
/*const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
*/







