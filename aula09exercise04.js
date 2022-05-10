console.clear();
const prompt = require('prompt-sync')();

/* Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores.
 Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato. */

let numerosEleitores = +prompt('Quantos eleitores vão participar da eleição ?')
let candidatosLista = ['Pedro', 'Lucas', 'Stella']
let c1 = 0
let c2 = 0
let c3 = 0

const candidatos = `
CANDIDATOS:
[1]${candidatosLista[0]} 
[2]${candidatosLista[1]} 
[3]${candidatosLista[2]}`

for (let i = 0; i < numerosEleitores ; i++){
    console.log(`${candidatos}`);
    const voto = prompt(`${i + 1}º eleitor, qual o seu voto? `)
    if (voto == 1){
        console.log(`\nVocê votou em ${candidatosLista[0]}.`);
        c1++
    }else if( voto == 2){
        console.log(`\nVocê votou em ${candidatosLista[1]}.`);
        c2++
    }else if( voto == 3 ){
        console.log(`\nVocê votou em ${candidatosLista[2]}.`);;
        c3++
    }else{
        console.log('\nVoto nulo.');
    }
}

console.log(`
RESULTADO
${candidatosLista[0]} : ${c1}
${candidatosLista[1]} : ${c2}
${candidatosLista[2]} : ${c3}
`);

     

