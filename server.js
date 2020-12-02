let express = require("express");
let app = express();
let cor = require("cors");
let bodyparser = require("body-parser");
app.use(cor());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/fetch",require("./fetch/fetch"));
app.listen(8080,() => {
    console.log("server listening the port no.8080");
});

