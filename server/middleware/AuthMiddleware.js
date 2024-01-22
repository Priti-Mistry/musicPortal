const {verify} = require('jsonwebtoken')
const ValidateToken=(req,res,next)=>{
    const accessToken=req.header("accessToken")
    if(!accessToken) return res.json({error: "user not logged in"})

    try {
        const validToken=verify(accessToken,"jwtToken")
        req.user=validToken
        if(validToken){
            return next()
        }
    } catch (error) {
        return res.json({error:error})
    }
} 

module.exports ={ValidateToken}