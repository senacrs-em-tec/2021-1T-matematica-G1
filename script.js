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
        window.location.href = "index.html";
    }
    
    localStorage.setItem("vidas", vida);

}

function musica(){

}

function carta0(){
    vida = parseInt(vida) - 1 ;
    hearts();
}

function carta1(){
    hearts();
}

function valor(){
    
}

function musica(){
    
    stt = document.getElementById('stts').value;

    if (parseInt(stt) === 1){
        alert('musica ligado');
    } else {
        alert('musica desligada');
    }


}


musica();