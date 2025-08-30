let secret = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");
    if (!guess) {
      result.innerText = "Введіть число";
      return;
    }
    guess = Number(guess);
    if (guess > secret) {
      result.innerText = "Менше";
    } else if (guess < secret) {
      result.innerText = "Більше";
    } else {
      result.innerText = "Ви можливо вгадали";
    }
}