import React, {useState, createContext} from 'react'

export const ContextCategory = createContext()

export const CategoryController = (props) => {

    const [category, setCategory] = useState([
        {
            name: 'plage',
            category: 'beach'
        },
        {
            name: 'ville',
            category: 'city'
        },
        {
            name: 'forêt',
            category: 'forest'
        },
        {
            name: 'montagne',
            category: 'mountain'
        },
        {
            name: 'fonds marins',
            category: 'underwater'
        }
    ])

    return(
        <ContextCategory.Provider value={[category, setCategory]}>
            {props.children}
        </ContextCategory.Provider>
    )
}