const { connection } = require("../../../config/config")

const getallusers = (req,res)=>{
    connection.execute(`SELECT * FROM users`,(err,data)=>{
        if (err){res.json({message:"error",err});}
        else{res.json({message:"success",data});}
    });
}
// >>>>>>>>> Req 1 <<<<<<<<<< find user by id and name
const finduser = (req,res)=>{
    let {id , name }=req.body;
    connection.execute(`SELECT * FROM users WHERE id = '${id}' AND name = '${name}'`,(err,data)=>{
        if ( err){res.json({message:"error",err})}
        else{res.json({message:"success", data})}
    });
}
// >>>>>>>>> Req 2 <<<<<<<<<< get all users with age more than 10
const userage = (req,res)=>{
    connection.execute(`SELECT * FROM users WHERE age > 10`,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
}
// >>>>>>>>> Req 3 <<<<<<<<<< get all users with id ordered descenting
const userorder = (req,res)=>{
    connection.execute(`SELECT * FROM users ORDER BY id DESC`,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
}
// >>>>>>>>> Req 4 <<<<<<<<<< get all users not repeated name

const useruniq = (req,res)=>{
    connection.execute(`SELECT DISTINCT name FROM users `,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
}

// >>>>>>>>> Req 5 <<<<<<<<<< update user by id

const userupdate = (req,res)=>{
    let {id,name,email,password,age}=req.body;
    connection.execute(`UPDATE users SET name ='${name}',email='${email}',password='${password}',age='${age}' WHERE id='${id}'`,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
}
// >>>>>>>>> Req 6 <<<<<<<<<< delete user by id

const userdelete = (req,res)=>{
    const {id}=req.body;
    connection.execute(`DELETE FROM users WHERE id = '${id}'`,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
}
// >>>>>>>>> Req 7 <<<<<<<<<< all users having specific letter in their name

const userwith= (req,res)=>{
    const {contained}=req.body;
    connection.execute(`SELECT * FROM users WHERE name LIKE '${contained}%'`,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
}


module.exports={
    getallusers,
    finduser,
    userage,
    userorder,
    useruniq,
    userdelete,
    userupdate,
    userwith
}