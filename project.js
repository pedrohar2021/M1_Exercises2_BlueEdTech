console.clear();
const prompt = require('prompt-sync')()

// ## VARIÁVEIS ##

let sair = true;
let dia = 0;
let opcoes = ['ENTRAR', 'SAIR'];
let oponenteDeLuta = '';
let derrotas = 0;
let vitorias = 0;
let ciclo = 1;
let treino = 0;
let nivel = 0;

// ## OBJETOS ##

let tempo = {
    dia: 1,
    horas: 8,
    periodo: 'Manhã',
    
    mudaDia: function () {
      this.dia++;
      this.horas = 8;
      this.periodo = 'Manhã';
    },
    ContTempo: function (horas) {
        this.horas += horas
        if (this.horas >= 24) {
            this.horas -= 24;
            this.dia++;
        }
        if (this.horas >= 19) {
            this.periodo = 'Noite'
        } else if (this.horas >= 12) {
            this.periodo = 'Tarde'
        } else if (this.horas >= 6) {
            this.periodo = 'Manhã'
        } else {
            this.periodo = 'Madrugada'
        }
    }
};
let gladiador = {
  nome: 'Mancrazy',
  energia: 20,
  forca: 10,
  ataque: 10,
  defesa: 10,
  nivel: 0,
  destreza: 0,
  restauraEnergia: function () {
    this.energia += 2;
    this.forca += 2;
    this.ataque += 2;
    this.defesa += 2;
    this.destreza++;
  },
  treino: function () {
    this.forca += 10;
    this.ataque += 5;
    this.destreza++;
    this.energia -= 5;
  },
  danoLuta: function () {
    if (oponenteDeLuta.ataque >= 20) {
      this.energia -= 10;
      this.forca -= 10;
    } else {
      this.energia -= 5;
      this.forca -= 10;
    }
  },
  nivelUp: function () {
    this.energia = 30;
    this.forca = 0;
    this.ataque = 0;
    this.defesa = 0;
    this.destreza = 0; 

  },

};
let oponente1 = {
    nome: 'Monkeyman',
    energia: 60,
    forca: 40,
    ataque: 30,
    defesa: 30,
    destreza: 30,
    nivel: 1,
    restauraEnergia: function () {
        this.energia +=5;
        this.forca +=5;
        this.ataque +=5;
        this.defesa +=5;
        this.nivel++;
        this.nome = '';
    }
};
let oponente2 = {
    nome: 'Lucius',
    energia: 40,
    forca: 40,
    ataque: 20,
    defesa: 20,
    destreza: 20,
    nivel: 1,
    restauraEnergia: function () {
        this.energia +=5;
        this.forca +=5;
        this.ataque +=5;
        this.defesa +=5;
        this.nivel++;
        this.nome = '';
    }
};
let oponente3 = {
    nome: 'Smigail',
    energia: 30,
    forca: 30,
    ataque: 10,
    defesa: 10,
    destreza: 10,
    nivel: 1,
    restauraEnergia: function () {
        this.energia +=5;
        this.forca +=5;
        this.ataque +=5;
        this.defesa +=5;
        this.nivel++;
        this.nome = '';
    }
};

//// ## FUNÇÕES ##

