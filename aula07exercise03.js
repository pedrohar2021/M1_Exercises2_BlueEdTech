console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e 
imprima em ordem crescente. */

let numerosLista = []
let i = 0

while (i < 20){
    const numero = Math.floor(Math.random()* 101)
    numerosLista.push(numero)
i++
}
 
numerosLista.sort((a,b) => {
    return a - b
})

console.log(numerosLista);