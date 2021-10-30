const express = require('express')
const app = express()
const port = 3000
const path=require("path")
let publicPath= path.resolve(__dirname,"public")
app.use(express.static(publicPath))
app.get('/random/:min/:max', sendrandom)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
function sendrandom(req, res) {
    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json( {error : "Bad Request."});
        return;
    }
    let result = Math.round( (Math.random() * (max - min)) + min);
    res.json( { result : result });
}

// function getWeather() {
//     console.log("getWeather called")
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=e7f17a2510bd22a016aa60b08254c474')


    

//     .then(response => response.json())
//        .then(data => console.log(data))
//        // .then(data => {
//        //    var nameVal = data.name;
//        //    var tempVal = data.main.temp;
//        //    this.random = data.name
//        //    this.temp = data.main.temp;

          

//        //})
       
//           // .then(data => {
//           //    var nameVal = data['city'];
//           //    var tempVal = data['main']['temp']

//           .catch(err => alert('Wrong City Name'))
//            }