let altura = 0
let largura = 0
let indexRemove = 0
let timing = 2000
let vidas = 1
let tempo = 10
let score = 1

let nivel = window.location.search

console.log(nivel)

switch (nivel) {
    case '?1':
        timing = 2500
        tempo = 25
        break
    case '?2':
        timing = 2000
        tempo = 30
        break
        
    case '?3':
        timing = 1800
        tempo = 30
        break
        
    case '?4':
        timing = 1800
        tempo = 50
        break
        
    case '?5':
        timing = 1200
        tempo = 100
        break
        
    case '?6':
        timing = 800
        tempo = 150
        break
        
    
    default:
        break;
}

document.querySelector('.timing').textContent = tempo

function ajustarTamanhoPalcoJogo(){
    altura = innerHeight
    largura = innerWidth
    return altura, largura
}

let cronometro = setInterval(function(){
    if(tempo >= 0){
        document.querySelector('.timing').textContent = tempo
        tempo--
    }else{
        clearInterval(cronometro)
        clearInterval(Moscas)
        window.location.href = 'Vitoria.html?'+score
    }
}, 1000)

function criarMosquito(){   
    
    if(vidas <= 1){
        score += 10
    }else if(vidas <=2){
        score += 5
    }else{
        score += 2
    }

    score += indexRemove
    
    if(document.querySelector('#Mosquito')){
        if(vidas > 3){
            window.location.href = './gameOver.html'
        }else{

            document.querySelector('#Mosquito').remove()
            document.querySelector(`#v${vidas}`).src = './imagens/coracao_vazio.png'
            vidas++

        }
    }
    let posicao = []
    posicao['x'] = parseInt(Math.random()*largura -90)
    posicao['y'] = parseInt(Math.random()*altura -120)
    if(posicao['x'] < 0){
        posicao['x'] *= -1
    }
    if(posicao['y'] < 0){
        posicao['y'] *= -1
    }

    let mosquito = document.createElement('img')
    mosquito.classList.add(TamanhoVariado())
    mosquito.classList.add(LadoAleatorio())
    mosquito.src = 'imagens/mosca.png'
    mosquito.style.position = 'absolute'
    mosquito.style.left = `${posicao['x']}px`
    mosquito.style.top = `${posicao['y']}px`
    mosquito.id = 'Mosquito'
    mosquito.onclick = function(){
        this.remove()
        indexRemove++
        console.log(indexRemove)
        return indexRemove
    }

    document.body.appendChild(mosquito)

    TamanhoVariado ()

}

function TamanhoVariado (){
    let classe = parseInt(Math.random() * 10)
    // console.log(classe)

    if(classe <= 4){
        return 'Mosquito1'
    }else if(classe <= 7){
        return 'Mosquito2'
    }else{
        return 'Mosquito3'
    }
}

function LadoAleatorio(){
    let classe = parseInt(Math.random() *10)
    if(classe <= 5){
        return 'LadoA'
    }else{
        return 'LadoB'
    }
}

let Moscas = setInterval(function(){
    criarMosquito()
},timing)

ajustarTamanhoPalcoJogo()