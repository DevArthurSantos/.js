/*
   Crie um script para fatoriar o valor doigitado.
*/

function acaoBotao(){ 

   var numero, fatorial 
   numero = prompt("digite o numero para calcular o fatorial: ")
   fatorial = 1
   for ( var contador =1; contador <= numero; contador++) {
   fatorial = fatorial * contador
 }
 document.getElementById("paragrafo").innerText = fatorial
 
 
 }
 