/*

crie uma list
dentro dessa lista coloque todos os items da sua cozinha
crie um laço de repetição para mostra os items dentro da lista

*/

const bnt = document.getElementById('bnt');
bnt.addEventListener('click', () => {
   let lista = ["fogão","mesa","cadeira","armario","pia",]
   for (let i =0; i <= lista.length; i++){
      console.log(lista[i])
   }
})