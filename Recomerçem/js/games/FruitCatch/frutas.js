//Pantalla
var pantalla = document.getElementById("fondo");
var ancho = pantalla.clientWidth;
var alto = pantalla.clientHeight;
var medidaColumna = ancho / 8;
var centroColumna = medidaColumna / 2;

//Colummnas
var columnas = document.querySelectorAll('[data-numero]');
var posicionColumna = 0;

for (index = 0; index < 8; index++) {
    posicionColumna = posicionColumna + medidaColumna;
    columnas[index].style.width = medidaColumna + "px";
    columnas[index].style.height = alto + "px";
    columnas[index].style.left = posicionColumna + "px";
}

var columnaCaida = 0;


//Vidas
var vidas = 4;
var vida1 = document.getElementById("vida1");
var vida2 = document.getElementById("vida2");
var vida3 = document.getElementById("vida3");

//Sonido fondo
var sound = document.createElement("audio");
sound.volume = 0.1;
sound.src = "../../../media/sonidos/FruitCatch/sonido_pantalla.mp3";
document.body.appendChild(sound);
sound.style.display = "none";

//Sonido recoger
var soundRecoger = document.createElement("audio");
soundRecoger.volume = 0.1;
soundRecoger.src = "../../../media/sonidos/FruitCatch/recoger.mp3";
document.body.appendChild(soundRecoger);
soundRecoger.style.display = "none";

//Sonido caer
var soundCaer = document.createElement("audio");
soundCaer.volume = 0.3;
soundCaer.src = "../../../media/sonidos/FruitCatch/caer.mp3";
document.body.appendChild(soundCaer);
soundCaer.style.display = "none";

//Sonido Final
var soundFinal = document.createElement("audio");
soundFinal.volume = 0.1;
soundFinal.src = "../../../media/sonidos/FruitCatch/GameOver.mp3";
document.body.appendChild(soundFinal);
soundFinal.style.display = "none";


//Fruta
var frutas2 = {};
var prefijo = "fruta";
var y = 0;
var listaFruta = new Array();
var velocidadFruta = 2;
const margenInferior = 656;
var contador = 0;
var mIzFruta = 0;
var tiempo = 10;
var start = false;
var reset = false;

//Creamos la fruta inicial dentro de la array
crearFruta();

document.addEventListener("keydown", function (e) {
    if (!start) {
        if (e.code == "Space") {
            start = true;
            sound.play();
            caer();
        }
    }
    if (reset) {
        if (e.code == "Enter") {
            location.reload(true);
        }
    }
    
    })



function caer() {
    document.getElementById("intro").style.visibility = 'hidden';
    document.getElementById("espacio").style.visibility = 'hidden';
    var bajar = setInterval(function () {
        console.log("entra");

        listaFruta.forEach(function (fr) {
            mIzFruta = parseInt(fr.style.top);
            mIzFruta = mIzFruta + velocidadFruta;
            console.log(mIzFruta);
            fr.style.top = mIzFruta + "px";
            colisiones(fr);

            if (parseInt(fr.style.top) >= margenInferior) {
                animacionPerder(fr);
                fr.remove();
                
                listaFruta.shift();
                vidas--;
                soundCaer.play();
                if (vidas == 3) {
                    vida3.remove();
                }
                else if (vidas == 2) {
                    vida2.remove();
                }
                else if (vidas == 1) {
                    vida1.remove();
                }
                else if (vidas == 0){
                    clearInterval(bajar);
                    sound.pause();
                    soundFinal.play();
                    gameover();
                }
            }
            else if (parseInt(fr.style.top) == ((margenInferior / 2) + 50)) {
                crearFruta();
                acelerar();
            }
        })
    }, tiempo);
}

function frutaAleatoria(fruta) {
    var aleatorioFruta = Math.floor(Math.random() * 4);
    var pera = "url('../../../media/games/FruitCatch/pera.gif')";
    var uva = "url('../../../media/games/FruitCatch/uva.gif')";
    var naranja = "url('../../../media/games/FruitCatch/naranja.gif')";
    var cereza = "url('../../../media/games/FruitCatch/cereza.gif')";

    switch (aleatorioFruta) {
        case 0:
            fruta.style.backgroundImage = pera;
            fruta.style.width = 60 + "px";
            fruta.style.height = 84 + "px";
            break;
        case 1:
            fruta.style.backgroundImage = uva;
            fruta.style.width = 52 + "px";
            fruta.style.height = 86 + "px";
            break;
        case 2:
            fruta.style.backgroundImage = naranja;
            fruta.style.width = 45 + "px";
            fruta.style.height = 68 + "px";
            break;
        case 3:
            fruta.style.backgroundImage = cereza;
            fruta.style.width = 68 + "px";
            fruta.style.height = 68 + "px";
            break;
        default:
            break;
    }
}


