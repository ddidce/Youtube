const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");


function handleplayClick() {
    if(videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML =  '<i class="fas fa-play"></i>';
    }
}

function handelVolumeClick() {
    if(videoPlayer.muted){
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"><i>';
    } else {
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"><i>';
    }
}

function  init() {
    playBtn.addEventListener("click", handleplayClick);
    volumeBtn.addEventListener("click", handelVolumeClick);
}

if(videoContainer) {
    init();
}