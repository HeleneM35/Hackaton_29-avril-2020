import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iframe from "react-iframe";

const APIKey = '7ESCVeg0KgkQwgRo1PtacPmPisCPQwvP'

function CamList(props) {
    const [theCamList, setTheCamList] = useState([])
    const category = props.category
    const continent = props.continent
    const country = props.country
    function getList() {
        axios.get(`https://api.windy.com/api/webcams/v2/list/category=${category}/continent=${continent}/country=${country}?show=webcams:image,location,player&key=${APIKey}`)
            .then(response => setTheCamList(response.data.result.webcams))
    }

    let catégorie = 0


    if (category === "beach") {
        catégorie = 'Plages'
    } else if (category === "forest") {
        catégorie = 'Forêts';
    } else if (category === "mountain") {
        catégorie = 'Montagnes';
    } else if (category === "underwater") {
        catégorie = 'Fonds Marins';
    } else if (category === "city") {
        catégorie = 'Villes';
    }
    useEffect(() => {
        getList()
    }, [])

    console.log(theCamList)
    return (
        <>
            <h1> -- {catégorie} {props.continentName} {props.countryName} --</h1>
            {theCamList.map((cam) => { 
        return (
            <>
            <h2>{cam.title}</h2>
            <div>{cam && <Iframe url={cam.player.lifetime.embed} />}</div>
            </>
        )})}
        </>
    )


}

export default CamList