var express = require("express");
var app = express();
 
app.use(express.static(__dirname+"/"))
app.use("/photos",express.static(__dirname))

app.listen(5050,"localhost",function(error){
    if(error){ 
        console.log("Error : ", error)
    }else{
        console.log("server is now live on localhost:5050")
    }
})