/*
 
escreval("digite o primeiro valor:")
leia(valor01)
escreval("digite a operação: ex: +, - , * , / ")
leia(operacao)
escreval("digite o segundo valor:")
leia(valor02)

 se operacao = "+" então
    resultado := valor01 + valor02
 senao
  se operacao = "-" então
  resultado := valor01 - valor02
 senao
 se operacao = "*" então
    resultado := valor01 * valor02
 senao
 se operacao = "/" então
    resultado := valor01 / valor02
    fimse
  fimse
 fimse
fimse
 escreval(resultado)

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

 