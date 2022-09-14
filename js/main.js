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



  
const gridArray = [topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight]

gridArray.forEach(square => square.addEventListener("click", onClick)) 

//This variable and function allows the players to alternate between either revealing an 'X' or an 'O'
let clicks = 0;

function onClick() {
  clicks += 1
}

//These functions run depending on which tile is clicked, and toggle the X or the 0 depending on if it is an odd click or an even click 
function tileL1(){
  if( clicks % 2 !== 0){
    document.querySelector('#a1o').toggleAttribute('hidden')
  }else{
    document.querySelector('#a1x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileL2(){
  if( clicks % 2 !== 0){
    document.querySelector('#b1o').toggleAttribute('hidden')
  }else{
    document.querySelector('#b1x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileL3(){
  if( clicks % 2 !== 0){
    document.querySelector('#c1o').toggleAttribute('hidden')
  }else{
    document.querySelector('#c1x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileM1(){
  if( clicks % 2 !== 0){
    document.querySelector('#a2o').toggleAttribute('hidden')
  }else{
    document.querySelector('#a2x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileM2(){
  if( clicks % 2 !== 0){
    document.querySelector('#b2o').toggleAttribute('hidden')
  }else{
    document.querySelector('#b2x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileM3(){
  if( clicks % 2 !== 0){
    document.querySelector('#c2o').toggleAttribute('hidden')
  }else{
    document.querySelector('#c2x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileR1(){
  if( clicks % 2 !== 0){
    document.querySelector('#a3o').toggleAttribute('hidden')
  }else{
    document.querySelector('#a3x').toggleAttribute('hidden')
  }
  winCondition()
}

function tileR2(){
  if( clicks % 2 !== 0){
    document.querySelector('#b3o').toggleAttribute('hidden')
  }else{
    document.querySelector('#b3x').toggleAttribute('hidden')
  }
}

function tileR3(){
  if( clicks % 2 !== 0){
    document.querySelector('#c3o').toggleAttribute('hidden')
  }else{
    document.querySelector('#c3x').toggleAttribute('hidden')
  }
  winCondition()
}


function winCondition(){
  if( topLeftIdO.getAttribute('hidden') === topRightIdO.getAttribute('hidden') && topLeftIdO.getAttribute('hidden') === topMiddleIdO.getAttribute('hidden')){
    console.log('you win')
  }else{

  }

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
    imageSet[i].toggleAttribute('hidden',true)
  }
}