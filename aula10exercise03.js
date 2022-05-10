console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça ao usuário digitar a população e a taxa de crescimento
populacional de 2 países A e B, sendo que a população do país A deve ser menor que a de B,
e a taxa de crescimento de A seja maior. Faça um programa que calcule e escreva o número de
anos necessários para que a população do país A ultrapasse ou iguale a população do país B,
mantidas as taxas de crescimento. */

let populacaoPaisA = +prompt('Informe a população do pais A: ')
const taxaDeCrescimentoA = +prompt ('Informa a taxa de crescimento (em porcentagem %) do país A : ')

let populacaoPaisB = +prompt('Informe a população do pais B: ')
const taxaDeCrescimentoB = +prompt ('Informa a taxa de crescimento (em porcentagem %) do país B : ')


let anos = 0

while(populacaoPaisA < populacaoPaisB){
    populacaoPaisA *= 1 + taxaDeCrescimentoA / 100
    populacaoPaisB *= 1 + taxaDeCrescimentoB / 100


    anos++
}

console.log(`Levará ${anos} anos para que a população do país A, seja maior que a população do país B. `);