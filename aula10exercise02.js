console.clear();
const prompt = require('prompt-sync')();

/* Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). Exiba
na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro),
apresente também o maior e o menor nome.*/

let quantidadeNomes = +prompt('Digite a quantidade de nomes que quer informar: ')

let nomes = []
let maiorNome = ''
let menorNome = ''
let maioresNome = []
let menoresNome = []

for(let i = 1; i <= quantidadeNomes ; i++){
    let nome = prompt(`Digite o ${i}º nome: `)

    nomes.push(nome)

    if(maiorNome == undefined || maiorNome.length < nome.length){
        maiorNome = nome
    }

    if(menorNome == undefined || menorNome.length > nome.length ){
        menorNome = nome
    }


}

 
nomes.reverse()
console.log(`
Lista de nomes: ${nomes}
Maior nome: ${maiorNome}
Menor nome: ${menorNome}
`);