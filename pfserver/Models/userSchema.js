const mongoose = require('mongoose')
const { default: isEmail } = require('validator/lib/isEmail')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        min: [3, 'Must be at least 3, got {VALUE}'],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator,isEmail(value)){
                throw new Error ("Invalide Email")
            }
        }
    },
    password:{ 
        type:String,
        required:true,
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    profile:{
        type:String
    }
})
const users =  mongoose.model('users',userSchema);
module.exports = users;
// Path: pfserver/Router/router.js