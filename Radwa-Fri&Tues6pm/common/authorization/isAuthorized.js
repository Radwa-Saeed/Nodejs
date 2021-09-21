const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const rbac = require("../../rbac/rbac");


module.exports=(endPoint)=>{
    return async(req,res,next)=>{
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token,'shhhhh');
            const isAllowed = await rbac.can(decode.role,endPoint)
            req.user=decode
            if (isAllowed){
                next()
            }
            else {
                res.status(StatusCodes.UNAUTHORIZED).json({message:'YOU ARE NOT ALLOWED TO DO THAT'})
            }
        }
            
        catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({message:"ERROR",error})
        }
    }}