/*
   Thorow
      Disparo (input,lançamento, etc...)
   Try
      Tentar (Verificar, Comparar, etc...)
   Catch
      Capturar (Pgar, etc...)

*/

function ThorowTryCatch(name = "") {
   if (name === "") {
     throw "Nome é obrigatorio";
   }
   console.log("Não achou erro e continuou a função");
 }
 try {
   ThorowTryCatch("Arthur");
 } catch (RetornoAutomaticoDeThrow) {
   console.log(RetornoAutomaticoDeThrow);
   console.log("Achou erro e finaliou a função");
 }
 