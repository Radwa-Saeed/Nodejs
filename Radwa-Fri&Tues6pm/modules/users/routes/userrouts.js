const { getallusers, finduser, userage, userorder, useruniq, userupdate, userdelete, userwith } = require("../controller/controller");

const router=require("express").Router();

router.get("/users",getallusers);
router.post("/findusers",finduser);     //localhost:4000/findusers
router.get("/userage",userage);         //localhost:4000/userage
router.get("/userorder",userorder);     //localhost:4000/userorder
router.get("/useruniq",useruniq);       //localhost:4000/useruniq
router.post("/userupdate",userupdate);  //localhost:4000/userupdate
router.post("/userdelete",userdelete);  //localhost:4000/userdelete
router.get("/userwith",userwith);       //localhost:4000/userwith

module.exports=router;