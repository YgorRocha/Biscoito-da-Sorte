const btnClick = document.querySelector('#btnClick')
const btnReturn = document.querySelector('#btnReturn')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let quotesCookie = [
    'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
    'A persistência realiza o impossível e a persistência é o caminho do êxito.',
    'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.',
    'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
    'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
    'A dor faz você mais forte, o medo faz você mais corajoso e a paciência faz você mais sábio.',
    'Se Deus encheu tua vida de obstáculos, é porque ele acredita na tua capacidade de passar por cada um.',
]
    

let randomIndex = Math.floor(Math.random() * quotesCookie.length)
let randomQuotes = quotesCookie[randomIndex]

function handleClick(event){
    event.preventDefault()

    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".paperQuotes p").innerText = randomQuotes
}

btnClick.addEventListener('click' , handleClick)
btnReturn.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
} )


