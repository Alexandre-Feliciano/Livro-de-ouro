const palavras = [];

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
                const num_random = Math.floor(Math.random() * 100) + 5;
                palavras.push([
                    recados.nome,
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