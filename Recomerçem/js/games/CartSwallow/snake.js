(function () {
    const board = document.getElementById("board");
    let h = 600 / 2;
    let v = 600 / 2;
    let speed = 300;
    let process = undefined;
    let apple = [];
    let direction = "L"; // set direction Up, Down, Left, Right
    let snake = [];
    var musica = new Audio("../../../media/sonidos/CartSwallow/SpiritInTheSky.mp3");
    musica.volume = 0.1;
    var empezar = false;
    var reset = false;
    var started = false;


    window.addEventListener("keyup", e => {
        if (process != undefined && [65, 68, 83, 87].indexOf(e.keyCode) != -1) {
            newDirection = { 87: "U", 83: "D", 68: "R", 65: "L" }[e.keyCode];
            if (
                (newDirection == "U" && direction != "D") ||
                (newDirection == "D" && direction != "U") ||
                (newDirection == "R" && direction != "L") ||
                (newDirection == "L" && direction != "R")
            ) {
                direction = newDirection;
            }
        }
    });


    window.addEventListener("keydown", e => {
        if (!started) {
            if (e.code == "Space") {
                empezar = true;
                musica.play();
                start();
                started = true;
            }
        }
        if (reset) {
            if (e.code == "Space") {
                location.reload(true);
            }
        }

    })
   /* setTimeout(() =>{
        snake[0].remove();
    }, 1000);*/

    
      
    function start() {

        // tecla_start = event.keyCode;

        // if (tecla_start == 32) {

        // document.getElementById("gameover").style.visibility = 'hidden';
        
       

        document.getElementById("intro").style.visibility = 'hidden';
        apples.innerText = "0";
        board.classList.remove("fail");
        removeDivs(board);
        speed = 200;
        direction = "L"; // set direction Up, Down, Left, Right
        // definimos los tres primeros elementos de la serpiente
        snake = [[h, v], [h + 30, v], [h + 60, v]];
        board.insertBefore(createDiv([h, v]), null);
        board.insertBefore(createDiv([h + 30, v]), null);
        board.insertBefore(createDiv([h + 60, v]), null);

        apple = setApple(snake); // set position of apple [h,v]
        process = setInterval(movement, speed);

        // }

    };

    //funcion reproducir musica
    function startAudio(reproducir) {


        musica.addEventListener('ended', function () {
            this.currentTime = 0.60;
            this.play();
        })
        musica.play();

    }

    //Funcion que se ejecuta cada n milisegundos
     
    function movement() {
        // obtenemos la nueva posicion de la cabeza de la serpiente
        const newPosition = getNextPosition(direction, snake[0]);

        // comprobamos si nos hemos comido la manzana
        if (checkNewPositionIsApple(newPosition, apple)) {
            board.insertBefore(createDiv(apple), board.querySelectorAll("div")[0]);
            snake.unshift(apple);
            setTail(snake[snake.length - 1], snake[snake.length - 2]);
            setHead(snake[0], snake[1]);
            apple = setApple(snake); // set position of apple [h,v]
            if (speed > 50) {
                process = clearInterval(process);
                speed = Math.round(speed / 1.02);
                process = setInterval(movement, speed);
            }
            let apples = document.getElementById("apples");
            apples.innerText = parseInt(apples.innerText) + 1;
            let puntos = document.getElementById("puntos");
            puntos.innerText = parseInt(puntos.innerText) + 10;
            return;
        }

        // comprobamos que no nos pisemos la cola
        if (checkOverTail(newPosition, snake)) {
            end();
            snake = snakeRedraw(newPosition, snake);
            setTail(snake[snake.length - 1], snake[snake.length - 2]);
            return;
        }

        // movemos la serpiente
        const last = snake.pop();
        snake = snakeRedraw(newPosition, snake);

        // comprobamos que no nos hayamos pasado de los margenes
        if (checkNewPositionIsOutside(newPosition)) {
            end();
            return;
        }
        // comprovar();
    }

    // Funcion que se ejecuta cuando finaliza el juego
    
    function end() {
        // document.getElementById("gameover").style.visibility = 'visible';
        document.getElementById('intro').innerText = "Game Over \n Pulsa Espacio para volver a Jugar!";
        document.getElementById("intro").style.left = "9.5%";
        document.getElementById("intro").style.visibility = 'visible';
        process = clearInterval(process);
        board.classList.add("fail");
        tecla_start = 0;
        musica.pause();
        reset = true;
        
        
        /*while(snake.length > 0){
             snake.pop();
        }
        speed = 200;
        apples.innerText=parseInt(apples.innerText)=0;
*/
    }

    //Funcion que elimina el ultimo div y añade un div nuevo al inicio
    
    function snakeRedraw(newPosition, snake) {
        board.lastElementChild.remove();
        board.insertBefore(createDiv(newPosition), board.querySelector("div"));
        snake.unshift(newPosition);
        setTail(snake[snake.length - 1], snake[snake.length - 2]);
        setHead(snake[0], snake[1]);
        return snake;
    }

    // Funcion que determina la dirección de la cola
     
    function setTail(last, antepenultimate) {
        const lastDiv = board.querySelectorAll("div")[board.querySelectorAll("div").length - 1];
        lastDiv.classList.remove("right", "up", "down");
        if (antepenultimate[0] > last[0]) { // dirección derecha
            lastDiv.classList.add("right");
        } else if (antepenultimate[1] > last[1]) { // direccion subida
            lastDiv.classList.add("up");
        } else if (antepenultimate[1] < last[1]) { // direccion bajada
            lastDiv.classList.add("down");
        }
    }

    //Funcion que determina la dirección de la cabeza
     
    function setHead(first, second) {
        const firstDiv = board.querySelectorAll("div")[0];
        firstDiv.classList.remove("right", "up", "down");
        if (second[0] < first[0]) { // dirección derecha
            firstDiv.classList.add("right");
        } else if (second[1] < first[1]) { // direccion subida
            firstDiv.classList.add("up");
        } else if (second[1] > first[1]) { // direccion bajada
            firstDiv.classList.add("down");
        }
    }

    //Funcion que crear un nuevo div en una posicion determinada
     
    function createDiv(position) {
        let newDiv = document.createElement("div");
        newDiv.style.left = position[0] + "px";
        newDiv.style.top = position[1] + "px";
        return newDiv;
    }

    // Funcion que devuelve la nueva posicion del primer elemento

    function getNextPosition(direction, position) {
        if (direction == "U") {
            return [position[0], position[1] - 30];
        } else if (direction == "D") {
            return [position[0], position[1] + 30];
        } else if (direction == "R") {
            return [position[0] + 30, position[1]];
        } else if (direction == "L") {
            return [position[0] - 30, position[1]];
        }
    }

    // Funcion que comprueba que la nueva posición no se salga del tablero
    

    function checkNewPositionIsOutside(newPosition) {
        return newPosition[0] < 0 ||
            newPosition[1] < 0 ||
            newPosition[0] + 28 > board.clientHeight ||
            newPosition[1] + 28 > board.clientWidth;
    }

    //Funcion para verificar si la posicion recibida esta encima de la serpiente
    
    function checkOverTail(position, snake) {
        return snake.find(el => el[0] == position[0] && el[1] == position[1]) != undefined;
    }

    // Funcion que compara la nueva posicion de la serpiente con la posicion de la manzana
     
    function checkNewPositionIsApple(newPosition, applePosition) {
        return newPosition.every((value, index) => value === applePosition[index]);
    }

    // Funcion que posiciona la manzana en el tablero y devuelve su posicion
    
    function setApple(snake) {
        let h, v;
        while (1) {
            h = Math.round(Math.random() * (board.clientWidth - 30) / 30) * 30;
            v = Math.round(Math.random() * (board.clientWidth - 30) / 30) * 30;
            if (snake.indexOf([h, v]) == -1) {
                break;
            }
        }
        
        board.querySelector("span").style.visibility = "visible";
        board.querySelector("span").style.left = h + "px";
        board.querySelector("span").style.top = v + "px";

        return [h, v];
    }

    // Function que elimina todos los divs dentro del elemento
     
    function removeDivs(element) {
        return [...element.querySelectorAll("div")].map(el => el.remove()).length;
    }

    /*  // pantalla
  
      var pantalla = document.getElementById("board");
      var decha = pantalla.clientWidth;
      var bot = pantalla.clientHeight;
      var izq = decha - decha;
      var top = bot - bot;
  
  
      //comprovacion
  
      function comprovar() {
  
          if (snake[0].style.left >= decha) {
              snake[0].style.left = decha;
          }
          
      }*/


})();


