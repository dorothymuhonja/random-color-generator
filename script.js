const colorBtn = document.querySelector('.colorBtn')
const bodyBgc = document.querySelector('body')

const colors = ['magenta', 'lime', 'cyan', 'lavender', 'purple', 'gray', '#4b5998']

colorBtn.addEventListener('click', changeColor)

function changeColor() {
    let random = Math.floor(Math.random()*colors.length)
    bodyBgc.style.backgroundColor = colors[random]
}

