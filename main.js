const canvas = document.querySelector('canvas');

const area = canvas.getContext('2d');

let posicaoYPlayer1 = 150
let posicaoYPlayer2 = 150

canvas.addEventListener('mousemove', (e)=>{
    if(e.clientY){
        posicaoYPlayer1 = e.clientY - 80 /2 
    }
})

let pontoJogador1 =0
let pontoJogador2 =0

posicaoBolaX = posicaoBolaY = 50
velocidadeDaBolaX = velocidadeDaBolaY = 8

velocidadeJogador2 = 4.5

setInterval(jogo, 25)

function jogo (){
    posicaoBolaX += velocidadeDaBolaX
    posicaoBolaY += velocidadeDaBolaY

    if(posicaoBolaY < 0 && velocidadeDaBolaY < 0){
        velocidadeDaBolaY = -velocidadeDaBolaY
    }

    if(posicaoBolaY > 390 && velocidadeDaBolaY > 0){
        velocidadeDaBolaY = -velocidadeDaBolaY
    }

    if(posicaoBolaX < 0){
        if(posicaoBolaY > posicaoYPlayer1 && posicaoBolaY < posicaoYPlayer1 + 80){
            velocidadeDaBolaX = -velocidadeDaBolaX
            
            let diferencaY = posicaoBolaY - (posicaoYPlayer1 + 40);
            
            velocidadeDaBolaY = diferencaY * 0.3
        }else{
            pontoJogador2 += 1
            posicaoBolaX = 600/2
            posicaoBolaY = 400/2
        }
    }

    if(posicaoBolaX > 590){
        if(posicaoBolaY > posicaoYPlayer2 && posicaoBolaY < posicaoYPlayer2 + 80){
            velocidadeDaBolaX = -velocidadeDaBolaX
            
            let diferencaY = posicaoBolaY - (posicaoYPlayer2 + 40);
            
            velocidadeDaBolaY = diferencaY * 0.3
        }else{
            pontoJogador1 += 1
            posicaoBolaX = 600/2
            posicaoBolaY = 400/2
        }
    }

    if(posicaoYPlayer2 + 40 < posicaoBolaY){
        posicaoYPlayer2 += velocidadeJogador2
    }else{
        posicaoYPlayer2 -= velocidadeJogador2
    }

    area.fillStyle = '#729E58';
    // Tamanho do campo
    area.fillRect(0,0,600,400);

    area.fillStyle = 'white';
    // Divisoria do campo
    area.fillRect(297.5, 0, 2, 400);

    // Posição das Raquetes
    area.fillStyle = 'white';
    // Raquete1
    area.fillRect(0,posicaoYPlayer1,3,80);
    // Raquete2
    area.fillRect(597,posicaoYPlayer2,3,80);

    // Bola
    area.fillStyle = 'white';
    area.fillRect(posicaoBolaX,posicaoBolaY, 4,4);

    area.fillText(`Jogador 1: ${pontoJogador1}`, 100, 150)
    area.fillText(`Jogador 2: ${pontoJogador2}`, 400, 150)

}

