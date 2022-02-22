/*
  Crie um script para perguntar a quantidade de vezes que
  o script vai rodar e a idade do usuario retorne no paragrafo 
  do HTML se é maior ou menor de idade.
*/
function acaoBotao() {
  let nome, idade, limite, contador;

  limite = prompt(
    "Digite a quaintidade de vezes que vai ser verificado a idade:"
  );
  contador = 0;
  while (contador < limite) {
    nome = prompt("igite o nome da pessoa:");
    idade = prompt("Digite a idade do " + nome);

    if (idade > 18)
      document.getElementById("paragrafo").innerText =
        nome + " voce e maior de idade! ";
    else
      document.getElementById("paragrafo").innerText =
        nome + " voce e menor de idade! ";
    contador++;
  }
}
