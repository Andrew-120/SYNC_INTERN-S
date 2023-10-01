const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const duration = document.getElementById('duration');
const songImage = document.getElementById('song-image');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');
const volumeControl = document.getElementById('volume');
const countdown = document.getElementById('countdown');

let isShuffle = false;
let isRepeat = false;

const playlist = [
    { title: 'Hormone ElSaada', artist: 'Tamer Hosny', duration: '3:13', source: 'Hormone ElSaada.mp3', image: 'Tamer_Hosny.jpg'},
    { title: 'Tattoo', artist: 'Loren', duration: '3:02', source: 'Tattoo.mp3', image: 'Loren.jpg'},
    { title: 'Control', artist: 'Zoe Wees', duration: '3:52', source: 'Control.mp3', image: 'Zoe_Wees.jpg'},
    { title: 'Shokran Min Hina Le Bokra', artist: 'Amr Diab', duration: '2:56', source: 'Shokran Min Hina Le Bokra.mp3', image: 'Amr_Diab.jpg' }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = playlist[index];
    audio.src = song.source;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    duration.textContent = song.duration;
    songImage.src = song.image;
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    if (isShuffle) {
        currentSongIndex = getRandomIndex();
    } else {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
    }
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    if (isShuffle) {
        currentSongIndex = getRandomIndex();
    } else {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    }
    loadSong(currentSongIndex);
    playSong();
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    if (isShuffle) {
        shuffleButton.classList.add('active');
    } else {
        shuffleButton.classList.remove('active');
    }
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    if (isRepeat) {
        repeatButton.classList.add('active');
    } else {
        repeatButton.classList.remove('active');
    }
}

function setVolume() {
    const volume = volumeControl.value;
    audio.volume = volume;
}

function getRandomIndex() {
    const max = playlist.length - 1;
    return Math.floor(Math.random() * (max + 1));
}

function updateCountdown() {
    const remainingTime = audio.duration - audio.currentTime;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

audio.addEventListener('timeupdate', updateCountdown);

loadSong(currentSongIndex);

shuffleButton.addEventListener('click', toggleShuffle);
repeatButton.addEventListener('click', toggleRepeat);
volumeControl.addEventListener('input', setVolume);
playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
