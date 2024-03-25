import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { editProjectAPI } from '../services/allAPI';


function EditProject({ project }) {

    const [Preview, setPreview] = useState("");
    const [projectDetails, setProjectDetails] = useState({
        id: project._id, title: project.title, languages: project.languages, github: project.github, website: project.website, overview: project.overview, projectImage: ""
    })
    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)

        setProjectDetails({
            id: project._id, title: project.title, languages: project.languages, github: project.github, website: project.website, overview: project.overview, projectImage: ""

        })
        setPreview("")

    }

    const handleShow = () => setShow(true);


    const handleUpdate = async () => {
        const { id, title, languages, github, websites, overview, projectImage } = projectDetails
        if (!title || !languages || !github || !websites || !overview || !projectImage) {
            alert("Please fill out all fields.")
        }
        else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("languages", languages)
            reqBody.append("github", github)
            reqBody.append("website", websites)
            reqBody.append("overview", overview)
            Preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)
            const token = localStorage.getItem("token")
            if (Preview) {
                const reqHeader = (
                    {
                        "content-type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`
                    }
                )
                // api call to update project details 

                const result = await editProjectAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    alert("Project Updated Successfully")
                    //pass reqBody and reqHeader to myprojects
                    handleClose()
                } else {
                    console.log(result);
                    alert("Project Updation Failed",result.response.data)
                }
            } else {
                const reqHeader = (
                    {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    })

                // api call to update project details
                const result = await editProjectAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    alert("Project Updated Successfully")
                    //pass reqBody and reqHeader to myprojects
                    handleClose()
                } else {
                    console.log(result);
                    alert("Project Updation Failed",result.response.data)
                }
            }


        }
    }





    return (
        <>

            <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square"></i></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>

                                <input type="file" style={{ display: "none" }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                                <img src={Preview ? Preview : `${BASE_URL}/uploads/${project.projectImage}`} alt="" width={"200px"} className='rounded circle' />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="text" name="title" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="languages" className="form-control" placeholder='Language Used' value={projectDetails.languages} onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="github" className="form-control" placeholder=' Github' value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="website" className="form-control" placeholder='Website Link' value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="overview" className="form-control" placeholder='Project Overview' value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleUpdate} >Add</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditProject