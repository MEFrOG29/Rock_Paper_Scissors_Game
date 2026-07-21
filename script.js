//Объявить функцию GetComputerChoice
//Создать переменную choice
//Передать в choice рандомное число от 0 до 2 с помощью методов Math.floor и Math.random
//Прописать условное выражение (тернарный оператор) для трех вариантов: Если choice = 0, то возвращать Rock,
//Если choice = 1, то возвращать Paper, иначе возвращать Scissors
function GetComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  choice = 0 ? "Rock" : (choice = 1 ? "Paper" : "Scissors");
}
