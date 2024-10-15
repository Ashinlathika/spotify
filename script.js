// List of songs
const songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    audioSrc: "music/song1.mp3",
    albumCover: "images/album1.jpg"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    audioSrc: "music/song2.mp3",
    albumCover: "images/album2.jpg"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    audioSrc: "music/song3.mp3",
    albumCover: "images/album3.jpg"
  }
];

let currentSongIndex = 0;
let isPlaying = false;

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const albumImage = document.getElementById('albumImage');

// Load song details
function loadSong(songIndex) {
  const song = songs[songIndex];
  trackTitle.textContent = song.title;
  trackArtist.textContent = song.artist;
  albumImage.src = song.albumCover;
  audio.src = song.audioSrc;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playPauseButton.textContent = '⏸️';
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
}

// Toggle play/pause
playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Previous song
prevButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

// Next song
nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

// Load initial song
loadSong(currentSongIndex);
