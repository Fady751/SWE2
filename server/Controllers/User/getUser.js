const GetUser = async(req , res )=>{
    return res.status(200).json({ user : req.user});
}

module.exports  = GetUser ;    