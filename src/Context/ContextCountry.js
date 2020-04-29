import React, { useState, createContext } from 'react'


export const ContextCountry = createContext()

export const CountryController = (props) => {
    const [countries, setCountries] = useState([
        {
            continent: 'Amérique du Nord',
            codeContinent: 'NA',
            name: 'Etats Unis',
            code: 'US'
        },
        {   
            continent: 'Amerique du Nord',
            codeContinent: 'NA',
            name: 'Canada',
            code: 'CA'
        },
        {
            continent: 'Amérique du Nord',
            codeContinent: 'NA',
            name: 'Mexique',
            code: 'MX'
        },
        {
            continent: 'Afrique',
            codeContinent: 'AF',
            name: 'Afrique du Sud',
            code: 'ZA'
        },
        {
            continent: 'Afrique',
            codeContinent: 'AF',
            name: 'Mali',
            code: 'ML'
        },
        {
            continent: 'Afrique',
            codeContinent: 'AF',
            name: 'Maroc',
            code: 'MA'
        },
        {
            continent: 'Afrique',
            codeContinent: 'AF',
            name: 'Tanzanie',
            code: 'TZ'
        },
        {
            continent: 'Afrique',
            codeContinent: 'AF',
            name: 'Egypte',
            code: 'EG'
        },
        {
            continent: 'Amérique du Sud',
            codeContinent: 'SA',
            name: 'Argentine',
            code: 'AR'
        },
        {
            continent: 'Amérique du Sud',
            codeContinent: 'SA',
            name:'Brésil',
            code: 'BR'
        },
        {
            continent: 'Amérique du Sud',
            codeContinent: 'SA',
            name:'Chili',
            code: 'CL'
        },
        {
            continent: 'Amérique du Sud',
            codeContinent: 'SA',
            name:'Colombie',
            code: 'CO'
        },
        {
            continent: 'Amérique du Sud',
            codeContinent: 'SA',
            name:'Pérou',
            code: 'PE'
        },
        {
            continent: 'Asie',
            codeContinent: 'AS',
            name:'Inde',
            code: 'IN'
        },
        {
            continent: 'Asie',
            codeContinent: 'AS',
            name:'Japon',
            code: 'JP'
        },
        {
            continent: 'Asie',
            codeContinent: 'AS',
            name:'Chine',
            code: 'CN'
        },
        {
            continent: 'Asie',
            codeContinent: 'AS',
            name:'Thaïlande',
            code: 'TH'
        },
        {
            continent: 'Asie',
            codeContinent: 'AS',
            name:'Vietnam',
            code: 'VN'
        },
        {
            continent: 'Océanie',
            codeContinent: 'OC',
            name:'Australie',
            code: 'AU'
        },
        {
            continent: 'Océanie',
            codeContinent: 'OC',
            name:'Nouvelle-Zélande',
            code: 'NZ'
        },
        {
            continent: 'Océanie',
            codeContinent: 'OC',
            name:'Papouasie-Nouvelle-Guinée',
            code: 'PG'
        },
        {
            continent: 'Océanie',
            codeContinent: 'OC',
            name:'Fidji',
            code: 'FJ'
        },
        {
            continent: 'Océanie',
            codeContinent: 'OC',
            name:'Vanuatu',
            code: 'VU'
        },
        {
            continent: 'Europe',
            codeContinent: 'EU',
            name:'France',
            code: 'FR'
        },
        {
            continent: 'Europe',
            codeContinent: 'EU',
            name:'Italie',
            code: 'IT'
        },
        {
            continent: 'Europe',
            codeContinent: 'EU',
            name:'Espagne',
            code: 'ES'
        },
        {
            continent: 'Europe',
            codeContinent: 'EU',
            name:'Allemagne',
            code: 'DE'
        },
        {
            continent: 'Europe',
            codeContinent: 'EU',
            name:'Pays-Bas',
            code: 'NL'
        }
    ])
    return (
        <ContextCountry.Provider value={[countries, setCountries]}>
            {props.children}
        </ContextCountry.Provider>
    )
}
