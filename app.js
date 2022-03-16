const img1 = document.querySelector('div#img1>img')
const img2 = document.querySelector('div#img2>img')
const btn = document.querySelector('button#btn1')
const winDiv = document.querySelector('div.result')
const winP = document.querySelector('div.result>p')
const winSpan = document.querySelector('div.result>p>span')
const p1_score = document.querySelector('div.p1-score')
const p2_score = document.querySelector('div.p2-score')
p1_score.innerHTML = 0
p2_score.innerHTML = 0
winDiv.style.background = 'transparent'
winP.style.display = 'none'

let imgArr = ['./image/tas.png', './image/kagit.png', './image/makas.jpg']

function randomFunc1(){
    let random1 = Math.floor(Math.random()*imgArr.length)
    return random1
}

function randomFunc2(){
    let random2 = Math.floor(Math.random()*imgArr.length)
    return random2
}

let a;
let b;

function imgSrc(){
    a = imgArr[randomFunc1()]
    b = imgArr[randomFunc2()]
    
    img1.src = a
    img2.src = b
}

function scoreFunc(){
    let x = Number(p1_score.innerHTML)
    let y = Number(p2_score.innerHTML)
    
    if(a == imgArr[0] && b == imgArr[1]){
        p2_score.innerHTML = y+1
    } else if(a == imgArr[0] && b == imgArr[2]){
        p1_score.innerHTML = x+1
    } else if(a == imgArr[1] && b == imgArr[0]){
        p1_score.innerHTML = x+1
    } else if(a == imgArr[1] && b == imgArr[2]){
        p2_score.innerHTML = y+1
    } else if(a == imgArr[2] && b == imgArr[0]){
        p2_score.innerHTML = y+1
    } else if(a == imgArr[2] && b == imgArr[1]){
        p1_score.innerHTML = x+1
    }
}

function winner(){
    
    if(p1_score.innerHTML == 3){
            winP.style.display = 'inline-block'
            winDiv.style.background = 'rgb(255, 42, 42)'
            
        
        setTimeout(()=>{
            p1_score.innerHTML = 0
            p2_score.innerHTML = 0
        },300)
        winSpan.innerHTML = 1

        setTimeout(()=>{
            winP.style.display = 'none'
            winDiv.style.background = 'transparent'
        }, 5000)

    } else if(p2_score.innerHTML == 3){
            winP.style.display = 'inline-block'
            winDiv.style.background = 'rgb(255, 42, 42)'
            
        
        setTimeout(()=>{
            p1_score.innerHTML = 0
            p2_score.innerHTML = 0
        },300)
        winSpan.innerHTML = 2 

        setTimeout(()=>{
            winP.style.display = 'none'
            winDiv.style.background = 'transparent'
        }, 5000)
        
    } 
}

btn.addEventListener('click', playFunction)

function playFunction(){
    imgSrc()
    scoreFunc()
    winner()
}