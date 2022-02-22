/*
   Crie um script para calcular os valores passados e a escolha para
   SOMA SUBITRAÇÃO MULTIPLICAÇÃO DIVISÃO com as condiçoes de escolha.
*/

function acaoBotao() {
  let valor01, valor02, resultado, operacao;
  valor01 = prompt("digite o primeiro valor: ");
  valor02 = prompt("digite o segundo valor: ");
  alert("Qual operação deseja fazer ?");
  operacao = prompt(
    "'Soma= +' 'Subitração= -' 'Multiplicação= *' 'Divisão= /' : "
  );
  switch (operacao) {
    case "+":
      resultado = parseInt(valor01) + parseInt(valor02);
      break;

    case "-":
      resultado = parseInt(valor01) - parseInt(valor02);
      break;

    case "*":
      resultado = parseInt(valor01) * parseInt(valor02);
      break;

    case "/":
      resultado = parseInt(valor01) / parseInt(valor02);
      break;
    default:
      resultado = "Simbolo aritmético inválido ";
      break;
  }

  document.getElementById("paragrafo").innerHTML = resultado;
}
