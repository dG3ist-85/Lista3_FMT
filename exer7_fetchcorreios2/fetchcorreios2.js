let cep = prompt("Digite seu CEP:");

fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
  .then((retornoFetch) => {
    return retornoFetch.json();
  })
  .then((retornoApi) => {
    // “logradouro, complemento - bairro - localidade/uf”

    alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - 
  ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

    let resposta = prompt("Os dados estão corretos?");

    if (resposta.toLowerCase() == "sim") {
      localStorage.setItem("endereco", JSON.stringify(retornoApi));
    }
  });
