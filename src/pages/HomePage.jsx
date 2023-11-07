import React from "react";
import Image from 'react-bootstrap/Image';
import Header from '../components/Header'
import chevron from '../assets/images/chevron.png'
import "./HomePage.css"

export default function HomePage() {
    return (
    <>
        <Header/>
        <div className="logo-block">
        <Image className="logo" src={chevron}></Image>
        <div className="log-text">
            Unit of combat raccoons
        </div>
        </div>
    </>
    )
}
