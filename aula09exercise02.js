console.clear();
const prompt = require('prompt-sync')();

/* Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X,
 um valor por linha, inclusive o X, se for o caso. Use o laço FOR. */

 const numero = parseInt(prompt('Digite um numero inteiro: '))
 for (let i = 1; i <= numero; i++){
    if(i % 2 == 0){
        console.log(`numero ${i}`);
    }
 }