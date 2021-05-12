// var contMenu  = document.createElement('div');
// contMenu.className = "contMenu";
// contMenu.id = "contMenu";
// document.getElementById('game').appendChild(contMenu);

var menu = document.createElement('div');
// menu.style.backgroundImage = "url(imagenes/marco2.png)";

menu.className = "menu";
menu.id = "menu";
// menu.style.background = "#fff";
document.getElementById('map').appendChild(menu);

var backgroundMenu = document.createElement('div');
// backgroundMenu.style.backgroundImage = "url(imagenes/blackScreen.png)";
backgroundMenu.style.backgroundColor = "#000";
backgroundMenu.className = "blackScreen";
backgroundMenu.id = "blackScreen";
document.getElementById('menu').appendChild(backgroundMenu);

var contInstrucciones = document.createElement('div');
contInstrucciones.className = "contInstrucciones";
contInstrucciones.id = "contInstrucciones";
document.getElementById('menu').appendChild(contInstrucciones);

var instrucciones = document.createElement('div');
instrucciones.style.backgroundImage = "url(../../../media/games/FoodRunner/letreros/aguantaING1.png)";
instrucciones.id = "inst";
instrucciones.className = "inst";
document.getElementById('contInstrucciones').appendChild(instrucciones);

var contIngredientes = document.createElement('div');
contIngredientes.className = "contIngredientes";
contIngredientes.id = "contIngredientes";
document.getElementById('menu').appendChild(contIngredientes);

var contPuntos = document.createElement('div');
contPuntos.className = "contPuntos";
contPuntos.id = "contPuntos";
document.getElementById('menu').appendChild(contPuntos);

// PAN
var bread = document.createElement('div');
bread.className = "itemIngr";
bread.id = "bread";
bread.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredients/breadv2.gif";
document.getElementById('contIngredientes').appendChild(bread);

var mas10 = document.createElement('div');
mas10.className = "plusScore";
mas10.style.backgroundImage = "url(../../../media/games/FoodRunner/time/numeros/+10.png";
document.getElementById('contPuntos').appendChild(mas10);

// LECHE
var leche = document.createElement('div');
leche.className = "itemIngr";
leche.id = "leche";
leche.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredients/milk.gif";
document.getElementById('contIngredientes').appendChild(leche);

var mas15 = document.createElement('div');
mas15.className = "plusScore";
mas15.style.backgroundImage = "url(../../../media/games/FoodRunner/time/numeros/+15.png";
document.getElementById('contPuntos').appendChild(mas15);

// APPLE
var apple = document.createElement('div');
apple.className = "itemIngr";
apple.id = "apple";
apple.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredients/apple.gif";
document.getElementById('contIngredientes').appendChild(apple);

var mas20 = document.createElement('div');
mas20.className = "plusScore";
mas20.style.backgroundImage = "url(../../../media/games/FoodRunner/time/numeros/+20.png";
document.getElementById('contPuntos').appendChild(mas20);

// PIZZA
var pizza = document.createElement('div');
pizza.className = "itemIngr";
pizza.id = "pizza";
pizza.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredients/pizza.gif";
document.getElementById('contIngredientes').appendChild(pizza);

var mas30 = document.createElement('div');
mas30.className = "plusScore";
mas30.style.backgroundImage = "url(../../../media/games/FoodRunner/time/numeros/+30.png";
document.getElementById('contPuntos').appendChild(mas30);

// SUSHI
var sushi = document.createElement('div');
sushi.className = "itemIngr";
sushi.id = "sushi";
sushi.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredients/sushi.gif";
document.getElementById('contIngredientes').appendChild(sushi);

var mas50 = document.createElement('div');
mas50.className = "plusScore";
mas50.style.backgroundImage = "url(../../../media/games/FoodRunner/time/numeros/+50.png";
document.getElementById('contPuntos').appendChild(mas50);

// VENENO
var contIngredientes2 = document.createElement('div');
contIngredientes2.className = "contIngredientes";
contIngredientes2.id = "contIngredientes2";
contIngredientes2.style.top = "60%";
document.getElementById('menu').appendChild(contIngredientes2);

var veneno = document.createElement('div');
veneno.className = "itemIngr";
veneno.id = "veneno";
veneno.style.marginLeft = "46%";
veneno.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredients/venom.gif";
document.getElementById('contIngredientes2').appendChild(veneno);

