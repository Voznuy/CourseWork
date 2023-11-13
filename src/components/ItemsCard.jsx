import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemCard.css'
import EditItem from './EditItem';
import { useState } from 'react';

function ItemCard({ item }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <EditItem show={show} handleClose={handleClose} />
            <Card border="dark"
                style={{
                    width: '100%',
                    height: '230px'
                }}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Price item: {item.price}</Card.Title>
                    <Card.Text>
                        Count item: {item.count}
                        <br></br>
                        Delivery date: {item.delivery_date}
                    </Card.Text>
                    <Button className='button-edit-card' variant="outline-dark" onClick={handleShow}>edit</Button>
                    <Button className='button-delete-card' variant="outline-dark">delete</Button>
                </Card.Body>
            </Card>
        </>
    )

}

export default ItemCard;