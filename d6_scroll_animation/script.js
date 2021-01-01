const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  let windowBottom = window.innerHeight;

  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;

    if (boxTop < windowBottom) {
      box.classList.add("show");
    } else box.classList.remove("show");
  });
}