function gladiadorStatus() {
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');
    console.log(`
    GLADIADOR:........      ${gladiador.nome}
    NÍVEL:............      ${gladiador.nivel}
    ENERGIA:..........      ${Number(gladiador.energia)}%
    FORÇA:............      ${Number(gladiador.forca)}%
    ATAQUE:...........      ${Number(gladiador.ataque)}%
    HABILIDADES:........    ${Number(gladiador.destreza)}
    `);
    console.log('===============================================');
}
function op1Status() {
    console.clear();
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');

    console.log(`${Number(tempo.dia)}º dia ${tempo.horas} horas da ${tempo.periodo}`),
    console.log(`
    GLADIADOR:.......${oponente1.nome}
    ENERGIA:..........${Number(oponente1.energia)}%
    FORÇA:............${Number(oponente1.forca)}%
    ATAQUE:...........${Number(oponente1.ataque)}%
    HABILIDADE:...........${Number(oponente1.destreza)}
    `);
    console.log('===============================================');
}
function op2Status() {
    console.clear();
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');
    console.log(`${Number(tempo.dia)}º dia ${tempo.horas} horas da ${tempo.periodo}`),
    console.log(`
    GLADIADOR:.......${oponente2.nome}
    ENERGIA:..........${Number(oponente2.energia)}%
    FORÇA:............${Number(oponente2.forca)}%
    ATAQUE:...........${Number(oponente2.ataque)}%
    DEFESA:...........${Number(oponente2.defesa)}
    `);
   console.log('===============================================');
}
function op3Status() {
    console.clear();
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');
    console.log(`${Number(tempo.dia)}º dia ${tempo.horas} horas da ${tempo.periodo}`),
        console.log(`
    GLADIADOR:.......${oponente3.nome}
    ENERGIA:..........${Number(oponente3.energia)}%
    FORÇA:............${Number(oponente3.forca)}%
    ATAQUE:...........${Number(oponente3.ataque)}%
    DEFESA:...........${Number(oponente3.defesa)}%
    `);
    console.log('===============================================');
}
function opc() {
  for (let i in opcoes) {
      console.log(`[${Number(i) + 1}]`+opcoes[i]);
  }
}
function cabecalhoGame() {
  console.clear();
  console.log('******************************************************************************');
  console.log('******************************************************************************');
  console.log('                              GLADIADORES                                     ');
  console.log('******************************************************************************');  
  console.log('******************************************************************************');
  console.log('                             Dias de Luta                                     ');
}
function lutar() {
  ciclo++;
  if (vitorias > 2) {
    nivel++;
  }
  tempo.ContTempo(5);
  let listaOponentes = [oponente1, oponente2, oponente3];
  oponenteDeLuta = listaOponentes[Math.floor(Math.random() * listaOponentes.length)];
  console.log(`Você lutará com ${oponenteDeLuta.nome}`);
  console.log();  
  prompt('>ENTER<');
  console.log('Lutando..... ATACA');
  console.log();  
  prompt('>ENTER<');
  console.log('Defende..... ');
  console.log();  
  prompt('>ENTER<');
  console.log();
  console.log(' ==> FIM DE LUTA <==');
  if ((oponenteDeLuta.forca > gladiador.forca) && (oponente1.ataque > gladiador.ataque)) {
      derrotas++;
      console.log('Você perdeu!!!');
      console.log();
      console.log(`Você lutou com ${oponenteDeLuta.nome}`);
      console.log(`Sua força de ataque é ${oponenteDeLuta.forca}`);
      let diferenca = Number(oponenteDeLuta.forca) - Number(gladiador.forca);
      console.log(`${oponenteDeLuta.nome} é ${diferenca} mais forte que você.`);
      gladiador.danoLuta();
      console.log();
      console.log('Precisa treinar mais.');
      prompt('>ENTER<');
  } else if ((gladiador.forca > oponenteDeLuta.forca) && (gladiador.ataque > oponenteDeLuta.ataque)) {
      vitorias++
      console.log('Você Ganhou!!!\nPARABÉNS');
      console.log();
      console.log(`Você lutou com ${oponenteDeLuta.nome}`);
      console.log(`Sua força de ataque é ${oponenteDeLuta.forca}`);
      let diferenca = gladiador.forca - oponenteDeLuta.forca;
      console.log(`Você é ${diferenca} mais forte que seu oponente o ${oponenteDeLuta.nome}.`);
      console.log();
      console.log('Como prêmio, recebe um bônus que restaura sua energia.');
      prompt('Restabelecendo energia....');
      console.clear();
      gladiador.restauraEnergia();
      console.clear();
      console.log();
      console.log('Seu novo Status...');
      console.log();
      gladiadorStatus();
      console.log();
      prompt('>ENTER<');
  } else {
  console.log('LUTA EMPATADA\nLutadores com mesmo nível de força');
  prompt('>ENTER<');
  }
  console.clear();
}
function treinar() {
  treino++;
  if (tempo.horas == 12) {
    tempo.horas(2);
  } else if (tempo.periodo == 'Noite') {
    mudaDia();
  } else {console.log('ERRO!')}  
  console.clear();
  tempo.ContTempo(4);
  gladiador.treino();
  console.log();
  console.log('Treinando..... FORÇA');
  prompt('>ENTER<\n');
  console.log();
  console.log('Treinando..... ATAQUE');
  prompt('>ENTER<\n');
  console.log();
  console.log(' ==> TREINAMENTO COMPLETO <==');
  prompt('>ENTER<\n');
  console.log();
  console.log('Foi um bom treino');
  console.log('Aos Poucos você vai ganhando mais habilidades');
  console.log();
  prompt('>ENTER<\n');
}
function intervalo() {
  console.clear();
  gladiador.restauraEnergia();
  if (tempo.periodo == 'Noite') {
    console.log();
    console.log(`Agora são extamente ${tempo.horas} horas da ${tempo.periodo}.`);
    console.log('Precisa descançar, amanhã será outro dia.');
    tempo.mudaDia();
    treino = 0;
    gladiador.restauraEnergia();
    prompt('Boa Noite\nZZZzzzzz....');
  } else if (tempo.horas >= 12 && tempo.horas < 14) {
    console.log();
    console.log('A hora da refeição é um momento sagrado!');
    console.log('Hora de fazer uma pausa para recompor as energias.');
    tempo.ContTempo(2);
    gladiador.restauraEnergia();
    console.log('Restaurando energia....');
    prompt('Aproveite sua refeição\n>ENTER<');
    console.clear();
    console.log(`Seu momento de descanço acabou, agora são ${tempo.horas} horas da ${tempo.periodo}.`);
    console.log('Hora de voltar a realidade!');
    prompt('>ENTER<\n')
  }
  opcoes.pop();
}

