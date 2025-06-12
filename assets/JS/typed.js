const pares = [
  { nome: "Luis", mensagem: "Pegadinha do malandro" },
  { nome: "Michael Jackson", mensagem: "Hello, how are you?" },
  { nome: "Teste", mensagem: "corrupti optio fugiat voluptates autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam modi sit nesciunt sint illum atque iusto vero recusandae delectus laborum, e" }
];

const titlememory2 = ["Memórias", "Momentos em cada clique", "Memórias"];

const recados = pares.map(par => par.mensagem);

const NomeApoiador = document.querySelector(".typed-name");
const RecadoApoiador = document.querySelector(".typed-message");

const title_memory = document.querySelector(".title-memoria");

const typed = new Typed(RecadoApoiador, {
  strings: recados,
  startDelay: 3000,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 90000,
  showCursor: false,
  loop: true,
  preStringTyped: function (arrayPos) {
    NomeApoiador.textContent = pares[arrayPos].nome;
  }
});

typed.stop();

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

document.addEventListener("messagecomandos", () => {
  typed.start();
});
