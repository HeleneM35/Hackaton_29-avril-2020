import React, {useState, useEffect} from 'react'
import CamList from './Page Cams/CamList'

const ContextLocation = [
    {
        continent: 'Amérique du Nord',
        codeContinent: 'NA',
        countries: [
            {
                name: 'Etats Unis',
                code: 'US'
            },
            {
                name: 'Canada',
                code: 'CA'
            },
            {
                
                name: 'Mexique',
                code: 'MX'
            },
        ]
        
    },
    {
        continent: 'Afrique',
        codeContinent: 'AF',
        countries: [
            {
                name: 'Afrique du Sud',
                code: 'ZA'
            },
            {
                name: 'Mali',
                code: 'ML'
            },
            {
                name: 'Maroc',
                code: 'MA'
            },
            {
                name: 'Tanzanie',
                code: 'TZ'
            },
            {
                name: 'Egypte',
                code: 'EG'
            },
        ]
    },
    {
        continent: 'Amérique du Sud',
        codeContinent: 'SA',
        countries:[
            {
                name: 'Argentine',
                code: 'AR'
            },
            {
                name: 'Brésil',
                code: 'BR'
            },
            {
                name: 'Chili',
                code: 'CL'
            },
            {
                name: 'Colombie',
                code: 'CO'
            },
            {
                name: 'Pérou',
                code: 'PE'
            },
    ]
    },
    {
        continent: 'Asie',
        codeContinent: 'AS',
        countries: [
            {
                name: 'Inde',
                code: 'IN'
            },
            {
                name: 'Japon',
                code: 'JP'
            },
            {
                name: 'Chine',
                code: 'CN'
            },
            {
                name: 'Thaïlande',
                code: 'TH'
            },
            {
                name: 'Vietnam',
                code: 'VN'
            },
        ]
        
    },
    {
        continent: 'Océanie',
        codeContinent: 'OC',
        countries:[
            {
                name: 'Australie',
                code: 'AU'
            },
            {
                
                name: 'Nouvelle-Zélande',
                code: 'NZ'
            },
            {
                name: 'Papouasie-Nouvelle-Guinée',
                code: 'PG'
            },
            {
                name: 'Fidji',
                code: 'FJ'
            },
            {
                name: 'Vanuatu',
                code: 'VU'
            },
        ]
        
    },
    {
        continent: 'Europe',
        codeContinent: 'EU',
        countries:[
            {
                name: 'France',
                code: 'FR'
            },
            {
                name: 'Italie',
                code: 'IT'
            },
            {
                name: 'Espagne',
                code: 'ES'
            },
            {
                name: 'Allemagne',
                code: 'DE'
            },
            {
                name: 'Allemagne',
                code: 'DE'
            },
            {
                name: 'Pays-Bas',
                code: 'NL'
            }
        ]       
    },
]
const Error = () => (
    <p>
        Something went <strong>wrong</strong>!
    </p>
);
function Location()  {
    const [status, setStatus] = useState('choice')
    const [category, setCategory] = useState('beach')
    const [continent, setContinent] = useState()
    const [countrySelection, setCountrySelection] = useState([])
    const [country, setCountry] = useState()
    const [continentCode, setContinentCode] = useState()
    const [countryCode, setCountryCode] = useState()

    function checkLocation(location) {
        setContinent(location.continent)
        setContinentCode(location.codeContinent)
        setCountrySelection(location.countries)
    }

    function checkCountry(country) {
        setCountry(country.name)
        setCountryCode(country.code)
    }

    function showresults() {
        setStatus('results')
    }
    switch (status) {
        case "results":
            return <CamList category={category} continent={continentCode} country={countryCode} continentName={continent} countryName={country} />;
        case "choice":
    return (
        <>
        <h4>Choisis un continent :</h4>
            {ContextLocation.map(location => (
                    <>
                        <button key={location.continent} onClick={() => checkLocation(location)}> {location.continent} </button> 
                    </>
            ))}

        <h4>Choisis un pays :</h4>
            {countrySelection.map(country => (
                    <> 
                    <button key={country.name} onClick={()=> checkCountry(country)}> {country.name} </button>
                    </>
            ))}

        <button onClick={showresults}>Voir les caméras disponibles</button>

        </>
    );
    default:
            return <Error />;
}
}

export default Location