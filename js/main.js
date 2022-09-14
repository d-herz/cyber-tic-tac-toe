//First we assign a variable to each square of the game board
//Then we attach an event listener and corresponding function
//The 2nd const are for the image container (a1, b1 etc) win condition later

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


//This variable is an array for each square of the grid, using the above decalred variables (not needed right now)  
// const gridArray = [topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight]

//This forEach assigns an event listener to each grid (not needed, added onClick function call to the functions for each tile)
// gridArray.forEach(square => square.addEventListener("click", onClick)) 


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
//NEW WAY 9-14-22: use setAttribute to set img src to corresponding game piece, based on how many clicks. This allows me to elminate having 2 img conatiners on each grid section. 

function tileA1(){
  onClick();

  clicks % 2 !== 0 ? a1.setAttribute('src', '/js/game-piece/O.png' ) 
    : a1.setAttribute('src', '/js/game-piece/X.png' );
 
  winCondition();
}

function tileA2(){
  onClick();

  clicks % 2 !== 0 ? a2.setAttribute('src', '/js/game-piece/O.png' ) 
    : a2.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
}

function tileA3(){
  onClick();

  clicks % 2 !== 0 ? a3.setAttribute('src', '/js/game-piece/O.png' ) 
    : a3.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
}

//Row B functions
function tileB1(){
  onClick();
  
  clicks % 2 !== 0 ? b1.setAttribute('src', '/js/game-piece/O.png' ) 
    : b1.setAttribute('src', '/js/game-piece/X.png' )

  winCondition();
}

function tileB2(){
  onClick();
  
  clicks % 2 !== 0 ? b2.setAttribute('src', '/js/game-piece/O.png' ) 
    : b2.setAttribute('src', '/js/game-piece/X.png' )

  winCondition();
}

function tileB3(){
  onClick();

  clicks % 2 !== 0 ? b3.setAttribute('src', '/js/game-piece/O.png' ) 
    : b3.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
}


//Row C functions
function tileC1(){
  onClick();
  
  clicks % 2 !== 0 ? c1.setAttribute('src', '/js/game-piece/O.png' ) 
    : c1.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
}

function tileC2(){
  onClick();
  
  clicks % 2 !== 0 ? c2.setAttribute('src', '/js/game-piece/O.png' ) 
    : c2.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
}

function tileC3(){
  onClick();
  
  clicks % 2 !== 0 ? c3.setAttribute('src', '/js/game-piece/O.png' ) 
    : c3.setAttribute('src', '/js/game-piece/X.png' );

  winCondition();
}


//Win Condition
function winCondition(){
  //write logic here
  
}



//Add eventlistener/click-event to button which calls clearBoard 
document.querySelector('.clear').addEventListener('click', clearBoard)

function clearBoard(){
  console.log('clear')

  const imageSet = document.querySelectorAll('.playLocation')
  const imageCount = imageSet.length

  console.log(imageSet)
  console.log(imageCount)

  for( let i = 0; i< imageCount; i++){
    imageSet[i].setAttribute('src', '')
  }
  clicks = 0
}