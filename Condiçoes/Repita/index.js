/*
    Crie um script que enetra em um lup ate o usuario escolher para sair.
*/
 
    function acaoBotao(){ 
       var sairloop, valor01, valor02
       do{
        valor01 = prompt("digite o primeiro valor: ")
        valor02 = prompt("digite o segundo valor:")
        document.getElementById("paragrafo").innerText = "resultado: " + (parseInt(valor01) +parseInt(valor02))
        sairloop = prompt("deseja sair? s/n")
       } while(sairloop == "n")
  }






