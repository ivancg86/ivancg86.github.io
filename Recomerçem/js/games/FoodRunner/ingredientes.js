var texturas =
[
    "../../../media/games/FoodRunner/ingredients/breadv2.gif",
    "../../../media/games/FoodRunner/ingredients/milk.gif",
    "../../../media/games/FoodRunner/ingredients/venom.gif",
    "../../../media/games/FoodRunner/ingredients/apple.gif",
    "../../../media/games/FoodRunner/ingredients/pizza.gif",
    "../../../media/games/FoodRunner/ingredients/sushi.gif"
]; 

var puntosIngr = 
[
    10,
    15,
    -20,
    20,
    30,
    50
];

var boxes;
var variables = {};
var prefijo = "ingrediente";
var ingredientes = new Array();
var j = 0;
var n = 0;

function Ingredients()
{
    var div = document.createElement("div");
    div.className = "ingredients";
    this.isHit = false;

    this.dom = div;

    n = asignarIngrediente(div);
    this.puntosI = puntosIngr[n];
    document.getElementById("map").appendChild(div);    
}

function getArrayIngredientes()
{
    return ingredientes;
}

var isTrue;
generarIngredientes();

function generarIngredientes()
{
    boxes = getArrayBoxes();  

    boxes.forEach( function(box)
    {
        isTrue = Math.random() <= 0.2;
        
        if ( isTrue )
        {
            variables[prefijo + j] = new Ingredients();
            variables[prefijo + j].dom.style.left = parseInt(box.dom.style.left) + 25 + 'px';
            variables[prefijo + j].dom.style.bottom = parseInt(box.dom.style.bottom) + box.dom.offsetHeight + 10 + "px";

            ingredientes.push(variables[prefijo + j]);
            j++;
        }
    });
}

function addIngredient(box)
{
    isTrue = Math.random() <= 0.2;

    if ( isTrue )
    {
        variables[prefijo + j] = new Ingredients();
        variables[prefijo + j].dom.style.left = parseInt(box.dom.style.left) + 25 + 'px';
        variables[prefijo + j].dom.style.bottom = parseInt(box.dom.style.bottom) + box.dom.offsetHeight + 10 + "px";

        ingredientes.push(variables[prefijo + j]);
        j++;
    }
}

function asignarIngrediente( div )
{
    var rand = Math.random() <= 0.5;

    if ( rand )
    {
        div.style.backgroundImage = "url(" + texturas[0] + ")";
        i = 0;
    }
    else
    {
        rand = Math.random() <= 0.4;

        if ( rand )
        {
            div.style.backgroundImage = "url(" + texturas[1] + ")";
            i = 1;
        }
        else
        {
            rand = Math.random() <= 0.3;

            if ( rand )
            {
                div.style.backgroundImage = "url(" + texturas[2] + ")";
                i = 2;
            }
            else
            {
                rand = Math.random() <= 0.3;
        
                if ( rand )
                {
                    div.style.backgroundImage = "url(" + texturas[3] + ")";
                    i = 3;
                }
                else
                {
                    rand = Math.random() <= 0.4;

                    if ( rand )
                    {
                        div.style.backgroundImage = "url(" + texturas[4] + ")";
                        i = 4;
                    }
                    else
                    {
                        div.style.backgroundImage = "url(" + texturas[5] + ")";
                        i = 5;
                    }
                }
            }
        }
    }

    return i;
}