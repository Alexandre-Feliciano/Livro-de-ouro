  const pares = [];

  fetch("../database/data.json")
  .then(res =>{
    if(!res.ok){
      throw new Error("Erro ao carregar o arquivo JSON");
    }
    return res.json();
  })
  .then(data =>{
    for(let i = 0; i < data.length; i++){
      const recadosjson = {
        nome: data[i].nome,
        mensagem: data[i].recado
      };
      pares.push(recadosjson);
    }
    console.log(pares);
  });