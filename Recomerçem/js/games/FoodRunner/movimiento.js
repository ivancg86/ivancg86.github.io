

function desenfocar()
{
    boxes.forEach ( function(box)
    {
        box.dom.classList.add("blur");
    });

    pg.classList.add('blur');
    scoreboard.classList.add('blur');
    puntuacion.classList.add('blur');
    timer.classList.add('blur');
    contador.classList.add('blur');
    fire.classList.add('blur');

    var estantes = document.getElementsByClassName('estante');
    for (var i = 0; i < estantes.length; i++)
    {
        estantes.item(i).className += " blur";
    }

    var ingrendientes = document.getElementsByClassName('ingredients');
    for (var i = 0; i < ingrendientes.length; i++)
    {
        ingrendientes.item(i).className += " blur";
    }
}

function enfocar()
{
    boxes.forEach ( function(box)
    {
        box.dom.classList.remove("blur");
    });
    
    pg.classList.remove('blur');
    scoreboard.classList.remove('blur');
    puntuacion.classList.remove('blur');
    timer.classList.remove('blur');
    contador.classList.remove('blur');
    fire.classList.remove('blur');

    var estantes = document.getElementsByClassName('estante');
    for (var i = 0; i < estantes.length; i++)
    {
        estantes.item(i).classList.remove("blur");
    }

    var ingrendientes = document.getElementsByClassName('ingredients');
    for (var i = 0; i < ingrendientes.length; i++)
    {
        ingrendientes.item(i).classList.remove("blur");
    }
}


desenfocar();

// VARIABLES

const GRAVEDAD = 1;

var maxWidthScreen = document.getElementById("game").offsetWidth;
var isJumping = false;

var ingredientes = getArrayIngredientes();
var itemSound;

function getIngr( ingrediente )
{
    var yinicial = parseInt(ingrediente.dom.style.bottom);
    var y = parseInt(ingrediente.dom.style.bottom);
    
    var velEfecto = 1;
    ingrediente.isHit = true;

    var src;

    if ( ingrediente.puntosI != -20 )
    {
        src = "../../../media/sonidos/FoodRunner/itemPickUp.mp3";
    }
    else
    {
        src = "../../../media/sonidos/FoodRunner/hit.mp3"
    }

    itemSound = new sound( src );
    itemSound.volume = 0.05;
    itemSound.play();

    showScore( ingrediente );
    sumarPuntos(ingrediente.puntosI);
    
    let getAnimation = setInterval (function()
    {
        y += velEfecto;
        ingrediente.dom.style.bottom = y + "px";

        if ( y == (yinicial + 80) )
        {            
            clearInterval(getAnimation);
            ingrediente.dom.remove();
               
            var itemSound2 = document.getElementById(src);
            itemSound2.parentNode.removeChild(itemSound2);
        }

    }, 6);
}

// CALCULOS MOVIMIENTO PG

function sumarX ( x, box )
{
    x += VELOCIDAD;
    box.style.left = x + "px";
}

function restarX ( x, box )
{
    x -= VELOCIDAD;
    box.style.left = x + "px";
}

function sumarY ( y, box, vel )
{
    y += vel;
    y *= GRAVEDAD;
    box.style.bottom = parseInt(y) + "px";
}

function restarY ( y, box )
{
    y -= 5;
    y *= GRAVEDAD;
    box.style.bottom = parseInt(y) + "px";
}

// MOVIMIENTO PG

var choca = false;
var choca3 = false;

function goRight()
{
    var x = parseInt(pg.style.left);
    var y = parseInt(pg.style.bottom);

    if ( x <= maxWidthScreen - 70 )
    {
        if ( !hasBottom )
        {
            choca = checkCollisionX( x, VELOCIDAD );

        }
        else
        {
            choca = checkCollisionX( x, VELOCIDAD );

            if ( !isJumping )
            {
                bottomDetection ();
            }

            var ingrediente;

            ingredientes.forEach( function(ingr)
            {
                isCollade = collision( pg, ingr, VELOCIDAD, 0 );
                if ( isCollade )
                {
                    if (!ingr.isHit)
                    {
                        ingrediente = ingr;
                        choca3 = true;
                    }
                }
            });

            if (choca3)
            {
                getIngr(ingrediente);
            }

            choca3 = false;
        }

        
    }
}	


