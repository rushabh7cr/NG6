let express             = require("express"),
    bodyParser          = require("body-parser"),
    app                 = express();
    fs                  = require("fs");
    request             = require("request")

app.use(bodyParser.urlencoded({ extended: false }))    
app.use(bodyParser.json());

    function splitbywords(data){
        var words = data.split(/\s+/);
        return words;  
    }

    function isInArray(arr, val) {
        return arr.indexOf(val) > -1;
    }

    function is_in_array(arr,val){
        for (var i = 0 ; i<=arr.length;i++)
        {
            if(arr[i]===val){
                return i 
            }
        }
        return -1;
    }

    function count(words,num){
        
        var map = [];
        var count = new Array();
        var j = 0;
        for (var k=0;k<words.length;k++){

            var i = is_in_array(map,words[k]);
            //console.log(i);
                        if(i === -1){
                map[j] = words[k];
                count[j] = 1;
                j++;
            }
            else{
                count[i]+=1;
            }

        }
        var obj = {};
        for(var k=0 ;k<map.length;k++){

            obj[map[k]] = count[k];

        }
        
        keysSorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
   // console.log(keysSorted[1]);
      var ans = {};
        for (var n = 0;n<num;n++ ){
            ans[keysSorted[n]] = obj[keysSorted[n]]
        }
        
        return ans;

    }


app.post("/api",function(req,res){
    let num =req.body.num;
  
            request.get("http://terriblytinytales.com/test.txt",function(err,response,body){
                if(!err && response.statusCode === 200){
                    var words = splitbywords(body.toLowerCase().replace(/[^/a-z\s]/g,""));
                    var map   = count(words,num);
                    res.send(map);
                }

            });
      /*  fs.readFile('../R.txt','utf-8',function(err,data){
            if(err){
                console.log(err);
                }
            var words = splitbywords(data.toLowerCase().replace(/[^/a-z\s]/g,""));
            //count(words);
            var map   = count(words,num);
        
            res.send(map);
        //console.log(map)
        
        });
   */
   
});


app.get("/test",function(req,res){
    res.json({time:new Date()})
})

app.listen(3000,function(){
    console.log("server has begun");
})