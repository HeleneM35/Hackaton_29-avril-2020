import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iframe from "react-iframe";

const APIKey = '7ESCVeg0KgkQwgRo1PtacPmPisCPQwvP'

function CamList() {
    const [theCamList, setTheCamList] = useState([])
    const category = 'city'
    const continent = 'OC'
    const country = '/country=AU'
    function getList() {
        axios.get(`https://api.windy.com/api/webcams/v2/list/category=${category}/continent=${continent}${country}?show=webcams:image,location,player&key=${APIKey}`)
            .then(response => setTheCamList(response.data.result.webcams))
    }
    useEffect(() => {
        getList()
    }, [])

    console.log(theCamList)
    return (
        <>
            <h1> -- {category} {continent} {country} --</h1>
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