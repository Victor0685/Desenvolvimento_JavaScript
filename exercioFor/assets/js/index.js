// criando um array com objeto dentro
const elementos = [
    {tag: 'p', texto: 'Frase 1'},// chaves tag e texto
    {tag: 'div', texto: ' Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

// comentario em html = <!-- djfhdf -->

const container = document.querySelector('.container');
const div = document.createElement('div');
/* existe essa maneira de se fazer
for (let i =0; i < elementos.length; i++){
    console.log(elementos[i].tag)// começa do indice 0 e aqui vou pegar a tag ate a ultima repetição
}
*/

// desestruturar

for ( let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div)

// aqui nos selecionamos o container que existia no html, criamos a div e as tags dentro do for que vai ser um loop que vai executado em todos os elementos do array. Dentro do for a cada interação do laço cria uma tag baseado no array e adciona o texto la dentro. Com todas as tag criadas adionamos elas dentro da div, assim ficou salvo no memoria.E por ultimo adicionei a div no container
