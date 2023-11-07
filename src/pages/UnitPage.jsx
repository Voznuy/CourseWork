import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import "./HomePage.css"
import "./UnitPage.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemsCard from '../components/ItemsCard'

export default function UnitPage() {

    const { id } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/ItemsUnit?id_unit=${id}`)
            .then(res => {
                setItems(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    return (
        <>
            <Header />
            <div className="items-card-block">

                {items && items?.map(item => (
                    <div>
                        <ItemsCard key={item.id} item={item} />
                    </div>
                ))
                }

            </div>
        </>
    )

}
