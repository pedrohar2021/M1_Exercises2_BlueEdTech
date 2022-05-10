console.clear();
const prompt = require('prompt-sync')();

/* Faça um Programa que leia 20 números inteiros e armazene-os num array.
Armazene os números pares no array PAR e os números IMPARES no array IMPAR.
Imprima os três vetores. */


let numerosLista = []
let numerosPares = []
let numerosImpares = []

let numeros = ''
for (let i = 0; i < 20; i++) {
    numeros = Math.floor(Math.random() * 100)
    numerosLista.push(numeros)
}

for (i = 0 ; i < numerosLista.length; i++){
    if(numerosLista[i] % 2 == 0){
        numerosPares.push(numerosLista[i])
    }else{
        numerosImpares.push(numerosLista[i])
    }
}

console.log(`Lista Completa: ${numerosLista}`);
console.log(`Lista Pares: ${numerosPares}`);
console.log(`Lista Impares ${numerosImpares}`);
