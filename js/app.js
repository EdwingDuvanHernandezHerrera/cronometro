let s = 0;
let m = 0;
let h = 0;

let id = 0;
window.onload = ()=>{
    const iniciarPausar = document.querySelector(".iniciarPausar");
    const resetear = document.querySelector(".resetear");       

    document.querySelector(".tiempo").innerHTML = "00:00:00"; 

    iniciarPausar.addEventListener("click", inicioPausa);
    resetear.addEventListener("click", reiniciarTiempo);

};

function inicioPausa(){
    if(id === 0){
        correrTiempo();
        id = setInterval(correrTiempo, 1000);
        document.querySelector(".icono").classList.remove("bx-play");
        document.querySelector(".icono").classList.add("bx-pause"); 
        document.querySelector(".textoIcono").innerHTML = "Pausar";       
    }
    else{
        clearInterval(id);
        id=0;
        document.querySelector(".icono").classList.remove("bx-pause");
        document.querySelector(".icono").classList.add("bx-play");         
        document.querySelector(".textoIcono").innerHTML = "Iniciar";
    }
}

function correrTiempo() {
    let hAux, mAux, sAux;
    s++;

    s>59 ? m++:m=m;
    s>59 ? s=0:s=s;
    m>59 ? h++:h=h;
    m>59 ? m=0:m=m;
    h>59 ? h=0:h=h;

    s<10 ? sAux="0"+s : sAux=s;
    m<10 ? mAux="0"+m : mAux=m;
    h<10 ? hAux="0"+h : hAux=h;

    document.querySelector(".tiempo").innerHTML = hAux+":"+mAux+":"+sAux;


}

function reiniciarTiempo(){
    clearInterval(id);
    id=0;
    document.querySelector(".tiempo").innerHTML = "00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".icono").classList.remove("bx-pause");
    document.querySelector(".icono").classList.add("bx-play");         
    document.querySelector(".textoIcono").innerHTML = "Iniciar";    
}


























