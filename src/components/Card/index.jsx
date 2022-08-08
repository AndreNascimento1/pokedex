import {useState, useEffect, useCallback } from 'react';

import { loadSpecificRequest } from '../../utils/loadRequest';

import './styles.css';

export const Card = ({ index, name }) => {

    const [details, setDetails ] = useState([]);

    useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
            .then(response => response.json()
            .then(data => setDetails(data))
            )
            
        }, []);

    // details.abilities !== undefined ?  details.abilities.map(
    //     ability => (
    //         console.log(ability)
    //     )
    // )
    // : ''

    return (
    
        <div className="card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} 
                    alt={"Image unavailable"}
                />

            <div className="descricao">
                <h2> {name} </h2>                    
                <p>
                    {
                        details.abilities !== undefined ? 
                            details.abilities.map(
                                ability => (
                                    <p>{ability}</p>
                                )
                            )
                        : ''
                    }
                </p>
                <p>

                </p>

            </div>
        </div>
    )
}