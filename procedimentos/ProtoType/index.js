/*
   ProtoType

   * prototupe-based language // JavaScript linguagem baseado em prototipos.
   * prototupe chain // JavaScript tem uma cadeia de prototipos. 
   * __proto__ // utilizado para ve as listas de prototipos em um obejeto.
    
*/

//prototype __proto__
let listaDeProtosString = `Arthur`.__proto__;
console.log(listaDeProtosString);
let listaDeProtosNumber = (50.0).__proto__; // para a lista em um tipo numeber é necersario oclocar um .0 ao final do number
console.log(listaDeProtosNumber);

// Type conversion or (typecasting) and Type coersion
//       capacidade de converter tipos de dados.

console.log(`=-capacidade de converter tipos de dados-=`);

console.log(`9` + 5); //O JavaScript automaticamente convertendo o 5(number) para string para fazer a concatenação.

console.log(Number(`9`) + 5); //Forçando a conversão do 9(string) em um dado number para efetuar a soma.

// Manipulando dados (String and Number)

// convertendo tipos de dados.

console.log(`=-=-=-=-=-convertendo=-=-=-=-=-`);
let str = `12312`; //string
let num = 32211; //number

console.log(Number(str)); // convertendo a string para number
console.log(String(num)); // convertendo o number para string
// contando quantos caracteres tem uma palavra ou digito.

console.log(str.length);
console.log(String(num).length); //A nececidade de converter um numero para string para saber a quantidade de digitios pis o tipo de dado number não aceita o prototype length.

// trasformar um numero querado com 2 casas decimais, e ponto numero por virgula.
console.log(`=-=Fiando casas decimais e fazendo o replace=-=`);
let number = 321.2315132154;
console.log(number.toFixed(2).replace(`.`, `,`)); //Perceba que o objeto toFixed esta atrelado ao obejeto replace então ja entendemos que podemos atrela um objeto a outro.
// toFixed fixando as casas decimais,
// replace trocando . poer , e como o toFixed trasforma o tipo do dado em string então por isso que podemos subistituir o . por "," ja que , não faz parte de um tipo number.

console.log(`=-=Convertendo para minusculo e MAIUSCULO=-=`);
// Convertendo para minusculo e MAIUSCULO

console.log(str.toUpperCase()); // maiuscula
console.log(str.toLowerCase()); // minuscula

console.log(`=-=Strings E Arrays=-=`);
// separando um texto que contem espaços em um novo array onde cada texto é uma posição no array. depois disso trasforme o array em um texto e onde eram os espaços, coloque "_".

let amor = "Eu quero viver o amor";
console.log(`essa é minha frasse: ${amor}`);
let myArray = amor.split(` `); // O splite recebe entre ("") oq ele deve usar de referencia para separar o em uma array.
console.log(`esta é minha frasse separada em um array: ${myArray}`);
let juntandoOAmor = myArray.join("_").toUpperCase(); //O join recebe entre ("") oq ele deve usar de referencia para juntar uma array.
console.log(`esta é minha frasse separada por _: ${juntandoOAmor}`);

console.log(`=-=Strings=-=`);

// verificar se tem algo numa string.

console.log(amor.includes("amor")); // O includes recebe entre ("") oq ele deve usar de referencia para verifiar se em uma string OBS: o incluides é key Sensitive.

console.log(`=-=Array=-=`);

// criar um array com construtor

let construtorArray = new Array(`a`, `b`, `c`);
console.log(construtorArray);

// contar elementos de um array

console.log([ "a", { name: "Arthur" }, () => {"eu sou uma arrow function numa array"}].length)

// trasfromar uma cadeia de caracteres em um elemento de um array

const caracteres = "ArthurDev"
console.log(Array.from(caracteres))// from recebe entre () uma string, pegando cada caracteres dessa string e colocando em uma cadeia de array dando um index a ele.


console.log(`=-=manipulando matrizes=-=`);

let techs = ["html", "css","js"]
console.log(techs)
// adicionar um item no começo
techs.unshift("Logica")
// adciionar um item no final
techs.push("ReactJS")
console.log(techs)
//remover um item do começo
console.log(techs.shift())
//remover um item do fim
console.log(techs.pop())
//pegar somente algums itens da array
console.log(techs.slice(1,3))// primeiro argumento onde começa segundo argumento onde acaba.
// remover 1 ou mais items de qualquer posição
console.log(techs.splice(1,1)) //primeiro argumento remove o item do array e o segundo diz quantos apartidali quer remover.
//encontrar a posição de um elemento
console.log(techs.indexOf("css"))