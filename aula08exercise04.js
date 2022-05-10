console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra
lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com 
um litro de combustível. Calcule e mostre:
- O modelo do carro mais econômico;
- Quantos litros de combustível cada um dos carros cadastrados consome para percorrer
uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina
custe R$ 5,50 o litro.*/

console.log(`LOJA DE CARROS JAVASCRIPT`);

//Declaração das variáveis:
let variaVeiculos = [];
let variaAutonomia = [];
let dist = [];
let index = 0;
let teste;
let v;

console.log(`QUANTOS MODELOS DE CARRO DESEJA CADASTRAR? `);
let variaQtd = +prompt();

//Contador utilizando FOR:
for (let i = 0; i < variaQtd; i++) {
  let novoVeic = prompt("INSIRA O MODELO DO VEÍCULO: ");
  let novaAutonomia = +prompt("INSIRA AUTONOMIA EM km/Litros: ");
  // Criei variáveis para receber os valores do prompt:
  variaVeiculos.push(novoVeic);
  variaAutonomia.push(novaAutonomia);
}

console.log("VEÍCULOS CADASTRADOS COM SUCESSO!");
console.log();

console.log(`Foram cadastrados os seguintes veículos: ${variaVeiculos}`);

console.log(`E a autonomia deles são respectivamente em km/l: ${variaAutonomia}`);

teste = variaAutonomia[0];

for (let i in variaAutonomia) {
  if (variaAutonomia[i] > teste) {
    teste = variaAutonomia[i];
    index = i;
  }
}

console.log(
  `O modelo de carro mais é econômico é o ${variaVeiculos[index]}, andando de apenas ${variaAutonomia[index]}km para cada litro de gasolina `
);

for (let i in variaAutonomia) {
  v = 1000 / variaAutonomia[i];
  dist.push((v * 5.5).toFixed(2));
  console.log(`O carro ${variaVeiculos[i]}, consumindo ${variaAutonomia[i]} com o custo de R$${dist[i]}, percorrendo 1000km.`);
}