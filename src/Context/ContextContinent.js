import React, {useState, createContext} from 'react'


export const ContextContinent = createContext()

export const ContinentController = (props) => {
    const [continents, setContinents] = useState([
        {
            name:'Europe',
            code: 'EU'
        }, 
        {
            name: 'Asie',
            code: 'AS'
        },
        {
            name: 'Océanie',
            code: 'OC'
        },
        {
            name: 'Afrique',
            code: 'AF'
        },
        {
            name: 'Amérique du Nord',
            code: 'NA'
        },
        {
            name: 'Amérique du Sud',
            code: 'SA'
        }
    ])
    return (
        <ContextContinent.Provider value={[continents, setContinents]}>
            {props.children}
        </ContextContinent.Provider>
    )
}


