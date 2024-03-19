const multer =require('multer')

const storage =multer.diskStorage({
    destination:(req,file,calback)=>{
        calback(null,'./uploads');
    },
    filename:(req,file,calback)=>{
        const filename=`image-${Date.now()}-${file.originalname}`
        calback(null,filename)
    }
})

const fileFilter=(req,file,calback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
        calback(null,true)
    }
    else{
        calback(null,false)
        return calback(new Error('only allow to upload png,jpg&jpeg files...'))
    }
}
 

const multerConfig=multer({
    storage,fileFilter
})

module.exports=multerConfig