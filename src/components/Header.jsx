import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useParams } from "react-router-dom";
import DeleteUnit from './DeleteUnit'

export default function HomePage() {
    const location = useLocation()
    const { id } = useParams()

    const [pricing, setPricing] = useState(Boolean)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setPricing(location.pathname === `/unit/${id}`);
    }, [location])
    return (
        <>
            <Navbar style={{
                position: "fixed",
                width: "100vw"
            }}
                bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">RACCOON</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/units">Units</Nav.Link>
                        {pricing ?
                            <DeleteUnit/>
                            :
                            <></>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}