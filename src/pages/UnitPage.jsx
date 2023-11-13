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
import * as XLSX from 'xlsx';

const serchedItems = (items, searchText) => items.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));

export default function UnitPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const downloadExcel = (items) => {
        const dataToExport = items.map(item => ({
            name: item.name,
            count: item.count,
            delivery_date: item.delivery_date,
            price: item.price
        }));
        
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const namexlsx = "Items" + id + ".xlsx"
        XLSX.writeFile(workbook, namexlsx);
    };

    
    useEffect(() => {
        axios.get(`http://localhost:5000/ItemsUnit?id_unit=${id}`)
            .then(res => {
                setItems(res.data)
                setFilteredItems(res.data)
            })
            .catch(e => console.log(e));
    }, []);

    


    const handleSearchInputChange = (event) => {
        const searchText = event.target.value;
        const filteredItems = serchedItems(items, searchText);
        setFilteredItems(filteredItems);
    };

    const addItemInState = (item)=>{
        setItems(prevItems=>[...prevItems, item]);
    };

    return (
        <>
            <AddItem show={show} handleClose={handleClose} onDone={addItemInState}/>
            <Header />
            <div className="SecondNawBar">

                <div className="Searsh-input">
                    <InputGroup className="mb-3">
                        <Button variant="dark" onClick={() => downloadExcel(items)}>
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

