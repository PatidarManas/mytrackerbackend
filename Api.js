import { User } from "./User.js";

export const createuser = async(req,res) =>{
    try{
        
    const {name,username,password} = req.body;
    const newuser = await User.create({
        name,username,password
    })
        res.status(200).json({newuser})
    }catch(error){
        res.status(400).json(error)
    }
}

export const login =async (req,res) =>{
    try{
        const {username,password} = req.body;
        const loginuser = await User.findOne({username:username});
        if(loginuser && loginuser.password==password){
            res.status(200).json(loginuser);
        }
        else{
            
            res.status(300).json("Unauthorized Login");
        }
    }catch(error){
        res.status(400).json(error)
    }
}


export const addincome = async(req,res) =>{
    const date= new Date("<YYYY-mm-dd>")
    try{
        const {amount,title,id} = req.body;
        await User.findByIdAndUpdate(id,{
            $push:{income:[date,amount,title]}
        })
         res.status(200).json("Done");
    }catch(error){
         res.status(400).json(error);
        
    }
}

export const removeincome = async(req,res) =>{
    //to be checked 
    try{
        const {date,amount,title,id} = req.body;
        await User.findByIdAndUpdate(id,{
            $pull:{income:[date,amount,title]}
        })
         res.status(200).json("Done");
    }catch(error){
         res.status(400).json(error);
        
    }
}


export const addexpense = async(req,res) =>{
    const date= new Date("<YYYY-mm-dd>")
    try{
        const {amount,title,id} = req.body;
        await User.findByIdAndUpdate(id,{
            $push:{expense:[date,amount,title]}
        })
         res.status(200).json("Done");
    }catch(error){
         res.status(400).json(error);
        
    }
}
export const removeexpense = async(req,res) =>{
    try{
        const {date,amount,title,id} = req.body;
        await User.findByIdAndUpdate(id,{
            $pull:{expense:[date,amount,title]}
        })
         res.status(200).json("Done");
    }catch(error){
         res.status(400).json(error);
        
    }
}