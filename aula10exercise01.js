console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
 Um número primo é aquele que é divisível somente por ele mesmo e por 1 */

const numero = +prompt('Digite um número inteiro: ')
let quantidadeNumeros = 0

for (let i = 1; i <= numero; i++){
    let resto = numero % i 

    if (resto == 0){
        quantidadeNumeros++
    }
    //console.log({numero, i, resto, quantidadeNumeros});
}

if (quantidadeNumeros == 2){
    console.log(`O número ${numero} é primo.`)
}else{
    console.log(`O número ${numero} não é primo.`);
}