const video = document.getElementById("myVideo");
const btnPlay = document.getElementById("play");
const btnMute = document.getElementById("mute");
const playlist = ['video1', 'video2', 'video3', 'video4', 'video5',];
let number = 0;

const playname =["AGONY1","AGONY","AGONY","AGONY","AGONY"];
const textname = ["NVNOLD","NVHILD","MIXA","LA BOSSE","MYONG"];
const videoTitle = document.querySelector(".video__title");
const videoText = document.querySelector(".video__text");
function play() {
    if (video.paused) {
        video.play();
        btnPlay.innerHTML = "Pause";
    } else {
        video.pause();
        btnPlay.innerHTML = "Play";
    }
}

function mute() {
    if (video.muted) {
        video.muted = false;
        btnMute.innerHTML = "On";
    } else {
        video.muted = true;
        btnMute.innerHTML = "off";
    }
}

function next() {
    if(number < playlist.length - 1) {
        number++;
    } else {
        number = 0;
    }
    video.src = `video/${playlist[number]}.mp4`;
    console.log("DA");
    videoTitle.innerHTML = playname[number];
    videoText.innerHTML = textname[number];
}

function prev() {
    if (number !=0){
        number--;
    } else {
    number = playlist.length - 1;
    }
    video.src = `video/${playlist[number]}.mp4`;
    videoTitle.innerHTML = playname[number];
    videoinnerHTML = textname[number];
}

