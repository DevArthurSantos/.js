/*
  exercícios
    Crie uma function para converter gratus ºC em ºF e vice e versa.

  Exigências
    Livre
*/

function trasforme(temperatura) {
  const temC = temperatura.toUpperCase().includes("C");
  const temF = temperatura.toUpperCase().includes("F");

  if (!temC && !temF) {
    throw new Error("Grau não identificado");
  } else if (temC == true) {
    updateTemperatura =
      (Number(temperatura.toUpperCase().replace("ºC", "")) * 9) / 5 + 32;
    console.log(updateTemperatura + "ºF");
  } else {
    updateTemperatura =
      ((Number(temperatura.toUpperCase().replace("ºF", "")) - 32) * 5) / 9;
    console.log(updateTemperatura + "ºF");
  }
}

try {
  trasforme("122º");
} catch (error) {
  console.log(error.message);
}
