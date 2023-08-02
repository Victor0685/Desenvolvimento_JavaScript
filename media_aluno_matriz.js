let mediaAlunos = [];
let maiorMedia = 0;
let soma = 0;
let mediaTurma = 0;


//                          DECLARAÃ‡ÃƒO DO ARRAY
let alunos = [["Victor", 10, 8], ["Thaissa", 6.5, 6], ["Marina", 3.5, 8], ["Otaviano", 8, 1], ["Romario", 5, 3]];


//      ESTRUTURA DE REPETIÃ‡ÃƒO PARA AS MÃ‰DIAS
for (let a = 0; a < alunos.length; a++) {
    mediaAlunos[a] = (alunos[a][1] + alunos[a][2]) / 2;

};

//                NOTAS DE CADA ALUNO JUNTO COM A MÃ‰DIA
for (let a = 0; a < alunos.length; a++) {
    console.log(`A nota da primeira prova do ${alunos[a][0]} foi: ${alunos[a][1]}`);
    console.log(`A nota da segunda prova foi: ${alunos[a][2]}`);
    console.log(`A mÃ©dia Ã©: ${mediaAlunos[a]}`);
    console.log();
}


//                         MÃ‰DIA DA TURMA
for (let a = 0; a < alunos.length; a++) {
    soma += mediaAlunos[a]
}
soma = soma / alunos.length;
console.log(`A mÃ©dia da turma Ã©: ${soma}`);
console.log();

console.log(` A maior mÃ©dia da Turma Ã©: ${Math.max(parseFloat(mediaAlunos))}`)