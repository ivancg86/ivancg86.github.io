var sound;

var listaMusica = 
[
    "../../../media/sonidos/FoodRunner/musica/Alone.mp3",
    "../../../media/sonidos/FoodRunner/musica/BillieJean.mp3",
    "../../../media/sonidos/FoodRunner/musica/BohemianRapsody.mp3",
    "../../../media/sonidos/FoodRunner/musica/ConCalma.mp3",
    "../../../media/sonidos/FoodRunner/musica/DontStopMeNow.mp3",
    "../../../media/sonidos/FoodRunner/musica/GetLucky.mp3",
    "../../../media/sonidos/FoodRunner/musica/ImmigrantSong.mp3",
    "../../../media/sonidos/FoodRunner/musica/StayinAlive.mp3",
    "../../../media/sonidos/FoodRunner/musica/TakeOnMe.mp3",
    "../../../media/sonidos/FoodRunner/musica/Tusa.mp3"
]

function sound(src)
{
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.id = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = 0.05;
    // this.sound.muted = "muted";

    if ( src == "../../../media/sonidos/FoodRunner/itemPickUp.mp3")
    {
        this.sound.volume = 0.1;
    }

    document.body.appendChild(this.sound);
    this.play = function()
    {
        this.sound.play();
    }
    this.stop = function()
    {
        this.sound.pause();
    }
}

