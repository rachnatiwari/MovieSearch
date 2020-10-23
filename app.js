const express = require('express')
const app = express()
const port = 3000
app.set("view engine" , "ejs");
const request = require("request");

app.get('/', (req, res) => res.send("Please visit 'localhost:3000/search' to search for your favourite movie"));
app.listen(port, () => console.log(`Server running at port 3000`));

app.get("/search",function(req,res){
    res.render("searchMovie");
});

app.get("/result",function(req,res){
    var movie = req.query.MS;
    url = "http://www.omdbapi.com/?apikey=thewdb&s=" + movie;
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data  = JSON.parse(body);
            res.render("results",{data:data,movie:movie});
        }
    })
})