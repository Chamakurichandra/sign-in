let mongodb = require("mongodb");
let getInfo = mongodb.MongoClient;
let fetch = require("express").Router().get("/",(req,res)=>{
    getInfo.connect("mongodb://localhost:27017/login",(err,db)=>{
        if(err) throw err;
        else{

            db.collection("details").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});
module.exports = fetch;