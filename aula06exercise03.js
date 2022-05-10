console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados 
e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no
final imprima o nome e a nota correspondente de cada aluno, e a média total da notas. */

let listaNome = [];
let listaNota = [];
let somaNota = 0

let qtdAlunos = +prompt("Quantidade de alunos?");

for (i = 0; i < qtdAlunos; i++) {
  let nome = prompt("Digite o nome do aluno...");
  listaNome.push(nome);
  let nota = +prompt("Digite a nota do aluno...");
  listaNota.push(nota);
  somaNota += nota
}

for(i = 0; i < listaNome.length; i++){
    console.log(`nome: ${listaNome[i]} nota: ${listaNota[i]} `);
    }

let media = somaNota / qtdAlunos

console.log(`A média das notas é ${media}`);


/*
console.log(`Nome: ${listaNome[0]} Nota:${listaNota[0]}
Nome: ${listaNome[1]} Nota:${listaNota[1]}`) */
