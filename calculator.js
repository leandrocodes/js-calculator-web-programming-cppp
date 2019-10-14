let visor = document.getElementsByClassName('visor')[0]
let textVisor = visor.getElementsByTagName('p')[0]

let numbers = []
for (let index = 0; index < 10; index++) {
  numbers[index] = document.getElementById(index)
}

let dot = document.getElementById('dot')
let division = document.getElementById('div')
let plus = document.getElementById('plus')
let sub = document.getElementById('sub')
let multi = document.getElementById('multi')

const addToVisor = number =>{
  textVisor.innerText += number 
}

const clearVisor = () => {
  textVisor.innerText = ''
}
