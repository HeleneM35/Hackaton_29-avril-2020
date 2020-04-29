import React, {useContext} from 'react'
import {ContextCountry, CountryController} from '../Context/ContextCountry'
import CountryList from './CountryList'
import ContinentList from './ContinentList'
import { ContextContinent, ContinentController } from '../Context/ContextContinent'

function Location()  {
    const countries = useContext(ContextCountry)
    const continent = useContext(ContextContinent)
    console.log(countries)
    return (
        <>
        <h4>Choisis un continent :</h4>
        <ContinentController>
            <ContinentList />
        </ContinentController> 

        <h4>Choisis un pays :</h4>
        <CountryController>
            <CountryList />
        </CountryController> 

        </>
    ) 
}

export default Location