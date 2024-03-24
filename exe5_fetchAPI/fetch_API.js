let optionalOptions = {
    method: 'GET', 
    headers:{ 'x-api-key':"live_NLyAzbkU3FUX8o54GCcAX6HREBYfvqXJAPco478lRER7Ke7cWFzIePrpa8Pat6hH"}
};

fetch('https://api.thecatapi.com/v1/images/search?limit=10',optionalOptions)
.then((respostaObj) => {
    return respostaObj.json();
})
// .then((respostaApi) => {
//     console.log(respostaApi)
// })
.then((data) => {
    data.forEach((cat) => {
        const imageUrl = cat.url;
        document.write(`<img src='${imageUrl}' width='200'/><br/>`);
    });
}) 
.catch((error) => {
    console.log(error);
})