function crearFruta() {
    frutas2[prefijo + y] = document.createElement("div");
    frutas2[prefijo + y].id = "fruta";
    frutas2[prefijo + y].className = "fruta";
    frutas2[prefijo + y].style.top = 90 + "px";
    frutaAleatoria(frutas2[prefijo + y]);
    var num = columnaAleatoria();
    document.querySelector('[data-numero= "' + String(num) + '"]').appendChild(frutas2[prefijo + y]);
    frutas2[prefijo + y].style.marginLeft = "40px";
    listaFruta.push(frutas2[prefijo + y]);
    y++;
}

function columnaAleatoria() {
    var aleatorio = Math.floor(Math.random() * 8) + 1;
    for (index = 0; index < 8; index++) {
        if (columnas[index].getAttribute("data-numero") == aleatorio) {
            columnaCaida = columnas[index].style.left;
        }
        return aleatorio;
    }
}

function acelerar() {
    contador++;
    if (contador == 10) {
        velocidadFruta = 3;
    }
    else if (contador == 20) {
        velocidadFruta = 4;
    }
    else if (contador == 30) {
        velocidadFruta = 4.5;
    }
    
}

function colisiones(fruit) {
    var rectPersonaje = personaje.getBoundingClientRect();

    var rectFruta = fruit.getBoundingClientRect();
    var centroFruta = rectFruta.left + (rectFruta.width / 2);

    if (rectPersonaje.left <= centroFruta && rectPersonaje.right >= centroFruta) {
        if (rectPersonaje.top <= rectFruta.bottom && rectPersonaje.bottom >= rectFruta.bottom) {
            var a = document.getElementById("puntuacion").innerText;
            var b = parseInt(a) + 10;
            document.getElementById("puntuacion").innerText = String(b).padStart(4, 0);
            animacionGanar(fruit);
            fruit.remove();
            soundRecoger.play();
            listaFruta.shift();
        }
    }

}

function gameover() {
    document.getElementById("gameover").style.visibility = 'visible';
    document.getElementById("restart").style.visibility = 'visible';
    reset = true;
}

function animacionPerder(frutaCaida) {
    var frutaAnimada = document.createElement("div");
    frutaAnimada.id = frutaCaida.id;
    frutaAnimada.className = frutaCaida.className;
    frutaAnimada.style.top = frutaCaida.style.top;
    frutaAnimada.style.marginLeft = frutaCaida.style.marginLeft;
    if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/pera.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/peraLose.gif')"
    }
    else if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/naranja.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/naranjaLose.gif')"
    }
    else if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/cereza.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/cerezaLose.gif')"
    }
    else if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/uva.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/uvaLose.gif')"
    }
    frutaAnimada.style.width = frutaCaida.style.width;
    frutaAnimada.style.height = frutaCaida.style.height;
    frutaAnimada.style.left = frutaCaida.style.left;
    var a = frutaCaida.parentNode;
    document.querySelector('[data-numero= "' + String(a.dataset.numero) + '"]').appendChild(frutaAnimada);
    setTimeout(() => {
        frutaAnimada.remove();
    }, 1000);
    
}

function animacionGanar(frutaCaida) {
    var frutaAnimada = document.createElement("div");
    frutaAnimada.id = frutaCaida.id;
    frutaAnimada.className = frutaCaida.className;
    frutaAnimada.style.top = frutaCaida.style.top;
    frutaAnimada.style.marginLeft = frutaCaida.style.marginLeft;
    if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/pera.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/peraWin.gif')"
    }
    else if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/naranja.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/naranjaWin.gif')"
    }
    else if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/cereza.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/cerezaWin.gif')"
    }
    else if (frutaCaida.style.backgroundImage == 'url("../../../media/games/FruitCatch/uva.gif")') {
        frutaAnimada.style.backgroundImage = "url('../../../media/games/FruitCatch/uvaWin.gif')"
    }
    frutaAnimada.style.width = frutaCaida.style.width;
    frutaAnimada.style.height = frutaCaida.style.height;
    frutaAnimada.style.left = frutaCaida.style.left;
    var parent = frutaCaida.parentNode;
    document.querySelector('[data-numero= "' + String(parent.dataset.numero) + '"]').appendChild(frutaAnimada);
    setTimeout(() => {
        frutaAnimada.remove();
    }, 1000);
    
}



