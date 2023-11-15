import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { unitsApi } from '../API/api';
import { ItemsUnitApi } from '../API/api';

function DeleteUnit() {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {

        await axios.delete(`${unitsApi}/${id}`);

        const items = await axios.get(`${ItemsUnitApi}?id_unit=${id}`);
        console.log(items);

        for (const item of items.data) {
            await axios.delete(`${ItemsUnitApi}/${item.id}`);
        }

        navigate('/units')
        console.log('Unit deleted successfully');


    };

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Delete unit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h5>Do you really want to delete unit?</h5>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        NO
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUnit;
