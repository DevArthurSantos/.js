/*
nome: caractere
idade, limite , contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  escreva("Digite a quaintidade de vezes que vai ser verificado a idade: ")
  leia(limite)
contador := 0
  enquanto contador < limite faca
   escreva(" digite o nome da pessoa:")
   leia (nome)
   escreva("Digite a idade do ", nome, ": ")
   leia(idade)
   se idade > 18 entao
       escreval(nome, "você é maior de idade! ")
   senao
       escreval(nome, " você é menor de idade! ")
    fimse
     contador:= contador + 1
    fimenquanto
*/
function acaoBotao(){

let nome, idade, limite, contador 

limite = prompt("Digite a quaintidade de vezes que vai ser verificado a idade:" )
contador = 0
while(contador< limite){
  nome = prompt(" digite o nome da pessoa:")
  idade = prompt("Digite a idade do " + nome)
   
   if (idade > 18)       
       document.getElementById("paragrafo").innerText= nome + " voce e maior de idade! "
   else
       document.getElementById("paragrafo").innerText= nome + " voce e menor de idade! "
    contador++

}

}