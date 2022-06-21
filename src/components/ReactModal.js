import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css';

const ReactModal = (props) => {
    // const {title, image, price, category, description} = props.product;
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>Details</Button>
        
            <Modal show={show} onHide={handleClose}>
            <img src={props.product.image} alt="" />
            <Modal.Header closeButton>
                
            <Modal.Title>{props.product.title}</Modal.Title>
            
            </Modal.Header>
            <Modal.Body>
            <p>{props.product.category}</p>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
        );
    };
    
    export default ReactModal;