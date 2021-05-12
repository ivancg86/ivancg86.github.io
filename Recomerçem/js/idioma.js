// $.getJSON('../json/idioma.json', function (json) {
    
//     if (!localStorage.getItem("lang")) {
//         localStorage.setItem("lang", "en");
//     }
//     let def = localStorage.getItem("lang");
//     $('.lang').each(function (index, value) {
//         $(this).text(json[def][$(this).attr('key')]);
//     });

//     $('.translate').click(function () {
//         let lang = $(this).attr('id');
//         localStorage.setItem("lang", lang);
//         $('.lang').each(function (index, value) {
//             $(this).text(json[lang][$(this).attr('key')]);
//         });
//     });

// });

$.getJSON("https://raw.githubusercontent.com/Rufuus06/Rufuus06.github.io/master/Recomerçem/json/idioma.json", function(json){
    //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
    if(!localStorage.getItem("lang")){
      localStorage.setItem("lang", "es");
    }
    var lang = localStorage.getItem("lang");
    var doc = json;
    $('.lang').each(function(index, element){
      $(this).text(doc[lang][$(this).attr('key')]);
    });//Each
  
    $('.translate').click(function(){
      localStorage.setItem("lang", $(this).attr('id')) ;
      var lang = $(this).attr('id');
      var doc = json;
        $('.lang').each(function(index, element){
          $(this).text(doc[lang][$(this).attr('key')]);
        }); //Each
    }); //Funcion click
  });