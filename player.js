const songs = [
  { title: "Song 1", file: "audio/song1.mp3" },
  { title: "Song 2", file: "audio/song2.mp3" }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.onclick = () => playSong(index);
  playlist.appendChild(li);
});

function playSong(index) {
  currentSong = index;
  audio.src = songs[currentSong].file;
  audio.play();
}

function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  playSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  playSong(currentSong);
}

audio.addEventListener("ended", nextSong);

