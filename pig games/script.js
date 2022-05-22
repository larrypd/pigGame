var scores, roundScore, activePlayers;
var gamePlaying = true;

init()
// adding event listener

document.querySelector('.btn--new').addEventListener('click', init);
document.querySelector('.btn--roll').addEventListener('click', function() {
   if(gamePlaying) {
      var dice = Math.floor(Math.random() * 6 )+ 1;

      var diceDom = document.querySelector('.dice');
      diceDom.style.display = 'block';
      diceDom.src="dice-" + dice + '.png';
   
      document.querySelector('.player--' + activePlayers).classList.toggle('.active');
   
   
      // update the round score
      if (dice !== 1) {
         roundScore = roundScore + dice;
         document.querySelector('#current--' + activePlayers).textContent = roundScore;
      }else{
         nextPlayer();
   
      }
   }
}
)

// Hold Btn***********

document.querySelector('.btn--hold').addEventListener('click', function(){
   if(gamePlaying) {
      scores[activePlayers] += roundScore;

      document.querySelector('#score--' + activePlayers).textContent = scores[activePlayers];
      document.querySelector('.dice').style.display = 'none'
   
      if (scores[activePlayers] >= 100){
         document.querySelector('#name--' + activePlayers).textContent = 'Winner!';
         document.querySelector('.player--' + activePlayers).classList.add('player--winner');
         document.querySelector('.player--' + activePlayers).classList.remove('player--active');
         document.querySelector('.dice').style.display = 'none';
         gamePlaying = false; 
      }
      else{
          nextPlayer();
       }
      }
   }   
)




function nextPlayer(){
   activePlayers === 0 ? activePlayers = 1: activePlayers = 0 ; roundScore = 0;

      document.getElementById('current--0').textContent = 0;
      document.getElementById('current--1').textContent = 0;

      document.querySelector('.player--0').classList.toggle('active');
      document.querySelector('.player--1').classList.toggle('active');
}


function init(){
scores = [0, 0];
roundScore = 0;
activePlayers = 0;
document.querySelector('.dice').style.display = 'none';
// set text content to Zero
document.getElementById('score--0').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
gamePlaying = true;
}