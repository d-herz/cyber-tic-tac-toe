//First we assign a variable to each square of the game board
//Then we attach an event listener and corresponding function
//The 2nd 2 consts are for the win condition later

const topLeft = document.querySelector("#topLeft")
  topLeft.addEventListener('click', tileL1 )
  const topLeftIdO = document.querySelector('#a1o') 
  const topLeftIdX = document.querySelector('#a1x')


const topMiddle = document.querySelector("#topCenter")
  topMiddle.addEventListener('click', tileM1 )
  const topMiddleIdO = document.querySelector('#a2o')
  const topMiddleIdX = document.querySelector('#a2x')


const topRight = document.querySelector("#topRight")
  topRight.addEventListener('click', tileR1 )
  const topRightIdO = document.querySelector('#a3o')
  const topRightIdX = document.querySelector('#a3x')


const middleLeft = document.querySelector("#middleLeft")
  middleLeft.addEventListener('click', tileL2)

const middleMiddle = document.querySelector("#middleCenter")
  middleMiddle.addEventListener('click', tileM2 )

const middleRight = document.querySelector("#middleRight")
  middleRight.addEventListener('click', tileR2)


const bottomLeft = document.querySelector("#bottomLeft")
  bottomLeft.addEventListener('click', tileL3 )

const bottomMiddle = document.querySelector("#bottomCenter")
  bottomMiddle.addEventListener('click', tileM3 )


const bottomRight = document.querySelector("#bottomRight")
  bottomRight.addEventListener('click', tileR3 )

//This variable is an array for each square of the grid, using the above decalred variables  
const gridArray = [topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight]

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
//NEW WAY 9-14-22: use setAttribute to set img src to corresponding game piece, based on how many clicks. This allows me to elminate having 2 img conatiners on each grid section. Will have to change the 'clear board function' since not using hidden attribute anymore
function tileL1(){
  onClick()
  if( clicks % 2 !== 0){
    topLeftIdO.setAttribute('src', '/js/game-piece/O.png' )
    // document.querySelector('#a1o').toggleAttribute('hidden')
  }else{
    topLeftIdO.setAttribute('src', '/js/game-piece/X.png' )
    // document.querySelector('#a1x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileL2(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#b1o').toggleAttribute('hidden')
  }else{
    document.querySelector('#b1x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileL3(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#c1o').toggleAttribute('hidden')
  }else{
    document.querySelector('#c1x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileM1(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#a2o').toggleAttribute('hidden')
  }else{
    document.querySelector('#a2x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileM2(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#b2o').toggleAttribute('hidden')
  }else{
    document.querySelector('#b2x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileM3(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#c2o').toggleAttribute('hidden')
  }else{
    document.querySelector('#c2x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileR1(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#a3o').toggleAttribute('hidden')
  }else{
    document.querySelector('#a3x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileR2(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#b3o').toggleAttribute('hidden')
  }else{
    document.querySelector('#b3x').toggleAttribute('hidden')
  }
}

function tileR3(){
  onClick()
  if( clicks % 2 !== 0){
    document.querySelector('#c3o').toggleAttribute('hidden')
  }else{
    document.querySelector('#c3x').toggleAttribute('hidden')
  }
  winCondition()
}


function winCondition(){
  // if( topLeftIdO.getAttribute('hidden') === topRightIdO.getAttribute('hidden') && topLeftIdO.getAttribute('hidden') === topMiddleIdO.getAttribute('hidden')){
  //   console.log('you win')
  // }else{
  // }
  console.log(topLeftIdO.getAttribute('hidden'))
}



//add button to clear board 
document.querySelector('.clear').addEventListener('click', clearBoard)

function clearBoard(){
  console.log('clear')
  const imageSet = document.querySelectorAll('.playLocation')
  console.log(imageSet)

  const imageCount = imageSet.length
  console.log(imageCount)


  for( let i = 0; i< imageCount; i++){
    imageSet[i].setAttribute('src', '')
  }
}