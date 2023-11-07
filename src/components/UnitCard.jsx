import Card from 'react-bootstrap/Card';
import React from "react";
import './UnitCard.css'

export default function UnitCard({ unit }) {

  return (
    <Card className="bg-dark text-white">
      <Card.Img style={{
        height: "250px",
        width: "250px"
      }} src={unit.image_unit} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='custom-leter'>{unit.name_units}</Card.Title>
        <Card.Text className='custom-leter'>{unit.specialization}</Card.Text>
        <Card.Text className='custom-leter'>Commander: {unit.name_comander}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}