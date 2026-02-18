var audios = [
    {
        title: "مرحب شهر الصوم",
        audio: "audio/Abdelaziz_Mahmoud_Merhb_Shahr_Elsoum.mp3",
        image: "images/Merhb_Shahr_Elsoum.jpg",
        author: "عبدالعزيز محمود"
    },
    {
        title: "افرحوا يا بنات",
        audio: "audio/Elsolasy_Elmareh_Afraho_Ya_Banaet.mp3",
        image: "images/Afraho_Ya_Banaet.jpg",
        author: "الثلاثي المرح"
    },
    {
        title: "اهو جه يا ولاد",
        audio: "audio/Elsolasy_Elmareh_Aho_Ga_Ya_Willad.mp3",
        image: "images/Aho_Ga_Ya_Willad.jpg",
        author: "الثلاثي المرح"
    },
    {
        title: "رمضان جانا",
        audio: "audio/Mohamed_Abdelmetlb_Ramdan_Gana.mp3",
        image: "images/Ramdan_Gana.jpg",
        author: "محمد عبد المطلب"
    }, {
        title: "هاتوا الفوانيس",
        audio: "audio/Mohamed_Fawzy_Hatoo_El_Fawnes.mp3",
        image: "images/Hatoo_El_Fawnes.jpg",
        author: "محمد فوزي"
    },
    {
        title: "والله بعودة",
        audio: "audio/Mohamed_Qandel_Wallah_be3oda.mp3",
        image: "images/ramdan.jpg",
        author: "محمد قنديل"
    },
    {
        title: "يا بركة رمضان",
        audio: "audio/Mohamed_roshdy_Ya_Barket_Ramdan.mp3",
        image: "images/ramdan2.jpg",
        author: "محمد رشدي"
    },
    {
        title: "حالو يا حالو",
        audio: "audio/Sabah_Hallo_Ya_Hallo.mp3",
        image: "images/fwanes.jpg",
        author: "صباح"
    },
    {
        title: "والله لسه بدري",
        audio: "audio/Sherefa_Fadel_Wallah_Lessa_Badry.mp3",
        image: "images/ramdan3.webp",
        author: "شريفة فاضل"
    },
]

var durationValue = document.getElementById("durationValue");
var durationRange = document.getElementById("durationRange");
var durationValue = document.getElementById("durationValue");
var currentTime = document.getElementById("currentTime");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var audio = document.querySelector("audio");
var imageSong = document.getElementById("image-song");
var namee = document.getElementById("name");
var nameSong = document.getElementsByClassName("name-song");
var volumeRange = document.getElementById("volumeRange");
var mute = document.getElementById("mute");
var list = document.getElementsByClassName("list");
let playList = document.querySelector(".playList");
var idx = 0

durationRange.addEventListener("input", function () {
    audio.currentTime = durationRange.value;
});

play.addEventListener("click", function () {
    audio.play();
})

pause.addEventListener("click", function () {
    audio.pause();
})

stop.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.pause();
    durationRange.value = 0;
})

function loadNewSong(idx) {
    audio.src = audios[idx].audio;
    imageSong.src = audios[idx].image;
    namee.innerHTML = audios[idx].title;
}

previous.addEventListener("click", function () {
    idx--;
    loadNewSong(Math.abs(idx % audios.length));
    audio.play();
})

next.addEventListener("click", function () {
    idx++;
    loadNewSong(Math.abs(idx % audios.length));
    audio.play();
})

volumeRange.addEventListener("input", function () {
    audio.volume = volumeRange.value;
})

audio.addEventListener("loadedmetadata", function () {
    durationRange.max = audio.duration;
    durationRange.step = 1;
    var minutes = Math.floor(audio.duration / 60);
    var seconds = Math.floor(audio.duration % 60);
    durationValue.innerHTML = (minutes < 10 ? ('0' + minutes) : minutes) + ":" + (seconds < 10 ? ('0' + seconds) : seconds);
})

audio.addEventListener("timeupdate", function () {
    var minutes = Math.floor(audio.currentTime / 60);
    var seconds = Math.floor(audio.currentTime % 60);
    currentTime.innerHTML = (minutes < 10 ? ('0' + minutes) : minutes) + ":" + (seconds < 10 ? ('0' + seconds) : seconds);
    durationRange.value = audio.currentTime;
})

mute.addEventListener("click", function () {
    audio.muted = !audio.muted
    if (audio.muted) {
        mute.className = "fa-solid fa-volume-mute"
        volumeRange.value = 0
    } else {
        mute.className = "fa-solid fa-volume-high"
        volumeRange.value = 1
    }
})

playList.addEventListener("click", function (e) {
    if (e.target.closest(".list")) {
        let button = e.target.closest(".list");
        console.log("ID:", button.id);
        console.log("Text:", button.innerText);
        idx = button.id;
        loadNewSong(Math.abs(idx % audios.length));
        audio.play();
    }
});