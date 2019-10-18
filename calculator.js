var textVisor = document.querySelector('.visor')

var firstNum = document.querySelector('.firstNumber')
var secNum = document.querySelector('.secondNumber')
var operator = document.querySelector('.operator')
var result = document.querySelector('.result')

var dot = document.getElementById('dot')
var division = document.getElementById('div')
var plus = document.getElementById('plus')
var sub = document.getElementById('sub')
var multi = document.getElementById('multi')

var filled = false
var dotFilled = false


const addToVisor = key =>{
  result.innerText = ''
  let nums = firstNum.innerText

  if(nums.length < 1 && (key === '+' || key === '-' || key === 'x' || key === '÷' || key === '.' || key === '^')){ 
    result.innerText = 'Operação inválida'
  } else {
    if(typeof key == 'number' && filled === false)
      firstNum.innerText += key
    else if (typeof key == 'string' && key !== '.'){
      operator.innerText = key
      filled = true
      dotFilled = false
    } else if (typeof key == 'number' && filled === true)
      secNum.innerText += key
    else if (typeof key == 'string' && key === '.' && filled === false)
      firstNum.innerText += key
    else 
      secNum.innerText += key
  }
}

const addDot = () =>{
  if(!dotFilled){
    dotFilled = true
    addToVisor('.')
  }
}

const calculate = () =>{
  if(operator.innerText === 'x')
    result.innerText = firstNum.innerText * secNum.innerText
  else if (operator.innerText === '+')
    result.innerText = Number(firstNum.innerText) + Number(secNum.innerText)
  else if (operator.innerText === '-')
    result.innerText = firstNum.innerText - secNum.innerText
  else if (operator.innerText === '^')
    result.innerText = Math.pow(firstNum.innerText, secNum.innerText)
  else if (operator.innerText === '÷'){
    if(secNum.innerText == 0){
      result.innerText = 'Operação Inválida'
    } else
      result.innerText = firstNum.innerText / secNum.innerText
  } else
    result.innerText = 'Operação inválida'
    
  firstNum.innerHTML = ''
  operator.innerText = ''
  secNum.innerText = ''
  filled = false
  dotFilled = false
}

const clearVisor = () => {
  firstNum.innerHTML = ''
  operator.innerText = ''
  secNum.innerText = ''
  result.innerText = ''
  filled = false
  dotFilled = false
}