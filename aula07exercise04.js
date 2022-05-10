console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve 
ter no mínimo 8 caracteres, pelo menos um número e um caracter especial. */

const login = prompt('Crie seu login: ')
let senha = prompt('Crie sua senha: ')

const caracterEspecial = ['*','!', '@', '#', '$', '%']
const numeros = ['1','2','3','4','5','6','7','8','9','0']

let existeCaractere = false
let existeNumber = false
let senhaCorrect = false

while(senhaCorrect == false){
    for (const s of senha){
        for (const c of caracterEspecial){
            if (s == c) existeCaractere = true;
        }
    }
    for (const s of senha){
        for (const n of numeros){
            if(s == n) existeNumber = true
        }
    }

    if ( senha.length < 8 ){console.log('Senha invalida. Sua senha deve ter mais de 8 caracteres.');}
    if ( existeCaractere == false){console.log('Senha invalida. Sua senha deve ter ao menos 1 caractere.');}
    if ( existeNumber == false){console.log('Senha invalida. Sua senha deve ter ao menos 1 numero.');}
    if ( senha.length < 8 || existeCaractere == false || existeNumber == false){
        existeCaractere = false
        existeNumber = false
        senha = prompt('Crie uma nova senha válida:')
    }else{
        senhaCorrect = true
    }
}

console.log(`Login @${login} criado com sucesso.
Senha registrada.`);
