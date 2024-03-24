// primeira função
function getUserInfo(){
    
    return new Promise((resolve, reject) => {
        let user;
        setTimeout(() => {
            user = {
                nome: "Douglas",
                idade: 23,
                email: "gamervoid19@gmail.com",
            };
            // if (user != undefined){
            //     resolve(user);
            // } else {
            //     reject("error: user not found.");
            // }
            resolve(user)
        }, 2000)
})
}
// segunda função
 async function playGetUser(){
    let retorno = await getUserInfo();
    console.log(retorno);
}
playGetUser();

// terceira função
// function playGetUser(){
//     let retorno = getUserInfo();
//     retorno
//     .then((object) => {console.log(object)})
//     .catch((erro) => {console.log(erro)})
// }
// playGetUser();