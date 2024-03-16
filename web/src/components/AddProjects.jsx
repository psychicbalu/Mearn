import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { AddProjectApi } from '../services/allAPI';

function AddProjects() {

    // const[projectDetails,setProjectDetails]=useState({
    //     title:"",languages:"",github:"",website:"",overview:"",projectImage:""
    // })
    // // console.log(projectDetails);
    // const[preview,setPreview]=useState("")

    // useEffect(()=>{
    //     if(projectDetails.projectImage){
    //         setPreview(URL.createObjectURL(projectDetails.projectImage))
    //     }
    // },[projectDetails.projectImage])

    // const [show,setShow] = useState(false);

    // const handleClose = ()=> setShow(false)
    // const handleShow = ()=> setShow(true);

    const[token,setToken]=useState("")
    const[projectDetails,setProjectDetails]=useState({
        title:"",languages:"",github:"",website:"",overview:"",projectImage:""
    })
    // console.log(projectDetails);
    const[preview,setPreview]=useState("")

    useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    },[projectDetails.projectImage])

    const [show,setShow] = useState(false);

    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true);
    
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
    }else{
        setToken("")
    }
    }    )

    const handleAdd=async(e)=>{
        e.preventDefault()
        const{title,languages,github,website,overview,projectImage}=projectDetails
        if(!title || !languages || !github || !website || !overview || !projectImage){
            alert("Plaese fill the Fields")
        }else{
            const reqbody= new FormData()
            reqbody.append("title",title)
            reqbody.append("languages",languages)
            reqbody.append("github",github)
            reqbody.append("website",website)
            reqbody.append("overview",overview)
            reqbody.append("projectImage",projectImage)

           if(token){
             const reqheader={
                "content-type":"multipart/FormData",
                 "Authorization":`Bearer ${token}`
            }
            const result= await AddProjectApi(reqbody,reqheader)
            if (result.status===200) {
              console.log(result.data)

            
        }else{
            console.log(result)
            console.log(result.response.result)
        }

           }

           
        }
    }
  return (
    <div>
        <Button variant='primary' onClick={handleShow}>Add Projects</Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Project Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="row">
                    <div className="col-6">
                        <label >
                            <input type="file" style={{display:'none'}} onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
                            <img width={'300px'} src={preview?preview:"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} alt=""  />
                        </label>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title}
                            onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} />
                       </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Languages Used' value={projectDetails.languages}
                            onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} />
                       </div>

                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Github' value={projectDetails.github}
                            onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} />
                       </div>

                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website}
                            onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} />
                       </div>

                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview}
                            onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} />
                       </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    cancel
                </Button>
                <Button  onClick={handleAdd}  variant="primary">Add</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddProjects