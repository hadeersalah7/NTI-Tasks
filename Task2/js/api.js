function readApi(apiLink, callBack) {
    fetch(apiLink)
    .then((i) => {
        i.json()
        .then((x) => {
            callBack(x, false)
        })
        .catch ((err)=> {
            callBack(false, err.message)
        })
    })
    .catch((e) => callBack(false, e.message))
}



readApi("https://newsapi.org/v2/top-headlines?country=eg&apiKey=34fc2636dcb54eb2ac6a6fb6ce630b4f",
(res, err) => {
   if(err) console.log(err);
   else {
       res.forEach((element) =>{
       document.querySelector(".row").innerHTML += `<h4>${element.source}</h4>
       <img src= "${element.urlToImage}"> <h5>${element.title}</h5>
       <h6>${element.description}</h6>`
   })
}
})