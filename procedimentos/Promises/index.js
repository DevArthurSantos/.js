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
    if (error) {
      rejeitado(new Error ("Rejeitado: Promessa1"))
    }
    resolvido({usuarios});
  });
  return promese;
}

function ListarUsuarios(deta){
  console.log(deta.usuariosssss)
}
inserirUsuarios("a").then(ListarUsuarios).catch((error) =>{
   console.log(error.message)
});

///////////////////////////
function promessa2(){
  let Data = Promise.resolve("Rejeitado: Promessa2")
  return Data
}

promessa2().then(console.log)

/////////////////////////

async function promessa3(){
  throw new Error ("Rejeitado: Promessa3")
  return 100
}

async function init(){
  
  try{
    await promessa3()
  }
    catch(error){
      console.log(error.message)
    }

}init()