// Carrossel das imagens
const swiper = new Swiper('#image-carousel', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 0.5,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  speed: 900,
  grabCursor: false,
});

// Carrossel dos recados
document.addEventListener("messagecomandos", () => {

  const { annotate } = RoughNotation;
  const pares = [];

  fetch("../database/data.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro ao carregar o arquivo: ");
      }
      return res.json();
    })
    .then(dados => {
      dados.forEach(
        recados => {
          pares.push({
            nome: recados.nome,
            mensagem: recados.recado
          });
        });
      
  const recados = document.getElementById("swiper-wrapper");
  if (recados) {
    pares.forEach((recado, i) => {
      const div = document.createElement("div");
      div.className = "swiper-slide";
      div.innerHTML = `<div class="message" id="message-${i}"> 
    <h2 id="name">${recado.nome}</h2> 
    <p id="p-message">${recado.mensagem}</p>
    </div>`;
      recados.appendChild(div);
    });

    const CarrosselRecados = new Swiper("#recado-swiper", {
      loop: true,
      autoplay: {
        delay: 23000,
        disableOnInteraction: false,
      },
      speed: 1000,
      grabCursor: true,
      effect: 'slide'
    });

    function coraleatoria() {
      const cores = ["#3776ff", "#354882", "#0e2979"];
      return cores[Math.floor(Math.random() * cores.length)]
    }

    setTimeout(() => {
      const iniciomsg = document.getElementById("message-0");
      if (iniciomsg && !iniciomsg.dataset.animado) {
        const recadoefeito = annotate(iniciomsg, {
          type: 'highlight',
          color: coraleatoria(),
          padding: 12,
          animationDuration: 800,
        });
        recadoefeito.show();
        iniciomsg.dataset.animado = "True";
      }
    }, 3);

    CarrosselRecados.on('slideChangeTransitionEnd', () => {
      const todasmsg = CarrosselRecados.realIndex;
      const proximamsg = document.getElementById(`message-${todasmsg}`);
      if (proximamsg && !proximamsg.dataset.animado) {
        const recadoefeito = annotate(proximamsg, {
          type: 'highlight',
          color: coraleatoria(),
          padding: 12,
          animationDuration: 800,
        });
        recadoefeito.show();
        proximamsg.dataset.animado = "True";
      }
    });
  }
})

});