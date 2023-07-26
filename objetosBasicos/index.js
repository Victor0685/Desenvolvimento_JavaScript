/*const pessoa1 = {
nome: "luiz",
sobrenome: "Miranda",
idade: 25
};
 //posso acessar as informações assim
console.log(pessoa1.nome);
conseole.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//objeto é criado com {}
*/
// funçao e objetos

function criaPessoa(nome, sobrenome, idade,) /* parametro*/ {
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa("Victor", "Batista", 19) //argumento(valor que é passado para o parametro)
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//posso utilizar para a facilitação de criação

const pessoa2 = criaPessoa("Otaviano", "Melô", 22);
const pessoa3 = criaPessoa("Romario", "Batista", 23);
const pessoa4 = criaPessoa("Thaissa", "Batista", 19);
const pessoa5 = criaPessoa("Giulia", "Batista", 13);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

console.log(pessoa3.nome);
console.log(pessoa3.sobrenome);
console.log(pessoa3.idade);

console.log(pessoa4.nome);
console.log(pessoa4.sobrenome);
console.log(pessoa4.idade);

console.log(pessoa5.nome);
console.log(pessoa5.sobrenome);
console.log(pessoa5.idade);

// posso adicionar incremento
const pessoa6 = {
    nome: "Victor",
    sobrenome: 'Batista',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },
    icrementalidade(){
        this.idade++
    }
};

pessoa6.fala();
pessoa6.icrementalidade();
pessoa6.fala();
pessoa6.icrementalidade();
pessoa6.fala();pessoa6.icrementalidade();
pessoa6.fala();pessoa6.icrementalidade();
pessoa6.fala();
