import React, { useState, useContext } from 'react'
import { ContextContinent } from '../Context/ContextContinent';
import { ContextCountry } from '../Context/ContextCountry';
import CountryList from './CountryList';

const ContinentList = (continents) => {
    return (
        <>
            {continents.map(continent => {
                return (
                    <>
                    <button> {continent.name} </button>
                    </>
            )})}
            


            
        </>
    )
}
export default ContinentList