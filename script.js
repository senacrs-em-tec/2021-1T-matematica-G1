{
    if (localStorage.getItem("vidas") >= 1){
        vida = localStorage.getItem("vidas")
    } else {
        vida = (3);
    }
}

function hearts(){
    if (vida === 2){
        document.getElementById('coraçao').src = "img/2-heart.png";
    }
    if (vida === 1){
        document.getElementById('coraçao').src = "img/1-heart.png";
    }
    if (vida === 0 ){
        window.location.href = "home.html";
    }
    
    localStorage.setItem("vidas", vida);

}

function play() {
    document.getElementById('musica-do-jogo').play();
}

function carta0(){
    vida = parseInt(vida) - 1 ;
    hearts();
}

function carta1(){
    hearts();
}
