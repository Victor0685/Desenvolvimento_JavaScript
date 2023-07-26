// pegar o dia da semana
/*
const data = new Date();
const diaSemana = data.getDay();

console.log(diaSemana)

//Fazendo com if
*/

/*const dataA = new Date("1987-04-22 12:00:30"); //segunda feira
const diaSemana2 = dataA.getDay();
let diaDaSemanaTexto;*/


/*
if (diaSemana2 === 0){
    diaDaSemanaTexto= "Domingo"
}
else if (diaSemana2 === 1){
    diaDaSemanaTexto= "Segunda"
}
else if (diaSemana2 === 2){
    diaDaSemanaTexto= "Terça"
}
else if (diaSemana2 === 3){
    diaDaSemanaTexto= "Quarta"
}
else if (diaSemana2 === 4){
    diaDaSemanaTexto= "Quinta"
}
else if (diaSemana2 === 5){
    diaDaSemanaTexto= "Sexta"
}
else if (diaSemana2 === 6){
    diaDaSemanaTexto= "Sábado"
}
else {
    diaDaSemanaTexto = ""
}
console.log(diaSemana2, diaDaSemanaTexto)
*/

// fazendo com switch

/*
switch (diaSemana2)
{
    case 0:
        diaDaSemanaTexto = "Domingo"
        break;
    case 1:
        diaDaSemanaTexto = "Segunda"
        break;
    case 2:
        diaDaSemanaTexto = "Terça"
        break;
    case 3:
        diaDaSemanaTexto = "Quarta"
        break;
    case 4:
        diaDaSemanaTexto = "Quinta"
        break;
    case 5:
        diaDaSemanaTexto = "Sexta"
        break;
    case 6:
        diaDaSemanaTexto = "Sábado" 
        break;
    default:
        diaDaSemanaTexto = "Dia errado"   
}
// o break é nescessario para parar de executar o codigo quando for avaliado como verdadeiro, se não o codigo não vai parar de ser executado 
console.log(diaSemana2, diaDaSemanaTexto)
*/
// colocando ele um uma função

const data3 = new Date("1987-04-26 00:00:00");
let diaSemana3 = data3.getDay();
const diaDaSemanaTexto2 = getDiaSemanaTexto(diaSemana3);

function getDiaSemanaTexto(diaSemana3){
    let diaDaSemanaTexto2

    switch (diaSemana3)
    {
        case 0:
            diaDaSemanaTexto2 = "Domingo"
            return diaDaSemanaTexto2;
        case 1:
            diaDaSemanaTexto2 = "Segunda"
            return diaDaSemanaTexto2;
        case 2:
            diaDaSemanaTexto2 = "Terça"
            return diaDaSemanaTexto2;
        case 3:
            diaDaSemanaTexto2 = "Quarta"
            return diaDaSemanaTexto2;
        case 4:
            diaDaSemanaTexto2 = "Quinta"
            return diaDaSemanaTexto2;
        case 5:
            diaDaSemanaTexto2 = "Sexta"
            return diaDaSemanaTexto2;
        case 6:
            diaDaSemanaTexto2
             = "Sábado" 
             return diaDaSemanaTexto2;
        default:
            diaDaSemanaTexto2 = "Dia errado"  
            return diaDaSemanaTexto2; 
    }
   
}
console.log(diaSemana3, diaDaSemanaTexto2)
// a função tem o seu esclopo proprio, ou seja as variaveis que esdtão dentro da função não existem fora dela. e usando a função fica amis facil reutilizar ela em qualquer parte do seu codigo, usando apenas o nomne da sua função