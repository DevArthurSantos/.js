/*

defina uma constante para receber o id de um botão
adicone um evento de click para a constante do botão
crie uma costante criando um objeto
dentro do objeto defina ` name: "". idade: "", nacionalidade: "", Localidade: "", estudando: "", e uma função `
a função dentro do objeto vai selecionar o id do paragrafo e vai mudar o HTML do paragrafo
o paragrafo vai ter que receber o name idade nacionalidade localidade e oq esta estudando no momento.

*/


const bnt = document.getElementById('bnt');
bnt.addEventListener('click', () => {
   const object = {
      name: "Arthur",
      idade: 22,
      nacionalidade: "Brasileiro",
      localidade: "Vitoria de santo antão - PE",
      estudando: "JavaScript",
      fun () { 
         return document.getElementById("paragrafo").innerHTML = `
         Nome: ${this.name}<br>
         idade: ${this.idade}<br>
         Nacionalidade: ${this.nacionalidade}<br>
         localidade: ${this.localidade}<br>
         Estudando: ${this.estudando}`

      }
   }
   object.fun()
})