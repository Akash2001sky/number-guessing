'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage =function(message){
  document.querySelector('.message').textContent =message;
}
// document.querySelector('.number').textContent= secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage( 'no number 🚫');

    // when player wins
  } else if (guess === secretNumber) {
   displayMessage( 'Correct Number 🎉');
    document.querySelector('.number').textContent = guess;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //high Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
//when the guess is wrong
  }else if(guess !== secretNumber){
    if (score > 1) {
      //using ternary operatior
      displayMessage(guess > secretNumber? '📈 Too high': '📉 Too low ') ;
      score--;
      document.querySelector('.score').textContent = score;
      
    } else {
      displayMessage( ' 💥You loose the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }

  }

});


document.querySelector('.again').addEventListener('click', function () {
  // location.reload(true);
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
 displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
