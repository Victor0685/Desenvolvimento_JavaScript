let cpf = [1, 9, 2, 1, 4, 0, 3, 6, 8, 3, 7];
let somaPart1 = 0;
let somaPart2 = 0;
let resto1 = 0;
let resto2 = 0;
let cal1 = 10;
let cal2 = 11;
let dig1 = 0;
let dig2 = 0;
let cpfnew1 = cpf[9];
let cpfnew2 = cpf[10];

if (cpf.length < 11 || cpf.length > 11) {
    console.log("Tamanho de CPF invÃ¡lido")
} else {

    for (i = 0; i <= 8; i++) {
        somaPart1 += (cpf[i] * cal1);
        cal1 -= 1;
    }
    resto1 = (somaPart1 % 11) // retorna o inteiro restante da divisÃ£o
    dig1 = 11 - resto1

    if (dig1 >= 10) {
        dig1 = 0
    }

    if (dig1 != cpf[9]) {
        console.log("CPF invÃ¡lido")

    } else {

        //  cpf.push(dig1)

        for (i = 0; i <= 9; i++) {
            somaPart2 += (cpf[i] * cal2);
            cal2 -= 1;
        }

        resto2 = (somaPart2 % 11)
        dig2 = 11 - resto2
        if (dig2 >= 10) {
            dig2 = 0
        }

        if (dig1 == cpf[9] && dig2 == cpf[10]) {
            console.log("Verificando CPF....")
            console.log("CPF vÃ¡lido!")

        }
        else {
            console.log("CPF invÃ¡lido")
        }

    }
}