console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene
os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido. */

/*
console.log("O programa está sorteando números aletatórios de 0 a 100!");

let numeroLista = [];
i = 0;

while(i < 100){
    const numero = Math.floor(Math.random() * 101);
    numeroLista.push(numero)
    i++
}

numeroLista.sort((a, b) => {
    return a - b 
}) 

console.log(`Os números sorteados são: ${numeroLista}`)

const counts = {};
numeroLista.forEach(function(x){
counts[x] = (counts[x] || 0)+1;
});

console.log(counts); */

function getRandomIntInclusive(min, max) {
    // MDN Web Docs
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let dados = [];
  let contador1 = 0;
  let contador2 = 0;
  let contador3 = 0;
  let contador4 = 0;
  let contador5 = 0;
 
  i = 0;
  j = 0;
  
  
  while (i < 100) {
    i++;
    let dado = getRandomIntInclusive(1, 5);
    dados.push(dado);
  }
  
  while (j < 100) {
    if (dados[j] == 1) {
      contador1 = contador1 + 1;
    } else if (dados[j] == 2) {
      contador2++;
    } else if (dados[j] == 3) {
      contador3++;
    } else if (dados[j] == 4) {
      contador4++;
    } else if (dados[j] == 5) {
      contador5++;
    }
    j++
  }
  
  console.log(`A quantidade de elementos de valor 1 presente é de: ${contador1}`);
  console.log(`A quantidade de elementos de valor 2 presente é de: ${contador2}`);
  console.log(`A quantidade de elementos de valor 3 presente é de: ${contador3}`);
  console.log(`A quantidade de elementos de valor 4 presente é de: ${contador4}`);
  console.log(`A quantidade de elementos de valor 5 presente é de: ${contador5}`);
  