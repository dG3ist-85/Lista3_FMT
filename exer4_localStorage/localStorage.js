// const prompt = require("prompt-sync")();

data1 = prompt("Qual seu nome: ");
data2 = prompt("Qual sua idade: ");
data3 = prompt("Qual seu email: ");

var user = {nome: data1 , idade: data2, email: data3};
// console.log(typeof user)
localStorage.setItem('user', JSON.stringify(user));

