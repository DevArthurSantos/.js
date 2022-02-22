/*
    opedadores condicionais ternarios
    
     dependendo da condição, nos receberemos valores direfentes.  
*/

// condição ? valor1 : valor2
let pao = true;
let queijo = false;

const queroOsDois = pao && queijo ? `cafe top` : `cafe ruim`;
console.log(queroOsDois);

const tantoFaz = pao || queijo ? `cafe top` : `cafe top`;
console.log(tantoFaz);

let idade = 18;
const verificarIdade = idade >= 18 ? `Maior de idade` : `Menor de idade`;
console.log(verificarIdade);
