/*const h1 = document.querySelector('.container h1') // selecionando
const data9 = new Date(); 

function getDiaSemanaTexto(diaSemana9){
    let diaDaSemanaTexto9;

    switch (diaSemana9)
    {
        case 0:
            diaDaSemanaTexto9 = "Domingo"
            return diaDaSemanaTexto9;
        case 1:
            diaDaSemanaTexto9 = "Segunda-feira"
            return diaDaSemanaTexto9;
        case 2:
            diaDaSemanaTexto9 = "Terça-feira"
            return diaDaSemanaTexto9;
        case 3:
            diaDaSemanaTexto9 = "Quarta-feira"
            return diaDaSemanaTexto9;
        case 4:
            diaDaSemanaTexto9 = "Quinta-feira"
            return diaDaSemanaTexto9;
        case 5:
            diaDaSemanaTexto9 = "Sexta-feira"
            return diaDaSemanaTexto9;
        case 6:
            diaDaSemanaTexto9
             = "Sábado" 
             return diaDaSemanaTexto9;
        default:
            diaDaSemanaTexto9 = "Dia errado"  
            return diaDaSemanaTexto9; 
    }
}

function getNomeMes(numeroMes){
    let nomeMes;

    switch (numeroMes)
    {
        case 0:
            nomeMes = "Janeiro"
            return nomeMes;
        case 1:
            nomeMes = "Fevereiro"
                return nomeMes;
        case 2:
            nomeMes = "Março"
            return nomeMes;

        case 3:
            nomeMes = "Abril"
            return nomeMes;
        case 4:
                nomeMes = "Maio"
                return nomeMes;
        case 5:
            nomeMes = "Junho"
            return nomeMes;
        case 6:
            nomeMes = "Julho"
            return nomeMes;
        case 7:
            nomeMes = "Agosto"
            return nomeMes;
        case 8:
            nomeMes = "Setembro"
            return nomeMes;
        case 9:
            nomeMes = "Outubro"
            return nomeMes;
        case 10:
            nomeMes = "Novembro"
            return nomeMes;
        case 11:
            nomeMes = "Dezembro"
            return nomeMes;    
    }
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data9){
    const diaSemana = data9.getDay();
    const numeroMes = data9.getMonth();
    const nomeDia =getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data9.getDay()} de ${nomeMes}`+
    ` de  ${data9.getFullYear()}`+
     ` ${zeroAEsquerda(data9.getHours())}:${zeroAEsquerda(data9.getMinutes())}`)
}
h1.innerHTML= criaData(data9)
*/

// ou podemos fazer desse jeito

/*const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)
*/


// ou podemos fazer assim tambem

const h1 = document.querySelector('.container h1') // selecionando
const data9 = new Date(); 

function getDiaSemanaTexto(diaSemana9){
   const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira','Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
   return diasSemana[diaSemana9]
}

function getNomeMes(numeroMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'setembro', 'outubro', 'Nobembro', 'Dezembro' ]
    return meses[numeroMes]
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data9){
    const diaSemana = data9.getDay();
    const numeroMes = data9.getMonth();
    const nomeDia =getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data9.getDay()} de ${nomeMes}`+
    ` de  ${data9.getFullYear()}`+
     ` ${zeroAEsquerda(data9.getHours())}:${zeroAEsquerda(data9.getMinutes())}`)
}
h1.innerHTML= criaData(data9)
