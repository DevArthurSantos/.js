// declarar function

function declarar() {
  console.log(`eu sou uma function`);
}
declarar();

// parametros e argumentos function
//                      parametros
function calcularSoma(numero1, numero2) {
  let soma = numero1 + numero2;
  console.log(`o calculo dos parametros ${numero1} e ${numero2} é ${soma}`);
}

//        argumentos
calcularSoma(15, 25);

// function autoexecute

(function () {
  console.log(`ola eu sou uma função "autoexecute"`);
})();

// retornando valores function

//   valores
let myNome = `Arthur`;
let myIdade = 22;
let myAltura = 1.69;

//   obijeto
const humano = {
  name: myNome,
  idade: myIdade,
  altura: myAltura,
};

function retorno() {
  //                                                 Retorno
  return console.log(
    `meu nome é ${humano.name} minha idade é ${humano.idade} e minha altura é ${humano.altura}`
  );
}

retorno();

// anonima function

const anonima = function () {
  console.log(`eu sou uma função anonima`);
};

anonima();

// arrow function

const arrow = () => {
  console.log(`eu sou uma arrow Function`);
};

arrow();

// callBack function

function euSOuUmaCallback(name) {
  return name();
}

euSOuUmaCallback(() => {
  console.log(`estou sou uma callBack`);
});

// contruindo um function

//                            Parametros
function Persona(nomeDaPessoa, idadeDaPessoa, alturaDaPessoa) {
  //       construindo um objeto
  this.nomeDaPessoa = nomeDaPessoa;
  this.idadeDaPessoa = idadeDaPessoa;
  this.alturaDaPessoa = alturaDaPessoa;
}
//       pessoa   //  Passando os novos parametros para o obejeto
const pessoaArthur = new Persona(`Arthur`, 22, 1.69);
console.log(pessoaArthur);

const pessoaLais = new Persona(`Lais`, 22, 1.69);
console.log(pessoaLais);

const pessoaGabrielle = new Persona(`Gabrielle`, 22, 1.69);
console.log(pessoaGabrielle);
