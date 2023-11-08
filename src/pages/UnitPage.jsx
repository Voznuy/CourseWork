import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import "./HomePage.css"
import "./UnitPage.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemsCard from '../components/ItemsCard'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import importSVG from '../assets/images/import.svg'
import AddItem from '../components/AddItem.jsx'

const serchedItems = (items, searchText)=> items.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()));

export default function UnitPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/ItemsUnit?id_unit=${id}`)
            .then(res => {
                setItems(res.data)
                setFilteredItems(res.data)
            })
            .catch(e => console.log(e));
    }, []);


    const handleSearchInputChange = (event)=>{
        const searchText = event.target.value;
        const filteredItems = serchedItems(items, searchText);
        setFilteredItems(filteredItems);
    };

    return (
        <>
            <AddItem show={show} handleClose={handleClose} />
            <Header />
            <div className="SecondNawBar">

                <div className="Searsh-input">
                    <InputGroup className="mb-3">
                        <Button variant="dark">
                            <img src={importSVG} alt="" />
                        </Button>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            onChange={handleSearchInputChange}
                        />
                        <Button variant="dark" onClick={handleShow}>Add item</Button>
                    </InputGroup>
                </div>

            </div>





            <div className="items-card-block">

                {filteredItems && filteredItems?.map(item => (
                    <div>
                        <ItemsCard key={item.id} item={item} />
                    </div>
                ))
                }

            </div>
        </>
    )

}

