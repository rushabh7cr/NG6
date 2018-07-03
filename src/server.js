let express             = require("express"),
    bodyParser          = require("body-parser"),
    app                 = express();


app.use(bodyParser.urlencoded({ extended: false }))    
app.use(bodyParser.json());

app.post("/api",function(req,res){
    let name =req.body.name;
    console.log(req);
    
    console.log(name);
    res.send({name}); 
})
app.get("/test",function(req,res){
    res.json({time:new Date()})
})
app.listen(3000,function(){
    console.log("server has begun");
})