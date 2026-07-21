//Объявить функцию GetComputerChoice
//Создать переменную choice
//Передать в choice рандомное число от 0 до 2 с помощью методов Math.floor и Math.random
//Прописать условное выражение (тернарный оператор) для трех вариантов: Если choice = 0, то возвращать Rock,
//Если choice = 1, то возвращать Paper, иначе возвращать Scissors
function GetComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice == 0 ? "Rock" : choice == 1 ? "Paper" : "Scissors";
}
console.log(GetComputerChoice());

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
console.log(GetHumanChoice());
