var boxes = getArrayBoxes();
var estanterias = getEstantes();
// var ingredientes = getArrayIngredientes();

var DISTBORRADO = -110;

var sumTiempo = 1; // 20
var velocidadBoxes = 1; // 2 
var x = 0;
var timeMover;
var incrementarVel;


function startMoving()
{
    incrementarTiempo = setInterval( function()
    {
        // if (velocidadBoxes < 4.5)
        // {
        //     //velocidadBoxes += 0.1;
        // }
        if ( velocidadBoxes < 5 )
        {
            velocidadBoxes += 1;
        } 
        else
        {
            clearInterval(incrementarTiempo);

            // var incrementarVelocidad = setInterval( function()
            // {
            //     if ( velocidadBoxes < 3 )
            //     {
            //         velocidadBoxes++;
            //     }
            //     else
            //     {
            //         clearInterval(incrementarVelocidad)
            //     }
            //     cambiarIntervalo(sumTiempo);
            // }, 20000)
        }
        cambiarIntervalo(sumTiempo);

    }, 30000);



    function cambiarIntervalo(milisegundos)
    {
        clearInterval(timeMover);
        timeMover = setInterval( mover, milisegundos );
    }

    timeMover = setInterval( mover, sumTiempo );

    function mover(){

        // BOXES -------------------------------------------------------------------------------------------------------------
        boxes = getArrayBoxes();
        boxes.forEach( function(box) 
        {
        
            if ( parseInt(box.dom.style.left) <= parseInt(box.dom.offsetWidth) ) // anchura de la caja 
            {
                if ( !box.hasGenerated )
                {
                    var boxCreated = generarBox();
                    addIngredient(boxCreated);
                    box.hasGenerated = true;
                }
            }

            if ( parseInt(box.dom.style.left) <= DISTBORRADO )
            {
                box.dom.remove();
            }
        });
        
        boxes = getArrayBoxes();
        boxes.forEach( function(box) 
        {
            x = parseInt(box.dom.style.left);

            x -= velocidadBoxes;
            box.dom.style.left = x + "px";
            box.backgroundImage = "url('../../../media/games/FoodRunner/boxes/mueble_cocina.png')";
        });           

        // -------------------------------------------------------------------------------------------------------------------

        for ( var i = 0; i < estanterias.length; i++ )
        {
            x = parseInt(estanterias.item(i).style.left);

            x -= velocidadBoxes;
            estanterias.item(i).style.left = x + "px";
            estanterias.item(i).backgroundImage = "url(../../../media/games/FoodRunner/estanteria.png')";

            if ( parseInt(estanterias.item(i).style.left) <= DISTBORRADO )
            {
                estanterias.item(i).remove();
            }
        };

        ingredientes.forEach( function(ingr)
        {
            x = parseInt(ingr.dom.style.left);

            x -= velocidadBoxes;
            ingr.dom.style.left = x + "px";
            ingr.dom.style.backgroundImage = "url(../../../media/games/FoodRunner/ingredientes/bread.gif')";

            if ( parseInt(ingr.dom.style.left) <= DISTBORRADO )
            {
                ingr.dom.remove();
            }
        });

        // // PERSONAJE

        x = parseInt(pg.style.left);

        if ( parseInt(pg.style.bottom) != SUELO && hasBottom )
        {
            if ( x <= 0 )
            {
                clearInterval(incrementarTiempo);
                clearInterval(time);
                clearInterval(timeMover);
                
                stopGame();
            }
            else
            {
                x -= velocidadBoxes;
                pg.style.left = x + "px";
            }
            
        }
        else
        {
            choca = false;

            boxes.forEach( function(box)
            {
                isCollade = collision( pg, box , velocidadBoxes, 0 );
                
                if ( isCollade  )
                {
                    choca = true;
                }
            });             

            if (choca)
            {
                if ( x <= 0 )
                {
                    clearInterval(incrementarTiempo);
                    clearInterval(time);
                    clearInterval(timeMover);

                    stopGame();
                }
                else
                {
                    x -= velocidadBoxes;
                    pg.style.left = x + "px";
                }

            }
            
        }
    }
}

var died

function stopGame()
{
    
    startGame = false;
     died = true;
    desenfocar();
    final();
}