const container = document.getElementById('container'); 
const colors    = ['#F55A25', '#1C5CE6', '#FC95C3', '#FAF100', 'FA2F00', '#DC143C', '#E6E6FA', '#D8BFD8', 'DA70D6', '#7B68EE', '#00FFFF', '#7FFFD4', '#00BFFF', 
'#D2691E', '#A52A2A', '#FFE4E1']

const SQUARES = 200; 

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}