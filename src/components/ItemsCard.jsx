import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemCard.css'
import EditItem from './EditItem';
import { useState } from 'react';
import axios from 'axios';

const deleteItem = (id) => (
    axios.delete(`http://localhost:5000/ItemsUnit/${id}`)
);

function ItemCard({ item, onEdit, onDelete }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        deleteItem(item.id)
            .then(response => {
                console.log('Item deleted successfully:', response.data);
                onDelete(item.id);
                handleClose();
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };

    return (
        <>
            <EditItem show={show} handleClose={handleClose} item={item} onEdit={onEdit} />
            <Card border="dark"
                style={{
                    width: '100%',
                    height: '230px'
                }}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Price item: ${item.price}</Card.Title>
                    <Card.Text>
                        Count item: {item.count}
                        <br></br>
                        Delivery date: {item.delivery_date}
                    </Card.Text>
                    <Button className='button-edit-card' variant="outline-dark" onClick={handleShow}>edit</Button>
                    <Button className='button-delete-card' variant="outline-dark" onClick={handleDelete}>delete</Button>
                </Card.Body>
            </Card>
        </>
    )

}

export default ItemCard;