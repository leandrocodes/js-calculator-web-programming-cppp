let textVisor = document.querySelector('.visor')

let firstNum = document.querySelector('.firstNumber')
let secNum = document.querySelector('.secondNumber')
let operator = document.querySelector('.operator')

let dot = document.getElementById('dot')
let division = document.getElementById('div')
let plus = document.getElementById('plus')
let sub = document.getElementById('sub')
let multi = document.getElementById('multi')

let filled = false

const addToVisor = key =>{
  let arr = []
  arr.push(firstNum.innerText)
  arr.push(secNum.innerText)

  if(arr.length < 1 && (key === '+' || key === '-' || key === 'x' || key === '÷' || key === '.' ) ){ 
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

const clearVisor = () => {
  firstNum.innerText = ''
  secNum.innerText = ''
  operator.innerText = ''
}