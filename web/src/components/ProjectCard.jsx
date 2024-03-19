import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import cardimage from '../components/assets/default.jpg'
import { Col, Modal, Row } from 'react-bootstrap';
import modalimage from '../components/assets/default.jpg'
import {BASE_URL} from '../services/baseurl';




function ProjectCard({project}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      
      
      { project && <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={project? `${BASE_URL}/uploads/${project?.projectImage}`:cardimage} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        
      </Card.Body>
    </Card>}
{
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <Card.Img variant="top" src={project? `${BASE_URL}/uploads/${project?.projectImage}`:cardimage} onClick={handleShow} />

                
                </Col>

                <Col md={6}>
                    <h2>{project.title}</h2>
                    <p>{project.overview}</p>
    <p>Language Used:<span className='fw-bolder'>{project.languages}</span></p>
                
                </Col>
            </Row>
            <div>
                <a className='m-3' href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-solid fa-link"></i>
</a>
            </div>
        </Modal.Body>
      
      </Modal>
}
    </div>
  )
}

export default ProjectCard