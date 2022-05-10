console.clear();
const prompt = require('prompt-sync')();

/* Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois
peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de 
alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5)  */

let quantidadeNotas = +prompt('Quantos alunos serão adicionados? ')
let notas = []

let aprovados = 0
let reprovados = 0
let recuperacao = 0
let i = 0

while (i < quantidadeNotas){
    let nota = parseFloat(prompt(`Informe a nota do  ${i+1}ª aluno:`))

    
    notas.push(nota)

if ( nota < 5 ){
    reprovados++
}else if (nota >= 5 && nota < 7){
    recuperacao++
}else{
    aprovados++
}
i++
}

console.log(notas);
console.log(`
Reprovados: ${reprovados}
Recuperação: ${recuperacao}
Aprovados: ${aprovados}`);
