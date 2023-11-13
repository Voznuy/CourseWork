import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import UnitCard from '../components/UnitCard'
import "./HomePage.css"
import "./Units.css"
import "../components/UnitCard"
import addUnitImage from '../assets/images/additem.png'
import Image from 'react-bootstrap/Image';
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddUnit from "../components/AddUnit";



export default function HomePage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [units, setUnits] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/units")
            .then(res => {
                setUnits(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <>
            <AddUnit show={show} handleClose={handleClose} />
            <Header />
            <div className="unit-container">


                {units?.map(value => (
                    <Link to={`/unit/${value.id}`}>
                        <div className="unit-card">
                            <UnitCard unit={value} />
                        </div>
                    </Link>
                ))
                }
                <button className="add-button" onClick={handleShow} >
                    <img className="image-add-container" src={addUnitImage}></img>
                </button>
            </div>


        </>
    )
}
