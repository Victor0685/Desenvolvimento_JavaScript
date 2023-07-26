/* Luiz Otávio Miranda tem 30 anos, pesa 84 Kg
Tem 1.8 de altura e seu IMC é de 25.9255925925925924
Luiz Otavio nasceu em 1992*/
const nome = "luiz Otávio"
const sobrenome = "Miranda"
const Idade = 30
const Peso = 84
const altura = 1.80// para a formula dar certo tenho que passar metros para centímetros (1.80 = 180)
let imc; // peso / (altura * Altura)
let anoNascimento

imc = (Peso/(altura*altura))
anoNascimento = 2022 - Idade

console.log (nome, sobrenome, "tem", Idade, "anos de idade, pois ele nasceu em", anoNascimento)
console.log ("Ele pesa", Peso,"Kilos, tendo assim", altura, "de altura")
console.log("Com base na altura e no peso de",nome,",o seu índice de masa corporal é de:",imc)



