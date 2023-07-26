const num1 = Number(prompt("Digite um número: "));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

/*
Raiz quaddrada:

Se é um número inteiro:

É NaN:

Arrendondando para baixo:

Arrendondando para cima:

Com dua casas decimais:
*/

numeroTitulo.innerHTML = num1;
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${num1 ** (1/2)} `;

texto.innerHTML += `<p>O ${num1} é inteiro? ${Number.isInteger(num1)}</p>`;
texto.innerHTML += `O valor que voçê informou é NaN? ${Number.isNaN(num1)}</p>`
texto.innerHTML += `Arredondando para baixo o valor que voçê informou fica: ${Math.floor(num1)}</p>`;
texto.innerHTML += `Arredondando para cima o valor que voçê informou fica: ${Math.ceil(num1)}</p>` 

 