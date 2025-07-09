const titlememory2 = ["Memórias", "Momentos em cada clique", "Memórias"];

const title_memory = document.querySelector(".title-memoria");

const typed2 = new Typed(title_memory, {
  strings: titlememory2,
  startDelay: 1000,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  showCursor: false,
  loop: false,
});

typed2.stop();

document.addEventListener("titlecomandos", () => {
  typed2.start();
});

