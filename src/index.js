const players = {
  MARIO: { NOME: "Mario",  VELOCIDADE: 4,  MANOBRABILIDADE: 3,  PODER: 3,  PONTOS: 0},
  PEACH: { NOME: "Peach", VELOCIDADE: 3,  MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
  YOSHI: { NOME: "Yoshi", VELOCIDADE: 2,  MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
  BOWSER: { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
  LUIGI: { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
  DONKEY_KONG: { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
}
 


const Player1 = players.MARIO;
const Player2 = players.LUIGI

//Criando uma acção para girar o dado e gerar um número aleatório entre 1 e 6.
// async(função assincrona) funões que serve para que uma função espere uma ordem para ser executada.
// Por padrão, as funções em JS são sincronas (sync), ou seja, todas as funões são executadas de uma só vez
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

//função que retorna um bloco aleatório para a corrida.
async function getRandomBlock() {
  let random = Math.floor(Math.random() * 3) + 1;
  let result;

  switch (true) {
    case random == 1:
      result = "RETA";
      break;

    case random == 2:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}
getRandomBlock();

//Função que loga o resultado do dado rolado para cada personagem.
async function logRollResult(CaracterName, block, diceResult, attribute) {
  console.log(
    `${CaracterName} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

//Função que controla a lógica da corrida, e mostra os blocos sorteados em cada rodada.
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁Rodada ${round} `);

    block = await getRandomBlock();
    console.log(`🏁Bloco: ${block}!\n`);

    //Roadando os dados para cada personagem.
    let DiceResult1 = await rollDice();
    let DiceResult2 = await rollDice();

    //teste de habilidade
    let TotalTestSkill1 = 0;
    let TotalTestSkill2 = 0;

    if (block == "RETA") {
      TotalTestSkill1 = DiceResult1 + character1.VELOCIDADE;
      TotalTestSkill2 = DiceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "Velocidade",
        DiceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "Velocidade",
        DiceResult2,
        character2.VELOCIDADE
      );

      if (TotalTestSkill1 > TotalTestSkill2) {
        character1.PONTOS++;
        console.log(`${character1.NOME} marcou 1 ponto!`);
        console.log(`${character1.NOME}: ${character1.PONTOS}`);
        console.log(`${character2.NOME}: ${character2.PONTOS}`);
      } else if (TotalTestSkill1 < TotalTestSkill2) {
        character2.PONTOS++;
        console.log(`${character2.NOME} marcou 1  ponto!`);
        console.log(`${character1.NOME}: ${character1.PONTOS}`);
        console.log(`${character2.NOME}: ${character2.PONTOS}`);
      } else {
        console.log(`Empate na rodada ${round}! 🤝`);
      }

      console.log(`\n\n`);
    } else if (block == "CURVA") {
      TotalTestSkill1 = DiceResult1 + character1.MANOBRABILIDADE;
      TotalTestSkill2 = DiceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "Manobrabilidade",
        DiceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "Manobrabilidade",
        DiceResult2,
        character2.MANOBRABILIDADE
      );

      if (TotalTestSkill1 > TotalTestSkill2) {
        character1.PONTOS++;
        console.log(`${character1.NOME} marcou 1  ponto!`);
        console.log(`${character1.NOME}: ${character1.PONTOS}`);
        console.log(`${character2.NOME}: ${character2.PONTOS}`);
      } else if (TotalTestSkill1 < TotalTestSkill2) {
        character2.PONTOS++;
        console.log(`${character2.NOME} marcou 1 ponto!`);
        console.log(`${character1.NOME}: ${character1.PONTOS}`);
        console.log(`${character2.NOME}: ${character2.PONTOS}`);
      } else {
        console.log(`Empate na rodada ${round}! 🤝`);
      }

      console.log(`\n\n`);
    } else if (block == "CONFRONTO") {
      let powerResult1 = DiceResult1 + character1.PODER;
      let powerResult2 = DiceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME} !`);
      await logRollResult(
        character1.NOME,
        "Poder",
        DiceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "Poder",
        DiceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2) {
        if (character2.PONTOS > 0) {
          character2.PONTOS--;
          console.log(
            `${character1.NOME} venceu o confronto.\n${character2.NOME} perdeu 1 ponto!`
          );
        } else {
          console.log(
            `${character1.NOME} venceu o confronto, mas ${character2.NOME} não tem pontos para perder.`
          );
        }
      } else if (powerResult1 < powerResult2) {
        if (character1.PONTOS > 0) {
          character1.PONTOS--;
          console.log(
            `${character2.NOME} venceu o confronto.\n${character1.NOME} perdeu 1 ponto!`
          );
        } else {
          console.log(
            `${character2.NOME} venceu o confronto, mas ${character1.NOME} não tem pontos para perder.`
          );
        }
      } else {
        console.log("Empate no confronto! Nenhum ponto foi perdido!");
      }

      console.log(`${character1.NOME}: ${character1.PONTOS}`);
      console.log(`${character2.NOME}: ${character2.PONTOS}`);

      console.log(`\n\n`);
    }
  }
}

async function winner(character1, character2) {
    console.log(`#########################################################`);
  console.log("Resultado final da corrida:");
  console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
  console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`🏆 ${character1.NOME} venceu a corrida! 🏆`);
  } else if (character1.PONTOS < character2.PONTOS) {
    console.log(`🏆 ${character2.NOME} venceu a corrida! 🏆`);
  } else {
    console.log(`A corrida terminou em impate!🤝`);
  }
      console.log(`#########################################################`);

}

//Função principal...
async function main() {
  console.log(
    `🏁🚨 Corrida entre o ${Player1.NOME} e o ${Player2.NOME} começando...\n`
  );

  await playRaceEngine(Player1, Player2);
  await winner(Player1, Player2);
}
main();
