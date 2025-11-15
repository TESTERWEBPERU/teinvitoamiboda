const botonPlay = document.getElementById('play-music');
const audio = document.getElementById('background-music');
let reproduciendo = false;
botonPlay.addEventListener('click', () => {
  if (!reproduciendo) {
    audio.play();
    botonPlay.classList.add('reproduciendo');
    reproduciendo = true;
  } else {
    audio.pause();
    botonPlay.classList.remove('reproduciendo');
    reproduciendo = false;
  }
});
