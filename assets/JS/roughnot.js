const { annotate } = RoughNotation;

const message = document.getElementById("message");

const anotacao = annotate(message, {
    type: 'highlight',
    color: '#3776ff',
    padding: 12,
    animationDuration: 2000,
});


setTimeout(() => {
    anotacao.show();
  }, 2000);