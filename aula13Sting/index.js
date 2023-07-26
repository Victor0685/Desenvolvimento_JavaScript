//               012345678    cada caractere tem um indice
let umaString = "um 'texto'";
let umaString2 = "um \"texto\"";
let umaString3 = `um 'texto'`
let umaString4 = `um "texto"`
//essas são as formas que vc pode escrever uma string

console.log(umaString[4]) //aqui so vai mostrar o elemento "t" pois por causa dos colchetes eu so quero que mostre o indice 4 
console.log(umaString2.charAt(6)) // essa função permite que so  monstre o indice que esta na posição 6: "x"

console.log(umaString3)

console.log(umaString4)

let umaString5 = "um texto "
console.log(umaString5.concat('um ', 'lindo'))//essa função faz a concatenação
console.log(umaString5+ 'em um lindo dia')
console.log(`${umaString5}em um lindo dia`)
//todas essa maneiras acima concatisa as string

let string = "um texto"
console.log(string.indexOf('texto'))// aqui mostra o numero do indice que começa a palavra "texto" de frente pra tras
console.log(string.lastIndexOf("o"))// ele começa a buscar de tras pra frente na string
console.log(string.match(/[a-z]/g))// espresão regular que retornar todas as letras minusculas do texto

 console.log(string.search(/x/))// ele vai encontar a letra "x" em indice que ela vai estar
 

 console.log(string.replace("um", "outra"))//essa função faz a substituição da palavra

 console.log(string.match(/[a-z]/))//se vc colocar /x/ da inicio a função expresão regular= pega a primeira palavra minuscula, mostra o indice dela, qual foi o texto que foi executado, e o grupo/tipo dela






