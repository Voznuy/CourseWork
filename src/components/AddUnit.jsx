import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddUnit({ show, handleClose }) {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [commanderName, setCommanderName] = useState('');


    const handleSubmit = () => {
        const unit = {
            name,
            specialization,
            commanderName
        }

        handleClose();
    };;



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name_unit_id">
                            <Form.Label>Name unit</Form.Label>
                            <Form.Control type="text" placeholder="Example: 1st assault battalion" autoFocus />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="specialization_unit_id">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder='briefly about the unit' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image_unit_id">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRQVydrNgjzyhcuQUsBEtqCkQxhor3bYUF_6U_BuMIykXy12XlEpV981ENTOb28_XOts&usqp=CAU' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="comanderName_unit_id">
                            <Form.Label>Comander name</Form.Label>
                            <Form.Control type="text" placeholder="Example: Tyler Durden" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Add unit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddUnit;