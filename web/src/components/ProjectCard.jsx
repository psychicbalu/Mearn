import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import cardimage from '../components/assets/default.jpg'
import { Col, Modal, Row } from 'react-bootstrap';
import modalimage from '../components/assets/default.jpg'




function ProjectCard() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {cardimage} onClick={handleShow}/>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:"200px", width:"250px"}} className='img-fluid' src={modalimage} alt="image not found" />
                
                </Col>

                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur perspiciatis animi ut non deleniti, consequatur dolore harum! Magni quos voluptatem, ducimus dignissimos eligendi harum perferendis blanditiis. Dolorum, consequatur dolor.</p>
    <p>Language Used:<span className='fw-bolder'>HTML,CSS,JAVASCRIPT</span></p>
                
                </Col>
            </Row>
            <div>
                <a className='m-3' href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-solid fa-link"></i>
</a>
            </div>
        </Modal.Body>
      
      </Modal>
    </div>
  )
}

export default ProjectCard