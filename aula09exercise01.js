console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça 2 números e crie um array contando todos os números os 
números sequenciais do primeiro até o segundo, independente de ser maior ou menor. */

let numero1 = +prompt('Digite um número:')
let numero2 = +prompt('Digite outro número:')
let  sequencia = []

if (numero1 < numero2){
    sequencia.push(numero1);
    for (let i = numero1; i < numero2; i++){
        numero1++
        sequencia.push(numero1)
    } 
}
console.log(sequencia);