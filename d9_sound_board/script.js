var buttons = document.querySelectorAll(".box");

var audios = [];

buttons.forEach((button) => {
  audios.push(new Audio(`sounds/${button.id}.mp3`));
});
function buzz() {
  buttons.forEach((button) => {
    button.addEventListener("click", playSound);
  });
}
function playSound(e) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id != e.target.id) {
      audios[i].pause();
      audios[i].currentTime = 0;
    } else audios[i].play();
  }
}

buzz();
