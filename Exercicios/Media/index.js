/*
  exercicios
    3 alunos diferentes recebem cada um 3 notas diferentes cada,
    com base nas notas recebidas reprove ou aprove os alunos.

  Exigências
    * Arrays
    * for
    * if
*/
let nomes = ["Igor", "José", "Marcos"];
let notasA = [3.0, 7.5, 4.5];
let notasB = [5.0, 2.5, 2];

for (let i = 0; i <= nomes.length-1; ++i) {
  let media = (notasA[i] + notasB[i]) / 2;
  if (media > 6) {
    console.log(`${nomes[i]} teve a medeia de ${media} foi aprovado`);
  } else {
    console.log(`${nomes[i]} teve a medeia de ${media} foi Reprovado`);
  }
}