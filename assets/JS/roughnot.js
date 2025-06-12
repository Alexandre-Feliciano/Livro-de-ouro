const { annotate } = RoughNotation;

document.addEventListener("messagecomandos", () => {
    const message = document.getElementById("message");

    const anotacao = annotate(message, {
        type: 'highlight',
        color: '#3776ff',
        padding: 12,
        animationDuration: 2000,
    });
    
    anotacao.show();
});