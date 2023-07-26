/**
 * Captura inputs do usuÃ¡rio pelo CLI (command line interface)
 * @param {string} message - Mensagem informada no input
 * @returns {Promise} - Retorna o valor capturado
 */
 const getInput = (message) => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

    return new Promise((resolve, reject) => {
        if(!message) reject('Mensagem invÃ¡lida!')

        rl.question(message, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

/**
 * Estrutura que executa as instrucoes do programa
 */
async function program() {
   let valorUsuario=[];
   let soma1=0;
   for(i=0; i<=4; i++)/* i é o contador */ {
    valorUsuario[i]= Number(await getInput("Informe o valor: "))
    soma1 = soma1 + valorUsuario[i];
    console.log(" A soma dos números é: ", soma1)
   }
   media = soma1/5;
   console.log("A media dos preços é: ", media); 
    for(i=0; i<=4;i++){
         if(valorUsuario[i]>media){
            soma1 = soma1 + valorUsuario[i];
            media = soma1/5;
             console.log("Esse valor é maior que a media: ",valorUsuario[i] )    
         }
         else {
            
            console.log("Esse valor não é maior que a media: ", valorUsuario[i])
         }
    }
}
   

   
// Chamada da execucao.

program()