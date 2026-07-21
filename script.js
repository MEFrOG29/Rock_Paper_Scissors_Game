//Объявить функцию GetComputerChoice
//Создать переменную choice
//Передать в choice рандомное число от 0 до 2 с помощью методов Math.floor и Math.random
//Прописать условное выражение (тернарный оператор) для трех вариантов: Если choice = 0, то возвращать Rock,
//Если choice = 1, то возвращать Paper, иначе возвращать Scissors
function GetComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice == 0 ? "Rock" : choice == 1 ? "Paper" : "Scissors";
}

//Объявить функцию GetHumanChoice
//Создать переменную choice
//С помощью метода prompt() вывести на консоль панель выбора: 1 - Rock, 2 - Paper, 3 - Scissors
//и запросить у пользователя число от 1 до 3 и передать его переменной choice
//Прописать условное выражение (тернарный оператор) для трех вариантов: Если choice = 1, то возвращать Rock,
//Если choice = 2, то возвращать Paper, иначе возвращать Scissors
function GetHumanChoice() {
  let choice = prompt(`1 - Rock \n2 - Paper \n3 - Scissors`);
  return choice == 1 ? "Rock" : choice == 2 ? "Paper" : "Scissors";
}

//Создать переменную computerScore и инициализировать 0
//Создать переменную humanScore и инициализировать 0
let computerScore = 0;
let humanScore = 0;

//Создать функцию PlayRound с параметрами humanChoice и computerChoice
//Прописать условный выражение с определением победителя
//В зависимости от победителя увеличивать на 1 переменные computerScore и humanScore
function PlayRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    alert(
      `Ничья! Оба игрока выбрали ${humanChoice}\n Компьютер - ${computerScore}\n Человек - ${humanScore}`,
    );
  } else if (
    (humanChoice == "Rock" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerScore += 1;
    alert(
      `Компьютер побеждает! ${computerChoice} бьет ${humanChoice}\n Компьютер - ${computerScore}\n Человек - ${humanScore}`,
    );
  } else {
    humanScore += 1;
    alert(
      `Человек побеждает! ${humanChoice} бьет ${computerChoice}\n Компьютер - ${computerScore}\n Человек - ${humanScore}`,
    );
  }
}

//Создать функцию PlayGame.
//Прописать цикл for, в котором вызывать функцию PlayGame
//Вывести результаты игры и сообщение о победителе
function PlayGame() {
  for (let i = 0; i < 5; i++) {
    PlayRound(GetHumanChoice(), GetComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log(`Человек побеждает со счетом ${humanScore}:${computerScore}`);
  } else {
    console.log(`Компьютер побеждает со счетом ${computerScore}:${humanScore}`);
  }
}

PlayGame();
