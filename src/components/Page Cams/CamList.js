import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iframe from "react-iframe";

const APIKey = 'ojWoEVHSMMwNvb4nGhFh2cumH5dfMXPu'

function CamList(props) {
    const [theCamList, setTheCamList] = useState([])
    const category = props.category
    const continent = props.continent
    const country = props.country
    function getList() {
        axios.get(`https://api.windy.com/api/webcams/v2/list/category=${category}/continent=${continent}/country=${country}?show=webcams:image,location,player&key=${APIKey}`)
            .then(response => setTheCamList(response.data.result.webcams))
    }
    useEffect(() => {
        getList()
    }, [])

    console.log(theCamList)
    return (
        <>
            <h1> -- {category} {props.continentName} {props.countryName} --</h1>
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