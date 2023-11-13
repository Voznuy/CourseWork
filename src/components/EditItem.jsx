import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const updateItem = (id, updatedItem) => (
    axios.put(`http://localhost:5000/ItemsUnit/${id}`, updatedItem)
);

function EditItem({ show, handleClose, item, onEdit }) {
    const [name, setName] = useState('');
    const [count, setCount] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.name || '');
            setCount(item.count || '');
            setDeliveryDate(item.delivery_date || '');
            setPrice(item.price || '');
        }
    }, [item]);

    const handleSubmit = () => {
        const editedItem = {
            ...item,
            name,
            count,
            delivery_date: deliveryDate,
            price,
        };

        updateItem(item.id, editedItem)
            .then(response => {
                console.log('Item updated successfully:', response.data);
                onEdit(item.id, editedItem);
                handleClose();
            })
            .catch(error => {
                console.error('Error updating item:', error);
            });
    };;

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={`Enter name (${name || ''})`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="count">
                            <Form.Label>Count</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={`Enter count (${count || ''})`}
                                value={count}
                                onChange={(e) => setCount(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="delivery_date">
                            <Form.Label>Delivery Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder={`Enter delivery date (${deliveryDate || ''})`}
                                value={deliveryDate}
                                onChange={(e) => setDeliveryDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={`Enter price (${price || ''})`}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditItem;