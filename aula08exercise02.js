console.clear();
const prompt = require('prompt-sync')();

/* Escreva um programa que peça um número e escreva o fatorial dele.
 Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720 */


let fatorial = 1;
console.log("Que número você deseja saber o fatorial?");
let numero = +prompt();

for (let i = 1; i <= numero; i++) {
  fatorial = fatorial * i;
}

console.log(`O fatorial de ${numero} é igual a ${fatorial}.`);