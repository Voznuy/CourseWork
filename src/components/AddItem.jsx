import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddItem({ show, handleClose }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [date, setDate] = useState('');


    const handleSubmit = () => {
        const item = {
            name,
            price,
            count,
            date
        }

        handleClose();
    };;



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name_unit_id">
                            <Form.Label>Name item</Form.Label>
                            <Form.Control type="text" placeholder="Name itemFalcon II RF-5800H-MP (Radio station)" autoFocus />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="specialization_unit_id">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" placeholder='$90.000' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image_unit_id">
                            <Form.Label>count</Form.Label>
                            <Form.Control type="number" placeholder='4'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="comanderName_unit_id">
                            <Form.Label>date</Form.Label>
                            <Form.Control type="date" placeholder="04.06.2023" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Add item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddItem;