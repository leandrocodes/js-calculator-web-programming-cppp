let textVisor = document.querySelector('.visor')

let firstNum = document.querySelector('.firstNumber')
let secNum = document.querySelector('.secondNumber')
let operator = document.querySelector('.operator')
let result = document.querySelector('.result')

let dot = document.getElementById('dot')
let division = document.getElementById('div')
let plus = document.getElementById('plus')
let sub = document.getElementById('sub')
let multi = document.getElementById('multi')

let filled = false


const addToVisor = key =>{
  let nums = firstNum.innerText

  if(nums.length < 1 && (key === '+' || key === '-' || key === 'x' || key === '÷' || key === '.' ) ){ 
    console.log(`nao pode ainda`)
  } else {
    if(typeof key == 'number' && filled === false)
      firstNum.innerText += key
    else if (typeof key == 'string' && key !== '.'){
      operator.innerText = key
      filled = true
    }
    else if (typeof key == 'number' && filled === true){
      secNum.innerText += key
    }
    else if (typeof key == 'string' && key === '.' && filled === false)
      firstNum.innerText += key
    else 
      secNum.innerText += key
  }
}

const calculate = () =>{
  if(operator.innerText === 'x'){
    result.innerText = firstNum.innerText * secNum.innerText
  }

  firstNum.innerHTML = ''
  operator.innerText = ''
  secNum.innerText = ''
}

const clearVisor = () => {
  firstNum.innerHTML = ''
  operator.innerText = ''
  secNum.innerText = ''
  result.innerText = ''
  filled = false
}