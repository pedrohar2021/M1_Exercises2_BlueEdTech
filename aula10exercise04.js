console.clear();
const prompt = require('prompt-sync')();

/* Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array 
com 3 arrays de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna) 
alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve 
interromper o programa e anunciar o vencedor. */

const jogoVelha = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let vitoria = false
let vencedor;
let jogada = 'X'

// inicio
while(!vitoria){

    console.log(`É a vez do jogador ${jogada}`);

// Atualização das rodadas

const linhaDesejada = +prompt('Digite a linha desejada: ')
const colunaDesejada = +prompt('Digite a coluna desejada: ')

if(jogoVelha[linhaDesejada][colunaDesejada]){
    console.log('Essa coordenada já está preenchida. Digite outra: ');
    continue
}


jogoVelha[linhaDesejada][colunaDesejada] = jogada

if (jogada === 'X'){
    jogada = 'O'
}else{
    jogada = 'X'
}

// Checagem de coornenadas vazias

let coordenadasVazias = 0;

for(let linhaAtual = 0; linhaAtual < jogoVelha.length ; linhaAtual++ ){
    const linha = jogoVelha[linhaAtual]

    for(let coluna = 0; coluna < linha.length ; coluna++){
        const jogadaAtual = linha[coluna]

        if(!jogadaAtual){
            coordenadasVazias++
        }
    }
}
if(coordenadasVazias === 0){
    break
}



//Condição de vitória

// vencedor
const condicoesDeVitoria = [
    //LINHA
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //COLUNA
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //DIAGONAL
    [0,4,8],
    [2,4,6],
];

for (const condicaoVitoria of condicoesDeVitoria ){

    let quantidadeValoresIguais = 0;
    let ultimoValor;


    for (const valor of condicaoVitoria){
        const linha = parseInt(valor/3)
        const coluna = valor % 3;

        const jogada = jogoVelha[linha][coluna]

        if ( jogada && !ultimoValor || jogada === ultimoValor){
            quantidadeValoresIguais++;
        }

        ultimoValor = jogada

    }

    if(quantidadeValoresIguais === 3){
        vitoria = true
        vencedor = ultimoValor
        break
    }
  }
}

console.log(jogoVelha);

// Exibindo resultado
if (vitoria){
    console.log(`O jogador ${vencedor} foi o vencedor da partida`);
}else {
    console.log('Velha, ninguem ganhou, deu empate.');
}
console.log(jogoVelha);
