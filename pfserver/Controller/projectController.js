const projects =require('../Models/projectSchema')

//add project

 exports.addProjects = (req,res)=>{
    console.log("inside add project function")
    const userId= req.payload
    console.log(`${userId}`)
    const {title,languages,github,website,overview,}=req.body
    console.log(`${title},${languages}.${github},${website},${overview}`)
    res.status(200).json("add project request recieved")
}