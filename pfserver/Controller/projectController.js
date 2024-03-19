const projects =require('../Models/projectSchema')

//add projects
 exports.addProjects =async (req,res)=>{
    console.log("inside add project function")
    const userId=req.payload
    const projectImage=req.file.filename
    const {title,languages,github,website,overview}=req.body
    console.log(` ${title} ,${languages} ,${github} ,${website} ,${overview} ,${projectImage},${userId}`)
   

    try {

        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json('project already exists ...upload another one')
        }
        else{
            const newProject=new projects({
    
        title,languages,github,website,overview,projectImage,userId  
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
        
    } catch (error) {
        res.status(401).json(`Request failed $(error)`)
    }
}

// getUser projects

exports.allUserprojects=async(req,res)=>{
    const userId=req.payload
    try{
        const userProjects= await projects.find({userId})
        res.status(200).json(userProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//getAllProjects

exports.getallprojects=async(req,res)=>{
    try{
        const allProjects= await projects.find()
        res.status(200).json(allProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//getHomeProjects

exports.getHomeprojects=async(req,res)=>{
    try{
        // const homeProjects= await projects.find().limit(3)
        const homeProjects = await projects.aggregate([{ $sample: { size: 3 } }]);  // updated to get random 3 projects using the aggregate function from mongoose that will return 3 random projects on every request


        res.status(200).json(homeProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}