//// ===> STAGE1

function primeiraFase() {
  while (nivel == 0) {
    console.clear();
    opcoes.splice(0, 2, ' - LUTAR', ' - TREINAR');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    if (gladiador.forca < 10) {
      console.clear();
      console.log(' ## ALERTA ##');
      console.log();
      console.log('Suas forças estão baixas, precisa treinar mais um pouco.');
      prompt('>ENTER<\n');
    }
    if (gladiador.energia == 0) {
      console.log('Você foi o responsável pela morte de Mancrazy.');
      console.log('Exercícios demais o levaram à exaustão');
      prompt('>ENTER<\n');
      break;
    } else if (derrotas == 3) {
      console.log();
      console.log('Mancrazy morreu na arena de batalha');
      console.log();
      prompt('>ENTER<\n');
      break;
    }
    cabecalhoGame()
    console.log(`${Number(tempo.dia)}º dia, ${Number(tempo.horas)} horas da ${tempo.periodo}.`);
    if (dia == 0 && tempo.periodo == 'Manhã') {
      console.log();
      console.log('Hoje começa nossa jornada, temos um longo dia pela frente.');
      console.log('Ajude Mancrazy nas escolhas que possam salvar a sua vida.');
      console.log('Ele precisa treinar a arte da guerra para vencer essa batalha.');
      console.log();
    } else if (tempo.horas == 12 && treino == 1) {
      console.log('Já ¹/2 dia, a fome começa a apertar.');
    } else if(tempo.horas == 14){
      console.log('Agora sim, depois de alimentado hora de seguir adiante.');
    } else if (dia == 1) {
      console.log();
      console.log('Segundo dia....');
      console.log('Continue firme, não desista.');
      console.log();
    } else if (dia == 2) {
      console.log();
      console.log('Você está quase lá.');
      console.log('Continue firme, não desista.');
      console.log();
    }
    if (treino == 1) {
      console.log('O treino está sendo sofrido, porém é a unica maneira de');
      console.log('garantir sua sobrevivência e sair da vida de escravo.');
    } else if (treino == 2) {
      console.log();
      console.log('Está ganhando habilidades de um lutador');
      console.log('Continue assim.');
      console.log();
    } else if (treino == 3) {
      console.log();
      console.log('Talvez já tenha habilidades necessárias para enfrentar sua primeira batalha.');
      console.log();
    } else if(treino > 3) {
      console.log();
      console.log('Você já treinou o suficiênte para enfrentar as batalhas.');
      console.log('Coragem homem!!!\nEnfrente as lutas, sua sobrevivência de pende disso.');
      console.log();
    }
    if (tempo.horas == 12 || tempo.horas >= 19) {
      opcoes.push(' - INTERVALO');
      console.log();
      console.log(`Agora são ${tempo.horas} horas`);
      console.log('Você precisa fazer uma pausa para repôr as suas energias.');
      console.log();
    }
    gladiadorStatus();
    console.log();
    opc();
    console.log();
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    let escUser = +prompt('Escolha uma opção: ');
    console.log();
    while (escUser != 1 && escUser != 2 && escUser != 3) {
    console.log();
    console.log('Você precisa escolher um número correspondente a opção desejada.');
    console.log();
    opc();
    escUser = +prompt('Escolha uma opção: ');
    }
    if (escUser == 1) {
      if (gladiador.forca < 30) {
        console.clear();
        console.log();
        console.log('Você precisa treinar antes.');
        console.log('Seus atributos estão muito baixos');
        gladiadorStatus();
        console.log();
        prompt('>ENTER<\n');
        console.clear();
        continue;
      } else {
        lutar();
      }
    } else if (escUser == 2) {
      if (tempo.horas == 12 || tempo.periodo == 'Noite') {
        console.clear();
        prompt('Você precisa fazer uma pausa!');
        continue;
      } else {
      treinar()
      }
    } else if (escUser == 3) {
      if (tempo.horas == 12 && treino == 1) {
        intervalo();
      } else {
        console.clear();
        prompt('Entrada Inválida');
        continue;
      }
      
    } else {
      console.clear();
      console.log('Entrada inválida');
      prompt('>ENTER<');
      continue;
    }
  }
}

