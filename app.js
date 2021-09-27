const express = require("express");
const db = require("./DB/db");

const app = express();

app.get("/products", function(request, response){
    response.send(db);
});
app.get("/products/:id", function(request, response){
    var item = db.find(x=>x.id == request.params.id);
    response.send(item);
});

app.get("/categories", function(request, response){
    var cat = db.map((item)=>{
        return item.category;
    });
    var retVal = cat.filter((value, index, self)=>{return self.indexOf(value)===index})
    response.send(retVal);
});
app.get("/tags", function(request, response){
    var cat = db.map((item)=>{
        return item.tag;
    });
    var retVal = cat.filter((value, index, self)=>{return self.indexOf(value)===index})
    response.send(retVal);
});
app.listen(3000,"localhost", function(){
    console.log("Server is started on port 3000");
});