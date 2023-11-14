import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function AddUnit({ show, handleClose, onDone }) {
    const [name_units, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [image_unit, setImage] = useState('');
    const [name_comander, setCommanderName] = useState('');


    const handleSubmit = () => {
        const unit = {
            name_units,
            specialization,
            image_unit,
            name_comander
        }

        handleClose();

        addNewUnit(unit)
            .then((res) => {
                console.log(res);
                onDone(res.data);
            })
            .catch(err => console.log(err));

        handleClose();
    };;

    const addNewUnit = async (unit) => {
        try {
            const response = await axios.post('http://localhost:5000/units', unit);
            return response;
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name_unit_id">
                            <Form.Label>Name unit</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Example: 1st assault battalion"
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="specialization_unit_id">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control
                                type="text"
                                as="textarea"
                                rows={3}
                                placeholder='Briefly about the unit'
                                onChange={(e) => setSpecialization(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image_unit_id">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                as="textarea"
                                rows={3}
                                placeholder='https://example.com/image.jpg'
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="comanderName_unit_id">
                            <Form.Label>Commander name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Example: Tyler Durden"
                                onChange={(e) => setCommanderName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleSubmit}>
                        Add unit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddUnit;