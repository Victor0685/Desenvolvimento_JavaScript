/*
primtivos(valor)= string, number, boolean, undefined, null, (bigint, symbol) {todos eles sao imutáveis}
*/
let nome = "Luiz"
nome[0]= "R"// a string é imutável(vai continuar exibindo o "L")
console.log(nome[0]);

let a = "A";
let b = a;//cópia
console.log(a,b)

a= "Outra coisa";
console.log(a,b);// o valor de b vai continuar valendo o valor da copia

// dado referencia (mutáveis) = array, object, function
        //array
let c = [1,2,3];
let d = c;
console.log(c,d);

c.push(4);//adicionei no final
console.log(c, d);//aqui o valor de b tambem foi afetado

d.pop();//exclui o ultimo valor
console.log(d);

//primitivos = valores copiados
//valores por referencia= valores passados por referencia na mémoria(aponta para o mesmo valor na memoria não fazendo assim a cópia)

// para fazer a copia do valor

let e = [1,2,3];
let f = [...e]// foi copiado, esse valor se torna independente se acontecer alguma alteração no valor de "e"
e.push(6)
console.log(e,f)

// podemos fazer com objetos

const p = {
    nome: "Victor",
    sobrenome: "Batista"
};
const z = p; // não fez a copia só apaonteou no mesmo lugar da memoria
p.nome= "João";
console.log(z);
console.log(p);

// e para copiar é só trocar -> const z {...a} = espred






