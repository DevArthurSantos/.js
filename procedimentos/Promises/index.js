/*
   ProtoType

   *  Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") 
   *  representa um valor que pode estar disponível agora, no futuro ou nunca. O construtor 
   *  é utilizado para embrulhar funções sem suporte ao conceito "promise".
    
*/

let usuarios = [`Arthur`, `Gabrielle`, `Lalinha`, `Yuri`, `emilly`, `luana`];

function inserirUsuarios(nome) {
  let promese = new Promise(function (resolvido, rejeitado) {
    usuarios.push(nome);
    let error = true
    if (!error) {
      resolvido();
    } else {
      rejeitado({msg: "rejeitado"});
    }
  });
  return promese;
}

function ListarUsuarios(){
   console.log(usuarios)
}
inserirUsuarios("a").then(ListarUsuarios).catch((error) =>{
   console.log(error.msg)
});
