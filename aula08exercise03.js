console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.*/

let numero = +prompt("Que número você deseja saber a tabuada?");
let tabuada= 0

for (let i = 1; i <= 10; i++) {
  tabuada = i * numero;
  console.log(`${numero} x ${i} = ${tabuada}`);
}