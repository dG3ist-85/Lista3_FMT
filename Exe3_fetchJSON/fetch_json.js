fetch("dados.json")
  .then((responseObj) => {return responseObj.json()})
//   .then((responseDados) => {console.log(responseDados)})
  .then((dados) => { document.getElementById('json-content').textContent = JSON.stringify(dados, null, 2);})
  .catch((error) => {console.error('Erro ao obter o arquivo JSON:', error);});
