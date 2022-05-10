console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido;
Todos os números ímpares do 0 ao número escolhido. */

let numero = +prompt('Digite um numero inteiro: ')
let numerosPares = [] 
let numerosImpares = [] 

let i = 0 
while (i <= numero){
    if(i % 2 == 0){
        numerosPares.push(i)
    }else{
        numerosImpares.push(i)
    }
    i++
}

console.log(numerosPares);
console.log(numerosImpares);


