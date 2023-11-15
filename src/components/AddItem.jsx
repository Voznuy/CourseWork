import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useParams } from "react-router-dom";
import { ItemsUnitApi } from '../API/api';

function AddItem({ show, handleClose, onDone }) {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        const item = {
            name,
            price,
            count,
            delivery_date: date,
            id_unit: id,
        }
        
        addNewItem(item)
        .then((res)=>{
            console.log(res);
            onDone(res.data);
        })
        .catch(err=>console.log(err));

        handleClose();
    };;


    const addNewItem = async (item) => {
        try {
            const response = await axios.post(ItemsUnitApi, item);
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name item</Form.Label>
                            <Form.Control
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name itemFalcon II RF-5800H-MP (Radio station)"
                                autoFocus />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>price</Form.Label>
                            <Form.Control
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                placeholder='$90.000' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="count">
                            <Form.Label>count</Form.Label>
                            <Form.Control
                                onChange={(e) => setCount(e.target.value)}
                                type="number"
                                placeholder='4' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>date</Form.Label>
                            <Form.Control
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                placeholder="04.06.2023" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleSubmit}>
                        Add item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddItem;