/*
   Crie um script para calcular os valores passados e a escolha para
   SOMA SUBITRAÇÃO MULTIPLICAÇÃO DIVISÃO com as condiçoes SE ou Se Não
*/

 function acaoBotao() {
    var valor01, valor02, resultado,operacao

    valor01 = prompt("digite o primeiro valor")
    operacao = prompt("digite a operação: ex: +, - , * , / ")
    valor02 = prompt("digite o segundo valor")
   
   if (operacao == "+" ) {
       resultado = parseInt (valor01) + parseInt (valor02)
   }
   else if (operacao == "-"){
       resultado = parseInt (valor01) - parseInt (valor02)
   }
   else if (operacao == "*"){
       resultado = parseint(valor01) *parseInt (valor02)
   }
   else if (operacao == "/"){
       resultado = parseint(valor01) / parseInt (valor02)
   }
   document.getElementById("paragrafo").innerText= " resultado: " + resultado
 }

 