><h2>Initializing Project

1- Open terminal in the folder of the project <br/>
2- to open vscode write 
```
code .
```
3- creata js file project <br/>
4- open terminal and write the following to initialize :
* package.json
* node_modules folder 

of your project which will contain all the data about 3rd party modules you inistalled and imported and their versions  
```
npm init 
```
* or the following to initialize with the default values 
```
npm init -y
```
5- the install any package of npm write the following in the terminal 
* to install it locally (only for the development purpose )
```
npm i --save-d package_name 
```
then you can see it added in the package.json file under the develpment depandency key as follows
```
 "devDependencies": {
    "nodemon": "^2.0.12"
  }
```  
* to install it globally (it will be always required to launch the project which called deployement)
``` 
npm i --save package_name
```
or 
```
npm i package_name
```
then you can see it added in the package.json file under the deployment depandency key as follows
```
"dependencies": {
    "express": "^4.17.1"
  }
```
## Note
<h4>when you are going to give this project for the tester you won't give him the modules folders as its size will be very large so he will be able to install the required modules by reading their data from the json file</h4>

6- after installing the nodmon module which is responsiple of the auto reload of the server after changing the js file we can run the server by writing the following in the terminal
``` 
nodemon app.js
```
instead of 
```
node app.js
```
7- we also can go to the json file <br/>
under the scripts key we can add some default lines to run our app
```
"scripts": {
    "start": "nodemon app.js",
    "loza":"nodemon anotherapp.js"
  }
```
start will be our default so to run write in the terminal
```
npm start
```
to run the other app specified by loza write
``` 
npm run loza
```
***
><h2>Organizing & Routing

Create the following folders beside app.js file<br/>
*  modules
   * posts
   * users
     * routes
       * userRoutes.js "For only APIs of the users"
     * controller
       * usercontrol.js "For the res of each route"  
     * db
       * userdb.json  

     
     
1-in userRoutes.js
```
const express = require("express");
const router = express.Router();
//some methode
router.get("/",(req,res)=>{
  ...
})
module.exports = router;

```
2-in app.js
```
const express = require("express");
const app = express();
const userroutes = require("./modules/users/routs/userRoutes");

app.use(express.json());

// to run the imported modules 
app.use(userroutes)

app.listen(4000,()=>{
    console.log("server is running");
})
```