function goLeft()
{        
    var x = parseInt(pg.style.left);

    if ( x >= 0 )
    {
        if ( !hasBottom )
        {
            choca = checkCollisionX( x, -VELOCIDAD );

            
        }
        else
        {
            choca = checkCollisionX( x, -VELOCIDAD );
            
            if ( !isJumping )
            {
                bottomDetection ();
            }

            choca3 = false;

            var ingrediente;

            ingredientes.forEach( function(ingr)
            {
                
                isCollade = collision( pg, ingr, -VELOCIDAD, 0 );
                if ( isCollade )
                {
                    if (!ingr.isHit)
                    {
                        if (!ingr.isHit)
                        {
                            ingrediente = ingr;
                            choca3 = true;
                        }
                    }
                }
            });

            if (choca3)
            {
                getIngr(ingrediente);
            }

            choca3 = false;
        }

        
    }
    
}

function goUp()
{
    jump();
}

var done = false;

function checkCollisionX( x_pg, x )
{
    choca = false;

    boxes.forEach( function(box)
    {
        isCollade = collision( pg, box , x, 0 );
        
        if ( isCollade  )
        {
            choca = true;
        }
    });             

    if (!choca)
    {
        if ( x > 0 && !done )
        {
            sumarX ( x_pg, pg );
            done = true;
        }
        else if ( x < 0 && !done )  
        {
            restarX ( x_pg, pg );
            done = true;
        }
    }

    done = false;

    return choca;
}

function checkCollisionY( y_pg, y, vel )
{
    choca = false;

    boxes.forEach( function(box)
    {
        isCollade = collision( pg, box , 0, y );
        
        if ( isCollade  )
        {
            choca = true;
        }
    });             

    if (!choca)
    {
        if ( y > 0 && !done )
        {
            sumarY ( y_pg, pg, vel );
            done = true;
        }
        else if ( y < 0 && !done )
        {
            restarY ( y_pg, pg );
            done = true;
        }
    }

    choca3 = false;
    var ingrediente;

    ingredientes.forEach( function(ingr)
    {
        isCollade = collision( pg, ingr, 0, -VELOCIDAD );
        if ( isCollade )
        {
            if (!ingr.isHit)
            {
                ingrediente = ingr;
                choca3 = true;
            }
        }
    });

    if (choca3)
    {
        getIngr(ingrediente);
    }

    choca3 = false;

    done = false;

    return choca;
}