var contPuntos2 = document.createElement('div');
contPuntos2.className = "contPuntos";
contPuntos2.id = "contPuntos2";
contPuntos2.style.top = "68%";
document.getElementById('menu').appendChild(contPuntos2);

var menos20 = document.createElement('div');
menos20.className = "plusScore";
menos20.style.backgroundImage = "url(../../../media/games/FoodRunner/time/numeros/-20.png";
menos20.style.marginLeft = "51%"
document.getElementById('contPuntos2').appendChild(menos20);

var imagenesVolumen = 
[
    "../../../media/games/FoodRunner/time/volumeoff.png",
    "../../../media/games/FoodRunner/time/volumeon.png"
];

// VOLUMEN

// var contVolumen = document.createElement('div');
// contVolumen.className = "contVolumen";
// contVolumen.id = "contVolumen";
// document.getElementById('map').appendChild(contVolumen); // sin body no funciona

// var volumen = document.createElement('div');
// volumen.id = "volumen";
// volumen.className = "volumen";
// volumen.style.backgroundImage = "url(" + imagenesVolumen[0] + ")";
// document.getElementById('contVolumen').appendChild(volumen);

// var clicked = false;
// var song = Math.floor(Math.random() * listaMusica.length);
// var myMusic = new sound( listaMusica[song] );
// myMusic.volume = 0.001;

// volumen.addEventListener ( "click", function()
// {
//     var itemMusica = document.getElementById( listaMusica[song]);

//     if ( !clicked )
//     {
//         volumen.style.backgroundImage = "url(" + imagenesVolumen[1] + ")";
//         volumen.style.backgroundSize = 'contain';

//         itemMusica.muted = false;
//         myMusic.play();

//         clicked = true;
//     }
//     else
//     {
//         volumen.style.backgroundImage = "url(" + imagenesVolumen[0] + ")";
//         volumen.style.backgroundSize = 'contain';

        
//         itemMusica.muted = true;

//         clicked = false;
//     }
// })

// PRESS

var contPress = document.createElement('div');
contPress.className = "contPress";
contPress.id = "contPress";
document.getElementById("menu").appendChild(contPress);
 
var press = document.createElement('div');
press.className = "press";
press.id = "press";
document.getElementById("contPress").appendChild(press);

