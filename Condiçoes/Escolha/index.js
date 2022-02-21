/*Var
// Seção de Declarações das variáveis
   numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("digite o primeiro valor: ")
   escreval("digite o segundo valor: ")
   escreval("Qual operação deseja fazer ? ")
   escreval("'Soma= +' 'Subitração= -' 'Multiplicação= *' 'Divisão= /' : ")
   se(operacao)
   operacao = +
      Resultado: da soma
   operacao = -
      Resultado: da Subitração
   operacao = *
      Resultado: da Multiplicação
   operacao = /
      Resultado: da Divisão
   escreva("o Resultado da operação)
*/ 


function acaoBotao() {
let valor01, valor02, resultado, operacao
valor01 = prompt("digite o primeiro valor: ")
valor02 = prompt("digite o segundo valor: ")
alert("Qual operação deseja fazer ?")
operacao = prompt("'Soma= +' 'Subitração= -' 'Multiplicação= *' 'Divisão= /' : ")
switch (operacao) {
 
   case "+":
      resultado = parseInt(valor01) + parseInt(valor02)
      break;
   
   case "-":
      resultado = parseInt(valor01) - parseInt(valor02)
      break;
      
   case "*":
      resultado = parseInt(valor01) * parseInt(valor02)
      break;
   
   case "/":
      resultado = parseInt(valor01) / parseInt(valor02)
      break;
   default:
      resultado = "Simbolo aritmético inválido "
      break
}

document.getElementById("paragrafo").innerHTML= resultado

}