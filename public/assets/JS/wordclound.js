const palavras = [];

fetch("https://api.jsonbin.io/v3/b/68f28a99ae596e708f194a4d/latest", {
    headers: {
        "X-Master-Key": "$2a$10$Efg4UJVCcFdE/rNv4UHtxuJ.oqqkJvnNGveWSKd0rVaJBTldI87Sq"
    }
})
    .then(res => res.json())
    .then(dados => {
        dados.record.recados.forEach(
            recado => {
                const num_random = Math.floor(Math.random() * 100) + 5;
                palavras.push([
                    recado.nome,
                    num_random
                ]);
            });

        WordCloud(document.getElementById('word-cloud'), {
            list: palavras,
            gridSize: 1,
            weightFactor: function (peso) {
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

    });