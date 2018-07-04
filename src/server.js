let express             = require("express"),
    bodyParser          = require("body-parser"),
    app                 = express();
    fs                  = require("fs");

app.use(bodyParser.urlencoded({ extended: false }))    
app.use(bodyParser.json());

app.post("/api",function(req,res){
    let name =req.body.name;
   // console.log(req);
  // res.send({name}); 
    function splitbywords(data){
        var words = data.split(/\s+/);
        return words;  
    }

    function wordmap(words){
        var map={}
        words.forEach(function(key){
            if(map.hasOwnProperty(key)){
                words[key]++;
            }else{
                words[key]=1;
            }
        });
        return words;
    }


    fs.readFile('../R.txt','utf-8',function(err,data){
        if(err){
            console.log(err);
            }
        var words = splitbywords(data);
        var map   = wordmap(words);
       
        res.send(words);
        console.log(map)
       
    });
   // console.log(name);
   
});


app.get("/test",function(req,res){
    res.json({time:new Date()})
})
app.listen(3000,function(){
    console.log("server has begun");
})