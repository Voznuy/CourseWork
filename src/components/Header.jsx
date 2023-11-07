import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HomePage() {
    return (
        <Navbar style={{
            position: "fixed",
            width: "100vw"
            }}
             bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">RACCOON</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/units">Units</Nav.Link>
                    <Nav.Link href="/Gallery">Gallery</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}