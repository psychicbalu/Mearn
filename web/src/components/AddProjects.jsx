import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { AddProjectApi } from '../services/allAPI';

function AddProjects() {

  const [token,setToken]=useState([])

  const [projectDetails,setProjectDetails]=useState({
    title:"",languages:"",github:"",website:"",overview:"",projectImage:""
  })

  const [preview,setPreview]=useState("")
   useEffect(()=>{
    if(projectDetails.projectImage){
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
   
   },[projectDetails.projectImage])


   useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
  
    }
    else{
      setToken("")
    }
   })


    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)
    setProjectDetails({
      title:"",languages:"",github:"",website:"",overview:"",projectImage:""
    })
    setPreview("")
    }
    const handleShow = () => setShow(true);
    console.log(projectDetails)



    const handleAdd=async(e)=>{

      e.preventDefault()
      const {title,languages,github,website,overview,projectImage}=projectDetails
      if(!title|| !languages|| !github|| !website|| !overview|| !projectImage){
        alert( "Please fill out all fields.")
      }
      else{
        const reqBody = new FormData()

        reqBody.append( "title", title )
        reqBody.append( "languages",languages)
        reqBody.append( "github", github)
        reqBody.append( "website", website)
        reqBody.append( "overview", overview)
        reqBody.append( "projectImage", projectImage)

        if(token){
        const reqHeader ={
            "Content-Type": "multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          const result=await AddProjectApi(reqBody,reqHeader)
         
        if(result.status===200){
          console.log(result.data)
          handleClose()
          alert('Projects added')
        }

        else{
          console.log(result)
          console.log(result.response.data)
        }
        }
        

        

      }

 }

  return (
    <>
 <Button variant="info" onClick={handleShow}>
 Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
            <div className="col-lg-6">
            <label>

<input type="file" style={{display:"none"}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
<img src={preview?preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="" width={"200px"}  className='rounded circle'  />
</label>  
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title}
                    onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}   />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"  placeholder='Language Used' value={projectDetails.languages} 
                    onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder=' Github' value={projectDetails.github}
                    onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Website Link' value={projectDetails.website}
                    onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Project Overview' value={projectDetails.overview}
                    onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                    
                </div>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProjects

// const [projectDetails,setProjectDetails]=useState({
//   title:"",languages:"",github:"",wesite:"",overview:"",projectImage:""
// })

