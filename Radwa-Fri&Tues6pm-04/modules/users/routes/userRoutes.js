const express = require ("express");
const { getallusers, adduser, updateusers, deleteusers, userandid, ageuser, descorder, uniquename } = require("../controller/usercontroller");
const router = express.Router();

router.get("/users",getallusers);        //localhost:4000/users
router.post("/addusers",adduser);        //localhost:4000/addusers
router.post("/updateusers",updateusers); //localhost:4000/updateusers
router.post("/deleteusers",deleteusers); //localhost:4000/deleteusers
router.get("/userVSid",userandid);       //localhost:4000/userVSid
router.get("/userage",ageuser);          //localhost:4000/userage  
router.get("/desc",descorder);           //localhost:4000/desc  
router.get("/uniq",uniquename);          //localhost:4000/uniq  


module.exports=router;