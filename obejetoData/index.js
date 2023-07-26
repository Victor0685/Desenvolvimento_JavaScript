//função date
const data = new Date();// dec 22 2022 = hora de agora
console.log(data.toString())

const dataO= new Date(0)// epoca unix - tres horas = 21:00
console.log(dataO.toString())

const tresHoras = 60*60*3*1000
const data2 = new Date(0+ tresHoras)// 01/01/1970 epoca unix
console.log(data2.toString())

const umDia = 60*60*24*1000
const data3 = new Date(0+tresHoras+umDia) //02/01/1970
console.log(data3.toString())

const data4 = new Date(2023,3,20,15,14,27) // ano, mes, dia, hora, minuto,segundo = 20 de abril 15:14 e 27 segundos de 2023
//*  o mes começa do 0
console.log(data4.toString())

// melissimo de sundos vai ate 999

const data5 = new Date(2023,3,20,15,14,27,1000)// como o milesegundo so vai ate 999. aqui ele vai corregir para 2023,3,20,15,14,28)
console.log(data5.toString())

// data em formato de string 
const data6 = new Date("2022-04-20 20:30:59")
console.log(data6.toString())

// para aparecer cada um 
const data7 = new Date("2021-04-21 22:30:30")
console.log("Dia", data7.getDate())
console.log("Mês", data7.getMonth()) // mes começa do 0
console.log("Ano", data7.getFullYear())
console.log("Hora", data7.getHours())
console.log("Minuto", data7.getMinutes())
console.log("Segundo", data7.getSeconds())
console.log("Milisegundos", data7.getMilliseconds())
console.log("Dia da semana", data7.getDay())// 0 é domindo e sabado é 6
console.log(data7.toString())

// para obter os milesimos de segundos desde a epoca unix ate hj
console.log(Date.now())
// se colocar esse valor na new data mostra a data de hj contados em milesimos de segundos
const data8 = new Date(1672710715770)
console.log(data8.toString())


function formataData(data9){
    const dia = zeroAEsquerda(data9.getDate())
    const mes = zeroAEsquerda(data9.getMonth() + 1)// tem que corrigir pois o nosso mes não começa no 0
    const ano = zeroAEsquerda(data9.getFullYear())
    const hora = zeroAEsquerda(data9.getHours())
    const minutos = zeroAEsquerda(data9.getMinutes())
    const segundos= zeroAEsquerda(data9.getSeconds())

    return `${dia}/${mes}/${ano}  e são: ${hora}:${minutos}:${segundos}`
}
const data9 = new Date();
const dataBrasil = formataData(data9);
console.log(dataBrasil)

// função para adiciona o zero com os parametros dentro da outra função
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}