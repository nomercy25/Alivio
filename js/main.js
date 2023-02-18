var playButton = document.getElementById("play-button");
var video = document.getElementById("video");
playButton.addEventListener("click", function(){
    if (video.paused == true ) {
 video.play();
 playButton.innerHTML = "pause";
    } else {
        video.pause();
    playButton.innerHTML = "Play";
    }
});