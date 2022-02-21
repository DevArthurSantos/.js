/*
    Crie uma function para localizar os numeros primos passados em seu argumentos
*/




function isNumberPrimo(numero){
    let count = 0
    for (let i = 1; i <= numero / 2; i++) {
        let isfloat = numero % i == 0
        if(isfloat) count++ 
    }

    (count < 3)? console.log("O numero: "+ numero+ " é primo"): console.log("O numero: "+ numero+ " não é primo");
}
for(let i = 0; i < 50; i++){
    isNumberPrimo(i)
}