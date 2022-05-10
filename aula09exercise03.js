console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que, dado uma lista de N números (o usuário deve determinar a quantidade de números a 
serem entrados e entrar cada um deles), determine o menor valor, o maior valor e a soma dos valores. */

let quantidadeDeNumeros = +prompt('Quantos numeros serão adicionados a lista? ')
const lista = []
for (let i = 0; i < quantidadeDeNumeros; i++){
const numero = +prompt(`Informe o ${i+1}º numero: `)
lista.push(numero)
}

console.log(`\nLista de números: ${lista}`);

lista.sort((a,b) => {
    return a - b
})

const menorValor = lista[0]
const ultimoIndex = lista.length - 1
const maiorValor = lista[ultimoIndex]
const somaValores = menorValor + maiorValor

console.log(`Menor valor: ${menorValor}
Maior valor: ${maiorValor}
Soma dos valores: ${somaValores}`)


