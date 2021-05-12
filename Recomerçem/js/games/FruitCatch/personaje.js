//Pantalla
var pantalla = document.getElementById("fondo");
var ancho = pantalla.clientWidth;
var alto = pantalla.clientHeight;


//Personaje
var personaje = document.createElement("div");
document.getElementById("posicion").appendChild(personaje);
var anchoPersonaje = personaje.clientWidth / 2;
personaje.className = "persona";
var velocidad = ancho / 8;
var anchoInicio = ancho - ancho;
var centro = (ancho / 2) - (anchoPersonaje/2);
var posicionInicial = anchoInicio + 20;
var anchoFinal = ancho - velocidad;
personaje.style.left = (parseInt(columnas[7].style.left) - anchoPersonaje - (medidaColumna / 2) - 16) + "px";


//Evento movimiento
document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowRight") {
        moverDerecha();
        console.log(medidaColumna);
        if (parseInt(personaje.style.left) >= (parseInt(columnas[7].style.left) - anchoPersonaje - (medidaColumna / 2) -16)) {
            personaje.style.left = (parseInt(columnas[7].style.left) - anchoPersonaje - (medidaColumna / 2) - 16) + "px";
        }

    }
    if (e.code == "ArrowLeft") {
        moverIzquierda();
        if (parseInt(personaje.style.left) <= (parseInt(columnas[0].style.left) - (medidaColumna / 2))) {
            personaje.style.left = (parseInt(columnas[0].style.left) - (medidaColumna / 2) - (anchoPersonaje)) + "px";
        }

    }
})

//Funcion mover a la derecha
function moverDerecha() {
    personaje.style.left = (parseInt(personaje.style.left) + velocidad) + "px";
    
}

//Funcion mover a la izquierda
function moverIzquierda() {
    personaje.style.left = (parseInt(personaje.style.left) - velocidad) + "px";
}