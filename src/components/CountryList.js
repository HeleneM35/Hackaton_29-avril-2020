import React, { useState, useContext } from 'react'
import { ContextCountry } from '../Context/ContextCountry';

const CountryList = () => {
    const [countries, setCountries] = useContext(ContextCountry)
    return (
        <>
            {countries.map(country => {
                return <button> {country.name} </button>
            })}
        </>
    )
}
export default CountryList