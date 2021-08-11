// TO RUN THIS APP WRITE >>> npm start <<< IN THE TERMINAL
const express = require("express");
const app = express();
const userrouter = require("./modules/users/routes/userRoutes");
//middlewar
app.use(express.json());


app.use(userrouter);
app.listen(4000,()=>{
    console.log("server is running on port 4000")
});
