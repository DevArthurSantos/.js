/*
  exercícios
    crie uma função que ira calcular o total de despesas e ira mostrar uma mensagem se a familiar esta com saldo positivo ou negativo. 

  Exigências
    * Object
    * Arrays
*/

const Object = {
  receitas: [1348, 1840, 1352],
  dispesas: [1163, 1563, 1500],
};

for (let i = 0; i <= 2; i++) {
  calculo = Object.receitas[i] - Object.dispesas[i];
  const verificarSaldo =
    calculo > 0
      ? `Saldo do ${i + 1} Mes: ${calculo} positivo`
      : `Saldo do ${i + 1} Mes: ${calculo} negativo`;
  console.log(verificarSaldo);
}
