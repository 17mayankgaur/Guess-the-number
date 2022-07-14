'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score=20,highscore=0;
document.querySelector('.check').addEventListener('click', function()
{
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess)
    document.querySelector('.message').textContent = 'No Number!';
  else if(guess === secretNumber)
  {
    document.querySelector('.message').textContent = 'You won';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30 rem';

    if(score > highscore)
    {
      highscore=score;
      document.querySelector('.highscore').textContent =highscore;
    }
  }
  else if(score >= 1)
  {
      if(guess > secretNumber)
      {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
      }
      else if(guess < secretNumber)
      {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
    else if(score==0)
    document.querySelector('.score').textContent ='You lose';
});

document.querySelector('.again').addEventListener('click',function()
{ score=20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent=secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15 rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.guess').value="";

});
