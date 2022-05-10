console.clear();
const prompt = require('prompt-sync')();

/* Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação
no seu respectivo array. Imprima a média de idade e de altura. */

let listaIdade = [];
let listaAltura = [];
let i = 0;
let somaIdade = 0;
let somaAltura = 0;

while(i < 5){
  let idade = +prompt('Qual o sua idade?')
  somaIdade += idade;
  listaIdade.push(idade);
  let altura = parseFloat(prompt('Qual sua altura?'));
  somaAltura += altura;
  listaAltura.push(altura);
  i++;
}


console.log(listaIdade);
console.log(listaAltura);

console.log(`A média de altura é ${somaAltura/5}`);
console.log(`A média de idade é ${soma/5}`);