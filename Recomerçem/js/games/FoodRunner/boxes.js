const NIVEL1 = 0 + "px";
const NIVEL2 = 80 + "px";
const NIVEL3 = 160 + "px";
const NIVEL4 = 240 + "px";
const BOX_SCREEN = 11;

function Box ( x, y )
{
    this.x = x;
    this.y = y;
    this.hasEstanterias = false;
    this.hasGenerated = false;

    var div = document.createElement("div");
    div.classList.add("box");
    this.dom = div;
    this.dom.style.left = x + "px";
    this.dom.style.bottom = y + "px";

    document.getElementById("map").appendChild(div);
}

function getArrayBoxes()
{
    return boxes;
}

var boxes = new Array();

var alturas = 
[
    0,
    80,
    160,
    240
];

var i = 0;
var variables = {};
var prefijo = "box";
var distY = 0;


generarBoxes();

function generarBoxes()
{
    var widthBox = 110;
    var distX = 540;
    var isAllowed = false;
    // Cajas por pantalla 11
    for ( i = 0; i < BOX_SCREEN; i++ )
    {
        if ( isAllowed )
        {
            variables[prefijo + i] = new Box ( distX, distY );
            distX += widthBox;

            boxes.push(variables[prefijo + i]);

            if ( distY == 0)
            {
                var y = Math.floor(Math.random() * 3);
            }
            else
            {
                var y = Math.floor(Math.random() * 4);
            }
            
            distY = alturas[y];

        }

        isAllowed = Math.random() <= 1;
    }    
}

function generarBox()
{
    i++;
    boxes = getArrayBoxes();
    var ultimaPos = parseInt(boxes[boxes.length-1].dom.style.left) + parseInt(boxes[boxes.length-1].dom.offsetWidth); // 105 ?

    variables[prefijo + i] = new Box( ultimaPos, distY);

    if ( distY == 0)
    {
        var y = Math.floor(Math.random() * 3);
    }
    else
    {
        var y = Math.floor(Math.random() * 4);
    }
    distY = alturas[y];
    boxes.push(variables[prefijo + i]);
    generarEstantes();

    return variables[prefijo + i];
}

// -------------------------------------------------------------------------------------------------------------------

function generarEstantes()
{
    boxes = getArrayBoxes();
    var variables = {};
    var prefijo = 'estante';

    boxes.forEach ( function(box, i) 
    {
        if ( !box.hasEstanterias )
        {
            if ( box.dom.style.bottom == NIVEL2 )
            {
                variables[prefijo + i] = document.createElement("div");
                variables[prefijo + i].className = "estante";

                variables[prefijo + i].style.left = box.dom.style.left;
                variables[prefijo + i].style.bottom = NIVEL1;

                variables[prefijo + i].style.width = 107 + "px";

                document.getElementById("map").appendChild(variables[prefijo + i]);
            }
            else if ( box.dom.style.bottom == NIVEL3 )
            {
                variables[prefijo + i] = document.createElement("div");
                variables[prefijo + i].className = "estante";

                variables[prefijo + i].style.height = 160 + "px";
                variables[prefijo + i].style.left = box.dom.style.left;
                variables[prefijo + i].style.bottom = NIVEL1;

                variables[prefijo + i].style.width = 107 + "px";

                document.getElementById("map").appendChild(variables[prefijo + i]);
            }
            else if ( box.dom.style.bottom == NIVEL4 )
            {
                variables[prefijo + i] = document.createElement("div");
                variables[prefijo + i].className = "estante";

                variables[prefijo + i].style.height = 240 + "px";
                variables[prefijo + i].style.left = box.dom.style.left;
                variables[prefijo + i].style.bottom = NIVEL1;

                variables[prefijo + i].style.width = 107 + "px";

                document.getElementById("map").appendChild(variables[prefijo + i]);
            }
            box.hasEstanterias = true;
        }
    });   
}

function getEstantes()
{
    var estanterias = document.getElementsByClassName('estante');

    return estanterias;
}

generarEstantes();