console.clear();
const prompt = require('prompt-sync')();

/* Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas 
informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ] */

const linhas = 3
const colunas = 4

for (let linhaAtual = 0; linhaAtual < 3; linhaAtual++){
    const numeros = []
    for (let numero = linhaAtual; numero < linhaAtual + 4 ; numero++){
        numeros.push(numero)
    }
    console.log(numeros);
}
