const card = document.getElementById("card");
const audio = document.getElementById("music");
const pauseButton = document.getElementById("pause");

card.addEventListener("click", flipCard);

function flipCard() {
  card.classList.toggle("flipCard");
  document.querySelector(".back").classList.toggle("visible");
  playAudio();
  pauseButton.textContent = "Pause audio";
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function toggleAudio() {
  if (audio.paused) {
    playAudio();
    pauseButton.textContent = "Pause audio";
  } else {
    pauseAudio();
    pauseButton.textContent = "Play audio";
  }
}
