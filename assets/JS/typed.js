const pares = [
    { nome: "Luis", mensagem: "Pegadinha do malandro" },
    { nome: "Michael Jackson", mensagem: "Hello, how are you?" },
    { nome: "Teste", mensagem: "corrupti optio fugiat voluptates autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam modi sit nesciunt sint illum atque iusto vero recusandae delectus laborum, e" }
  ];

  const recados = pares.map(par => par.mensagem);

  const NomeApoiador = document.querySelector(".typed-name");
  const RecadoApoiador = document.querySelector(".typed-message");

  const typed = new Typed(RecadoApoiador, {
    strings: recados,
    startDelay: 4000,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 90000,
    showCursor: false,
    loop: true,
    preStringTyped: function (arrayPos) {
    NomeApoiador.textContent = pares[arrayPos].nome;
    }
  });