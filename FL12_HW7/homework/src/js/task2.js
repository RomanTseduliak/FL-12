let numberOfTrying = 3;
let count = 3;
let money = 0;
let currentSum = 0;
let startMessage = confirm('Do you want to play a game?');
 
for (let i = 0; i < numberOfTrying; i++) {
  if (startMessage) {
    // eslint-disable-next-line no-var
    let infoMessage = Number(
      prompt(`
    Choose a roulette pocket number from 0 to 8
    Attemps left: ${count}
    Total Prize: ${money}$
    Possible prize on current attemp: ${currentSum}$
    `)
    );
  } else {
    alert('You did not become a billionaire, but can.');
  }

  let randomNumber = Math.floor(Math.random() * 2);
  console.log(infoMessage, randomNumber);
  if (infoMessage === randomNumber) {
    alert('You guess the number.You won prize');
    if (count === 3) {
      currentSum = currentSum + 100;
    } else if (count === 2) {
      currentSum = currentSum + 50;
    } else {
      currentSum = currentSum + 25;
    }
  } else {
    alert('Sorry,you lose');
    count--;
    console.log(count);
  }
}
