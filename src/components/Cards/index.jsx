import './styles.css';

import { Card } from '../Card';

export const Cards = ({ pokemons = [] }) => (
    <div className="cards">
        {
            pokemons.map( pokemon => (
                <Card
                    key={pokemon.index}
                    name={pokemon.name}
                    index={pokemon.index}
                />
            ))
        }
    </div>

)