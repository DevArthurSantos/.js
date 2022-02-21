/*
  Operadodes atirimeticos
    *soma +
    *subitração -
    *divisao /
    *multiplicacao *
    *resto %
    *exponencial **
    *incremento ++
    *decremento --
    *agrupamento () utilizado para mugar a ordem de presedencia.

*/
let  valor01, valor02, soma, subitração,divisao, multiplicação, resto, exponencial, incremento, decremento;
valor01 = 10
valor02 = 10
soma = valor01 + valor02
subitração = valor01 - valor02
divisao = valor01 / valor02
multiplicação = valor01 * valor02
resto = 11 % 3
exponencial = 3 ** 3
incremento = 10 // variavel++ sinal depois vai incrementar depos de passar pela variavel
decremento = 10 // --variavel sinal antes vai decrementar antes de passar pela variavel

console.log(`os valores são: ${valor01} e ${valor02}`)
console.log("soma: " + soma)
console.log("subitração: " + subitração)
console.log("divisao: " + divisao)
console.log("multiplicacao: " + multiplicação)
console.log("Resto de 11/3: " + resto)
console.log("incremento de 10: " + ++incremento)
console.log("decremento de 10: " + --decremento)
console.log("exponencial de 3**3: " + exponencial)
