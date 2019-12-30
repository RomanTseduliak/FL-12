let start = 0;
let end = 9;
let maxNumber = 9;
let numberOfTrying = 4;
let count = 3;
let prizeBonus = 2;
let prize100 = 100;
let currentSum = 0;
let randomNum = Math.floor(Math.random() * (end - start) + start);
if (confirm('Do you want to play a game?')) {
  for (let i = count; i > start; i--) {
    let userNumber = +prompt(`Choose a roulette pocket number from 0 to 8
     Attempts left: ${i}
     Total prize: ${currentSum}$
     Possible prize on current attempt: ${prize100}$`);
    if (randomNum === userNumber) {
      currentSum += prize100;
      if (
        confirm(
          `Congratulation, you won! Your prize is: ${currentSum} $. Do you want to continue?`
        )
      ) {
        end += numberOfTrying;
        randomNum = Math.floor(Math.random() * (end - start) + start);
        prize100 *= prizeBonus;
        i = count;
      } else {
        alert(
          `Thank you for your participation. Your prize is: ${currentSum} $`
        );
        if (confirm('Do you want to play again?')) {
          end = maxNumber;
          randomNum = Math.floor(Math.random() * (end - start) + start);
          i = count;
          currentSum = 0;
        } else {
          break;
        }
      }
    } else {
      if (i !== 1) {
        prize100 /= prizeBonus;
      } else {
        currentSum = 0;
        alert(
          `Thank you for your participation. Your prize is: ${currentSum}$`
        );
        if (confirm('Do you want to play again?')) {
          end = maxNumber;
          randomNum = Math.floor(Math.random() * (end - start) + start);
          i = count;
        }
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can');
}
