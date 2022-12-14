//First we assign a variable to each square of the game board
//Then we attach an event listener and corresponding function
//The 2nd const are for the image container (a1, b1 etc) and win condition later

//Top row
const topLeft = document.querySelector("#topLeft")
  topLeft.addEventListener('click', tileA1 )
  const a1 = document.querySelector('#a1') 
 
const topMiddle = document.querySelector("#topCenter")
  topMiddle.addEventListener('click', tileA2 )
  const a2 = document.querySelector('#a2')
  
const topRight = document.querySelector("#topRight")
  topRight.addEventListener('click', tileA3 )
  const a3 = document.querySelector('#a3')

//Middle row
const middleLeft = document.querySelector("#middleLeft")
  middleLeft.addEventListener('click', tileB1)
  const b1 = document.querySelector('#b1')

const middleMiddle = document.querySelector("#middleCenter")
  middleMiddle.addEventListener('click', tileB2 )
  const b2 = document.querySelector('#b2')

const middleRight = document.querySelector("#middleRight")
  middleRight.addEventListener('click', tileB3)
  const b3 = document.querySelector('#b3')

//Bottom Row
const bottomLeft = document.querySelector("#bottomLeft")
  bottomLeft.addEventListener('click', tileC1 )
  const c1 = document.querySelector('#c1')

const bottomMiddle = document.querySelector("#bottomCenter")
  bottomMiddle.addEventListener('click', tileC2 )
  const c2 = document.querySelector('#c2')

const bottomRight = document.querySelector("#bottomRight")
  bottomRight.addEventListener('click', tileC3 )
  const c3 = document.querySelector('#c3')


//This variable and function allows the players to alternate between either revealing an 'X' or an 'O'

let clicks = 0;

function onClick() {
  clicks += 1
  console.log(`clicks = ${clicks}`)
  if(clicks === 9){
    console.log('Game Over')
  }
}

//These functions run depending on which tile is clicked, and toggle the X or the 0 depending on if it is an odd click or an even click (O's are odd, X's are even)

//Row A Functions
function tileA1(){
  onClick();

  clicks % 2 !== 0 ? a1.setAttribute('src', '/js/game-piece/O.png' ) 
    : a1.setAttribute('src', '/js/game-piece/X.png' );
 
  winCondition();
  turnAnnouncement();
}

function tileA2(){
  onClick();

  clicks % 2 !== 0 ? a2.setAttribute('src', '/js/game-piece/O.png' ) 
    : a2.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
  turnAnnouncement();
}

function tileA3(){
  onClick();

  clicks % 2 !== 0 ? a3.setAttribute('src', '/js/game-piece/O.png' ) 
    : a3.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
  turnAnnouncement();
}

//Row B functions
function tileB1(){
  onClick();
  
  clicks % 2 !== 0 ? b1.setAttribute('src', '/js/game-piece/O.png' ) 
    : b1.setAttribute('src', '/js/game-piece/X.png' )

  winCondition();
  turnAnnouncement();
}

function tileB2(){
  onClick();
  
  clicks % 2 !== 0 ? b2.setAttribute('src', '/js/game-piece/O.png' ) 
    : b2.setAttribute('src', '/js/game-piece/X.png' )

  winCondition();
  turnAnnouncement();
}

function tileB3(){
  onClick();

  clicks % 2 !== 0 ? b3.setAttribute('src', '/js/game-piece/O.png' ) 
    : b3.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
  turnAnnouncement();
}


//Row C functions
function tileC1(){
  onClick();
  
  clicks % 2 !== 0 ? c1.setAttribute('src', '/js/game-piece/O.png' ) 
    : c1.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
  turnAnnouncement();
}

function tileC2(){
  onClick();
  
  clicks % 2 !== 0 ? c2.setAttribute('src', '/js/game-piece/O.png' ) 
    : c2.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
  turnAnnouncement();
}

function tileC3(){
  onClick();
  
  clicks % 2 !== 0 ? c3.setAttribute('src', '/js/game-piece/O.png' ) 
    : c3.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
  turnAnnouncement();
}


//Turn Announcement Function puts text into empty h2
let playerTurn = document.querySelector(".current-turn")
function turnAnnouncement(){
  if( clicks >= 9){
    playerTurn.innerText = "Game Over!"

  }else if(clicks === 0){
    playerTurn.innerText = "Player 1 Click a Tile to Begin Game"

  }else if (clicks % 2 !== 0){
    playerTurn.innerText = "Player two's turn"

  }else if( clicks % 2 === 0){
    playerTurn.innerText = "Player one's turn"
  }
}


//This massive function assigns all the grid 'src' attributes to arrays that represent all 8 possible winning conditions. It then checks the 'src' attributes of each array to see if they are all the same, and if they are then announces the winner
let winner = document.querySelector(".winner")
function winCondition(){

  //Win Condition (Rows)
  const winR1 = [a1.getAttribute('src'), a2.getAttribute('src'), a3.getAttribute('src')]
  const winR2 = [b1.getAttribute('src'), b2.getAttribute('src'), b3.getAttribute('src')]
  const winR3 = [c1.getAttribute('src'), c2.getAttribute('src'), c3.getAttribute('src')]

  //Win Condition (Columnss)
  const winC1 = [a1.getAttribute('src'), b1.getAttribute('src'), c1.getAttribute('src')]
  const winC2 = [a2.getAttribute('src'), b2.getAttribute('src'), c2.getAttribute('src')]
  const winC3 = [a3.getAttribute('src'), b3.getAttribute('src'), c3.getAttribute('src')]

  //Win Condition (Diags)
  const winD1 = [a1.getAttribute('src'), b2.getAttribute('src'), c3.getAttribute('src')]
  const winD2 = [a3.getAttribute('src'), b2.getAttribute('src'), c1.getAttribute('src')]

  if (winR1.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')

  }else if(winR1.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')

  }else if(winR2.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')

  }else if(winR2.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')

  }else if(winR3.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    alert('Player 1 Wins!!!')

  }else if(winR3.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')
  
  }else if(winC1.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')

  }else if(winC1.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')

  }else if(winC2.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')

  }else if(winC2.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')

  }else if(winC3.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')
  
  }else if(winC3.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')

  }else if(winD1.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')

  }else if(winD1.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')

  }else if(winD2.every( x => x === '/js/game-piece/O.png')){
    console.log('Player 1 Wins!')
    winner.innerText = 'Player 1 Wins!!!'
    // alert('Player 1 Wins!!!')

  }else if(winD2.every( x => x === '/js/game-piece/X.png')){
    console.log('Player 2 Wins!')
    winner.innerText = 'Player 2 Wins!!!'
    // alert('Player 2 Wins!!!')
  }
 
}


//Add eventlistener/click-event to button which calls clearBoard 
document.querySelector('.start-clear').addEventListener('click', clearBoard)

function clearBoard(){
  console.log('clear')
  winner.innerText = ''

  const imageSet = document.querySelectorAll('.playLocation')
  const imageCount = imageSet.length

  console.log(imageSet)
  console.log(imageCount)

  for( let i = 0; i< imageCount; i++){
    imageSet[i].setAttribute('src', '')
  }
  clicks = 0

  //unhide game board (gameboard not shown on first page load)
  document.querySelector('.gameBoard').classList.remove('hidden')

  turnAnnouncement()
}

