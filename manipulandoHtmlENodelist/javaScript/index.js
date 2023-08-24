const paragrafo = document.querySelector('paragrafos');
// selecionando varios elementos
const ps = document.querySelectorAll('p');

//pegando o elemento do bory
//ela tem tudo de css que foi computado no bory
const estilosBody = getComputedStyle(document.body);

// escolhendo o bory e pegando a sua cor especifica
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

// interando nos elementos selecionados e selecionando a cor de fundo dos paragrafos
for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
   // console.log(p);
}