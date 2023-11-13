import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function EditItem({ show, handleClose }) {
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
                    <Modal.Title>New unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name_unit_id">
                            <Form.Label>Name item</Form.Label>
                            <Form.Control type="text" placeholder="Example: 1st assault battalion" autoFocus />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="specialization_unit_id">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder='briefly about the unit' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image_unit_id">
                            <Form.Label>Count</Form.Label>
                            <Form.Control type="text" placeholder='f'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="comanderName_unit_id">
                            <Form.Label>Date</Form.Label>
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

export default EditItem;