function bottomDetection()
{
    choca = false;

    boxes.forEach( function(box)
    {
        isCollade = collision( pg, box , 0, -VELOCIDAD );
        
        if ( isCollade  )
        {
            choca = true;
        }
    }); 

    if ( !choca )
    {
        choca = false;
        isJumping = true;

        let downTimerID2 = setInterval( function() {

            choca = false;
            boxes.forEach( function(box)
            {
                isCollade = collision( pg, box, 0, -VELOCIDAD );

                if ( isCollade  )
                {
                    choca = true;
                }
            });    

            if (!choca)
            {
                restarY ( parseInt(pg.style.bottom), pg );

                if ( parseInt(pg.style.bottom) <= SUELO )
                {
                    isJumping = false;
                    hasBottom = false;
                    isPressed = false;
                    
                    if (lookingRight == true) {	pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_r.gif')"; }
			        else { pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_l.gif')"; }
                    clearInterval(downTimerID2);
                }
            }   
            else
            {
                isJumping = false;
                hasBottom = true;
                isPressed = false;
                
                if (lookingRight == true) {	pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_r.gif')"; }
                else { pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_l.gif')"; }
                clearInterval(downTimerID2);
            }

            choca3 = false;

            var ingrediente;

            ingredientes.forEach( function(ingr)
            {
                
                isCollade = collision( pg, ingr, -VELOCIDAD, 0 );
                if ( isCollade )
                {
                    if (!ingr.isHit)
                    {
                        if (!ingr.isHit)
                        {
                            ingrediente = ingr;
                            choca3 = true;
                        }
                    }
                }
            });

            if (choca3)
            {
                getIngr(ingrediente);
            }

            choca3 = false;
            
        }, 1);
    }

    
}

// SALTO

var posInicial;
var jumpON = false;
var posInicial;
var hasBottom = false;
var choca2 = false;

function jump()
{
    choca = false;

    if ( !isJumping )
    {
        posInicial = parseInt(pg.style.bottom);

        var subir = setInterval( function()
        {
            if ( parseInt(pg.style.bottom) >= ( posInicial + ( pg.offsetHeight + (pg.offsetHeight))) || choca2  )
            {
                clearInterval( subir );
                choca = false;

                var caer = setInterval( function()
                {
                    choca = false;

                    choca = checkCollisionY ( parseInt(pg.style.bottom), -VELOCIDAD, 0 );

                    if ( choca )
                    {
                        hasBottom = true;
                    }
                    else
                    {
                        hasBottom = false;
                    }

                    if ( parseInt(pg.style.bottom) <= 0 || choca)
                    {

                        isJumping = false;
                        isPressed = false;
                    
                        if ( lookingRight ){pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_r.gif')";}
                        else{pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_l.gif')";}

                        clearInterval(caer);
                    }
                                        

                }, 7);
            }

            choca2 = checkCollisionY ( parseInt(pg.style.bottom), VELOCIDAD, 5 );

            if ( lookingRight ){pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_jumping_r.png')";}
            else{pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_jumping_l.png')";}

            isJumping = true;

        }, 1);
    }
}

// COLISIONADOR

function collision ( pg, box, lat, pos )
{
    var collide = false;

    var disB = parseInt(pg.style.left) + lat;
    var altB = parseInt(pg.style.bottom) + pos;

    if (disB < parseInt(box.dom.style.left) + box.dom.offsetWidth &&
        disB + pg.offsetWidth > parseInt(box.dom.style.left) &&
        altB < parseInt(box.dom.style.bottom) + box.dom.offsetHeight &&
        altB + pg.offsetHeight > parseInt(box.dom.style.bottom)  )
        {
            collide = true;        
        }

    return collide;
}

// KEYS DETECTOR

var checkKeys;
var keys;
var isPressed = false;
var started = false;
var lookingRight = true;
var song = Math.floor(Math.random() * listaMusica.length);
var myMusic = new sound( listaMusica[song] );
myMusic.volume = 0.001;

checkKeys = setInterval ( function()
{
    keys = getKeys();
    // console.log(keys);

    if ( keys["d"] == true || keys["D"] == true || keys["ArrowRight"] == true )
    {
        if ( !started )
        {
            enfocar();
            contraer();
            
            init();
            startMoving();  
            started = true;
            myMusic.play();
        }

        if ( !died )
        {
            if ( !isJumping )
            {
                pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_walking_r.gif')";
            }

            lookingRight = true;

            goRight();
        }
    }

    if ( keys["a"] == true || keys["A"] == true || keys["ArrowLeft"] == true  )
    {
        if ( !started )
        {
            enfocar();
            contraer();

            init();            
            startMoving();  
            started = true;
            myMusic.play();
        }

        if ( !died )
        {
            if ( !isJumping )
            {
                pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_walking_l.gif')";
            }

            lookingRight = false;

            goLeft();
        }
    }

    if ( keys["w"] == true || keys["W"] == true || keys["ArrowUp"] == true )
    {
        if ( !started )
        {   
            enfocar();
            contraer();
            
            init();
            startMoving();  
            started = true;
            myMusic.play();
        }

        if ( !died )
        {
            if ( !isPressed )
            {
                isPressed = true;
                goUp();        
            }
        }
    }

}, 1);

function resetPG(event)
{
    if ( event == "a" || event == "A" || event == "ArrowLeft" )
    {
        if ( !isJumping )
        {
            pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_l.gif')";
        }
    }
    
    if ( event == "d" || event == "D" || event == "ArrowRight" )
    {
        if ( !isJumping )
        {
            pg.style.backgroundImage = "url('../../../media/games/FoodRunner/pg/pg_stand_r.gif')";
        }
    }
}