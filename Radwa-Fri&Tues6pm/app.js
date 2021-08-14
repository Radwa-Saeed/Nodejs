const express = require("express");
const app = express();
const router = require("./modules/users/routes/userrouts");

app.use(express.json());
app.use(router);

app.listen(4000,()=>{
    console.log("server is running on 4000")
})