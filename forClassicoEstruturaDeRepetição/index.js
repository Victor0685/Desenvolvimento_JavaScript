/* console.log(linha 0)
cosole.log( linha 2)
console.log(linha 3)
console.log( limha 4)
console.log( linha 5)
*/
// o i significa index
for (let i = 0; i <=5; i++) {
console.log(`Linha ${i}`)
}
// pular um numero mair que 1 no index se faz assim: incrementar: (i += 2) / decrementar: (i -= 2)

// par ou impar
for (let i = 0; i<= 10; i++){
    const par = i % 2 ===0 ? 'par' : 'impar';
    console.log(i,par)
}

// percorrer um array com um for
const frutas = ['maça','pera','uva']
// para pegar um indice no array = console.log(frutas[1]) mostra como resultado a 'pera'
// para pegar o tamanho do array = console.log(frutas.lenght) o resultado é = 3 

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

