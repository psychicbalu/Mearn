
const user = require('../Models/userSchema');
const jwt = require('jsonwebtoken');


//register
exports.register = async (req, res) => {
    console.log("inside register controller function");
    const { username, email, password } = req.body;
    try {
        const existinguser = await user.findOne({ email: email });
        if (existinguser) {
            res.status(400).json('Email already exists. please login');
        } else {
            const newuser = new user({
                username, email, password, github: "", linkedin: "", profile: ""
            })
            await newuser.save();
            res.status(200).json(newuser)
        }
    } 
    catch (err) {
         res.status(401).json(`Registration API failed , error, ${err}`)
    }  
}

//login

exports.login= async (req,res)=>{
    console.log("inside the login function")
    console.log(req.body);
    const {email,password}=req.body

    try{
        const existingUser = await user.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},"secret123")
            res.status(200).json({
                existingUser,token

            })
        }else{
            res.status(401).json("incorrect password/email")
        }

    }
    catch(err){
        res.status(401).json(`login ap failed error:${err}`)

    }
}

//export router to use in index.js