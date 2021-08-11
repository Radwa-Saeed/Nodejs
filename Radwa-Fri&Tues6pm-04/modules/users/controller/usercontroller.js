const  {connection}  = require("../../../config/config");

const getallusers = (req,res)=>{
    connection.execute(`SELECT * FROM users`,(err,data)=>{
        if (err){res.json({message:"error",err});}
        else{res.json({message:"success",data});}
    });
};

const adduser = (req,res)=>{
    let {name , email, password , age}=req.body;
    connection.execute(`INSERT INTO users(name, email, password,age) VALUES ('${name}','${email}','${password}','${age}')`,(err,data)=>{
        if(err){res.json({message:"error",err});}
        else{res.json({message:"added successfully"});}
    });
};

const updateusers = (req,res)=>{
    let {id,name,email,password,age}=req.body;
    connection.execute(`UPDATE users SET name ='${name}',email='${email}',password='${password}',age='${age}' WHERE id='${id}'`,(err,data)=>{
        if (err){res.json({message:"error",err})}
        else{res.json({message:"updated successfully"})}
    });
};
const deleteusers = (req,res)=>{
    connection.execute(`DELETE FROM users WHERE id = ${req.body.id}`,(err,data)=>{
        if(err){res.json({message:"error",err});}
        else{res.json({message:"deleted successfully"});}
    });
};
//<<<<<< Requierment  1 >>>>>>>> get id and user
const userandid=(req,res)=>{
    connection.execute(`SELECT id, name FROM users`,(err,data)=>{
        if(err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
};
//<<<<<< Requierment  2 >>>>>>>>> get users where age more than 10
const ageuser =(req,res)=>{
    connection.execute(`SELECT * FROM users WHERE age > 10 `,(err,data)=>{
        if(err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
};
//<<<<<< Requierment  3 >>>>>>>>> get users desc
const descorder =(req,res)=>{
    connection.execute(`SELECT * FROM users ORDER BY id DESC`,(err,data)=>{
        if(err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
};
//<<<<<< Requierment  4 >>>>>>>>> users with unique names
const uniquename =(req,res)=>{
    connection.execute(`SELECT DISTINCT (name) FROM users`,(err,data)=>{
        if(err){res.json({message:"error",err})}
        else{res.json({message:"success",data})}
    });
};



module.exports={
    getallusers,
    adduser,
    updateusers,
    deleteusers,
    userandid,
    ageuser,
    descorder,
    uniquename

};
