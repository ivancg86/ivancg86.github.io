document.getElementById('switcher').switchButton();
var block = document.getElementById('block');
var block2 = document.getElementById('block2');
var locker = document.getElementById('locker');
var locker2 = document.getElementById('locker2');
var game1 = document.getElementById('juego2');
var game2 = document.getElementById('juego3');
var link1 = document.getElementById('juego2').href;
var link2 = document.getElementById('juego3').href;

$(function() {
    $('#switcher').change(function() {
      
        if ( block.style.visibility == "hidden" )
        {
            block.style.visibility = "visible";        
            locker.style.visibility = "visible";
            block2.style.visibility = "visible";        
            locker2.style.visibility = "visible";
            game1.classList.add('disabled');
            game2.classList.add('disabled');

            game1.disabled=true;
            game2.disabled=true;
            game1.removeAttribute('href');
            game2.removeAttribute('href');
        }
        else
        {
            block.style.visibility = "hidden";        
            locker.style.visibility = "hidden";
            block2.style.visibility = "hidden";        
            locker2.style.visibility = "hidden";
            game1.classList.remove('disabled');
            game2.classList.remove('disabled');

            game1.setAttribute("href", link1);
            game2.setAttribute("href", link2);
        }

    })
  })