function final()
{
    // var contMenu  = document.createElement('div');
    // contMenu.className = "contMenu";
    // contMenu.id = "contMenu";
    // document.getElementById('map').appendChild(contMenu);    

    var menu = document.createElement('div');
    // menu.style.backgroundImage = "url(imagenes/marco2.png)";
    menu.className = "menu";
    menu.id = "menu";
    // menu.style.background = "#fff";
    document.getElementById('map').appendChild(menu);

    var backgroundMenu = document.createElement('div');
    // backgroundMenu.style.backgroundImage = "url(imagenes/blackScreen.png)";
    backgroundMenu.style.backgroundColor = "#000";
    backgroundMenu.className = "blackScreen";
    backgroundMenu.id = "blackScreen";
    document.getElementById('menu').appendChild(backgroundMenu);

    // GAME OVER

    var contGameOver = document.createElement('div');
    contGameOver.className = "contGameOver";
    contGameOver.id = "contGameOver";
    document.getElementById('menu').appendChild(contGameOver);

    var gameover = document.createElement('div');
    gameover.className = "gameover";
    gameover.id = "gameover";
    document.getElementById('contGameOver').appendChild(gameover);

    var contTimeFinal = document.createElement('div');
    contTimeFinal.className = "contTimeFinal";
    contTimeFinal.id = "contTimeFinal";
    document.getElementById('menu').appendChild(contTimeFinal);

    var timeFinal = document.createElement('div');
    timeFinal.className = "timeFinal";
    timeFinal.id = "timeFinal";
    document.getElementById('contTimeFinal').appendChild(timeFinal);

    var dospuntosBox = document.createElement('div');
    dospuntosBox.className = "dospuntosBox";
    dospuntosBox.id = "dospuntosBox";
    document.getElementById('contTimeFinal').appendChild(dospuntosBox);

    var contScoreFinal = document.createElement('div');
    contScoreFinal.className = "contScoreFinal";
    contScoreFinal.id = "contScoreFinal";
    document.getElementById('menu').appendChild(contScoreFinal);

    var scoreFinal = document.createElement('div');
    scoreFinal.className = "scorefinal";
    scoreFinal.id = "scoreFinal";
    document.getElementById('contScoreFinal').appendChild(scoreFinal);

    var dospuntosBox2 = document.createElement('div');
    dospuntosBox2.className = "dospuntosBox";
    dospuntosBox2.id = "dospuntosBox";
    document.getElementById('contScoreFinal').appendChild(dospuntosBox2);    

    // NUMEROS
    // TIMER
    var listaNumeros = getTime();

    var decMinuto = document.createElement('div');
    decMinuto.className = "numerosMenu";
    decMinuto.style.backgroundImage = listaNumeros[0];
    decMinuto.style.marginLeft = "26%";
    document.getElementById('contTimeFinal').appendChild(decMinuto);

    var minutoN = document.createElement('div');
    minutoN.className = "numerosMenu";
    minutoN.style.backgroundImage = listaNumeros[1];
    document.getElementById('contTimeFinal').appendChild(minutoN);

    var dospuntosBox3 = document.createElement('div');
    dospuntosBox3.className = "dospuntosBox";
    dospuntosBox3.id = "dospuntosBox";
    document.getElementById('contTimeFinal').appendChild(dospuntosBox3);

    var decN = document.createElement('div');
    decN.className = "numerosMenu";
    decN.style.backgroundImage = listaNumeros[2];
    document.getElementById('contTimeFinal').appendChild(decN);

    var sec = document.createElement('div');
    sec.className = "numerosMenu";
    sec.style.backgroundImage = listaNumeros[3];
    document.getElementById('contTimeFinal').appendChild(sec);

    // SCORE

    listaNumeros = getPuntuacion();

    var milB = document.createElement('div');
    milB.className = "numerosMenu";
    milB.style.backgroundImage = listaNumeros[0];
    milB.style.marginLeft = "23%";
    document.getElementById('contScoreFinal').appendChild(milB);

    var cienB = document.createElement('div');
    cienB.className = "numerosMenu";
    cienB.style.backgroundImage = listaNumeros[1];
    document.getElementById('contScoreFinal').appendChild(cienB);

    var diezB = document.createElement('div');
    diezB.className = "numerosMenu";
    diezB.style.backgroundImage = listaNumeros[2];
    document.getElementById('contScoreFinal').appendChild(diezB);

    var unoB = document.createElement('div');
    unoB.className = "numerosMenu";
    unoB.style.backgroundImage = listaNumeros[3];
    document.getElementById('contScoreFinal').appendChild(unoB);
    
    reload.style.display = "block";
    reload.style.zIndex = 2;
    // volumen.style.left = "68%";
    // volumen.style.top = "23%";
}

var reload = document.createElement('div');
reload.className = "reload";
reload.style.top = "60%";
reload.style.left = "48%";
reload.style.backgroundImage = "url(../../../media/games/FoodRunner/time/reload.png)";
reload.style.display = "none";
reload.style.zIndex = 1;
document.body.appendChild(reload);

reload.addEventListener ( "click", function()
{
    window.location.reload(true);
})


function contraer( open )
{
    // var restaWidth = menu.offsetWidth;
    // var restaHeight = menu.offsetHeight;
    // var sumaX = parseInt(menu.style.left);
    // var sumaY = parseInt(menu.style.top);
    // var temp;

    contPuntos.parentNode.removeChild(contPuntos);
    contPuntos2.parentNode.removeChild(contPuntos2);
    contInstrucciones.parentNode.removeChild(contInstrucciones);
    contIngredientes.parentNode.removeChild(contIngredientes);
    contIngredientes2.parentNode.removeChild(contIngredientes2);
    instrucciones.parentNode.removeChild(instrucciones);
    press.remove();

    // volumen.style.left = "1453px";
    // volumen.style.top = "190px";

    menu.remove();
    
    // temp = setInterval ( function(){

    //     restaHeight -= 10;
    //     restaWidth -= 10;
    //     sumaX += 100;
    //     sumaY += 5;

    //     menu.style.width = restaWidth + "px";
    //     menu.style.height = restaHeight + "px";

    //     menu.style.left = sumaX + "px"
    //     menu.style.top = sumaY + "px";

    //     if ( parseInt(menu.style.left) > 500 )
    //     {
    //         backgroundMenu.remove();
    //         menu.remove();
    //     }

    // }, 1);
}