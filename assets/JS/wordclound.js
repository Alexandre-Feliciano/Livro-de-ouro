const palavras = [
    ['Luis', 50],
    ['Lucilia', 35],
    ['Juliana', 25],
    ['Marivaldo', 10],
    ['Bruna', 15],
    ['Luana', 17],
    ['Ricardo', 35],
    ['Arivaldo', 34],
    ['Saulo', 32]
];

WordCloud(document.getElementById('word-cloud'), {
    list: palavras,
    gridSize: 1,
    weightFactor: function(peso) {
        return Math.sqrt(peso) * 4;
      },
    fontFamily: 'Orbitron',
    color: 'random-dark',
    rotateRatio: 0.2,
    backgroundColor: '#f3eeee',
    drawOutOfBound: false,
    shuffle: false,      
    clearCanvas: true
});