///////// ===> STAGE2

function segundaFase() {
  prompt('chegando na segunda fase');
  let sair = true;
  derrotas = 0;
  oponente1.restauraEnergia('Goro');
  oponente2.restauraEnergia('Bisom');
  oponente3.restauraEnergia('Blanka');
  console.clear();
  if (gladiador.energia == 0) {
    sair = false;
    console.clear();
    console.log();
    console.log('Você chegou ao limite da exaustão.');
    console.log('Energia zerada');
    prompt('ENTER para sair');
  } else {
    while ((derrotas != 3 || vitorias > 3) && (sair)) {
      if (gladiador.energia == 0) {
        console.log('Você foi o responsável pela morte de Mancrazy.');
        console.log('Exercícios demais o levaram à exaustão');
        prompt();
        break;
      }
      opcoes.splice(0, 2,' - LUTAR', ' - TREINAR')
      console.log();
      introGame();
      gladiadorStatus();
      console.log();
      opc();
      console.log();
      let escUser = +prompt('Escolha uma opção: ');
      while (escUser != 1 && escUser != 2) {
        console.log();
        console.log('Você precisa escolher um número correspondente a opção desejada.');
        console.log();
        opc();
        escUser = +prompt('Escolha uma opção: ');
      }
      if (escUser == 1) {
        if (gladiador.forca < 30) {
          console.log('Você precisa treinar antes.');
          prompt('>ENTER<\n');
          console.clear();
          continue;
        }
        lutar();
      } else if (escUser == 2) {
        if (gladiador.energia == 0) {
          sair = false;
          console.log('Você não pode treinar mais, suas energias estão zeradas');
          prompt('>ENTER<\n');
        } else {
          treinar();
        }
      } else if (escUser == 3) {
        break;
      }
    }
  }
}

// ==> Jogo <==

while (sair) {
  sair = true;
  opcoes = [' - ENTRAR', ' - SAIR'];
  oponenteDeLuta = '';
  derrotas = 0;
  vitorias = 0;
  ciclo = 1;
  console.log('Introdução do jogo....');
  console.log();
  for (let i in opcoes) {
    console.log(`[${Number(i) + 1}]` + opcoes[i]);
  }
  let escUser = +prompt('Escolha uma opção: ');
  while (escUser != 1 && escUser != 2) {
    console.log();
    console.log('Você precisa escolher um número correspondente a opção desejada.');
    console.log();
    opc();
    escUser = +prompt('Escolha uma opção: ');
  }
  if (escUser == 1) {
    console.clear();
    prompt('Entrando na função() 1º fase...\n>ENTER<');
    primeiraFase();
    if (derrotas == 3 || gladiador.energia == 0) {
      console.log('VOCÊ PERDEU!!!');
      prompt('Fim de Jogo\n');
      break;
    } else {
      segundaFase();
    }
    gladiador.nivelUp();
    console.log(`${Number(tempo.dia)}º dia ${Number(tempo.horas)} horas da ${tempo.periodo}.`);
    console.log('=-=-=-=-=- LEVEL UP -=-=-=-=-=-=-');
    console.log('Você avançou de nível...\nPARABÉNS');
    console.log('ATENÇÃO!!!');
    console.log('Com nível elevado, TODOS seus atributos recomeçam do  - ZERO - ');
    console.log('Lembre-se de treinar suas novas habilidades');
    gladiadorStatus();
  } else {
    break;
  }
}
prompt();
