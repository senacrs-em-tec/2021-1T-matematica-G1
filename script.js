{
    if (localStorage.getItem("vidas") >= 1){
        vida = localStorage.getItem("vidas")
    } else {
        vida = (3);
    }
}

function hearts(vida){
    vida = parseInt(vida);
    if (vida == 2){
        document.getElementById('coraçao').src = "img/2-heart.png";
    }
    if (vida == 1){
        document.getElementById('coraçao').src = "img/1-heart.png";
    }
    if (vida == 0 ){
        window.location.href = "index.html";
    }
    
    localStorage.setItem("vidas", vida);

}

function carta0(){
    vida = parseInt(vida) - 1 ;
    hearts(vida);
}

function carta1(){
    hearts(vida);
}

hearts(vida);