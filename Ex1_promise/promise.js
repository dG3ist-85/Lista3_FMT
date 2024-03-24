// const prompt = require("prompt-sync")();
let par_ou_impar = new Promise((resolve, reject) =>{
    let x = prompt("Digite um número: ")
    if (x % 2 == 0){
        resolve("Número válido é PAR");
    } else {
        reject("Error: número informado é ÍMPAR");
    }
});
par_ou_impar
  .then((mensagem) => {
    document.write(mensagem);
    // console.log(mensagem);

  })
  .catch((erro) => {
    document.write(erro);
    // console.log(erro);

  })