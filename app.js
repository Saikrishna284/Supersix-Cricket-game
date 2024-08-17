const endResult = document.getElementById('end-result');
const result = document.getElementById('result');
const startBtn = document.getElementById('start-btn');
const hitBtn = document.getElementById('hit-btn');
const restartBtn = document.getElementById('restart-btn');
const target = document.getElementById('target');
const score = document.getElementById('score');
const balls = document.getElementById('balls');
const runs = document.getElementById('runs');


hitBtn.style.display = 'none';
restartBtn.style.display = 'none';

let randomRun = 0;
let run = 0;
let targetScore  = 0;
let targetWickets = 0;
let ballCount = 0;
let playerScore = 0;
let playerWickets = 0;


startBtn.addEventListener('click',()=>{generateComputerTarget()});
hitBtn.addEventListener('click',()=>{generateplayerRun()});
restartBtn.addEventListener('click',()=>{restartGame()});


function generateComputerTarget()
{
  startBtn.style.display = 'none';
  hitBtn.style.display = 'initial';
  
  for(let i=0; i<=5; i++)
  {
    if(targetWickets < 2)
    {
      let temp = randomRunGenerator();
      if(temp === 'W')
      {
        targetWickets+= 1;
      }
      else
     {
       targetScore += temp;
     }
    }
  }

  target.innerText = `${targetScore}-${targetWickets}`;

}

function generateplayerRun()
{
  ballCount++;

  if(ballCount <= 6 && playerWickets < 2)
  {
    let temp = randomRunGenerator();
    result.innerText = temp;
    balls.innerText = ballCount;

    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.innerText = temp;
    runs.appendChild(ball);
    
    if(temp === 'W')
    {
      playerWickets++;
    }
    else
    {
      playerScore+= temp;
    }

    if(targetScore < playerScore)
    {
      ballCount = 7;
    }
    
  }
  else
  {
    resultDeclaration();
    hitBtn.style.display = 'none';
    restartBtn.style.display = 'initial';
  }
  
  score.innerText = `${playerScore}-${playerWickets}`;

}

function randomRunGenerator()
{
  randomRun = Math.floor(Math.random()*8);

  if(randomRun === 1)
  {
    run = 1;
  }
  else if(randomRun === 2)
  {
    run = 6;
  }
  else if(randomRun === 3)
  {
    run = 2;
  }
  else if(randomRun === 4)
  {
    run = 4;
  }
  else if(randomRun === 5)
  {
    run = 3;
  }
  else if(randomRun === 6)
  {
    run = 0;
  }
  else
  {
    run = 'W';
  }
  
return run;

}

function resultDeclaration()
{
  if(targetScore > playerScore)
  {
    endResult.innerText = 'You lost !';
    endResult.style.color = 'red' ;
  }
  else if(targetScore < playerScore)
  {
    endResult.innerText = 'You won !';
    endResult.style.color = 'green' ;
  }
  else
  {
    endResult.innerText = 'Match drawn !';
    endResult.style.color = 'black' ; 

  }
}

function restartGame()
{
  randomRun = 0;
  run = 0;
  targetScore  = 0;
  targetWickets = 0;
  ballCount = 0;
  playerScore = 0;
  playerWickets = 0;
  endResult.innerText = '';
  result.innerText = '0';
  target.innerText = `${targetScore}-${targetWickets}`;
  score.innerText = `${playerScore}-${playerWickets}`;
  balls.innerText = ballCount;
  startBtn.style.display = 'initial';
  restartBtn.style.display = 'none';
  const allBalls = document.querySelectorAll('.ball');
  allBalls.forEach(eachBall =>
  {
    eachBall.remove();

  });
  
}

