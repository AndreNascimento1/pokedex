import { useState, useEffect, useCallback } from 'react';
import { loadRequest } from '../../utils/loadRequest';

import './styles.css';

import { Cards } from '../../components/Cards';
import { SearchField } from '../../components/SearchField';
import { Button } from '../../components/Button';

export const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [pokemonsPerPage] = useState(18);

  const [searchValue, setSearchValue] = useState('');

  const filtredPokemons = searchValue ?
    allPokemons.filter((pokemon) => {
      return pokemon.name.toUpperCase().includes(searchValue.toUpperCase());
    })
    : pokemons;

    const handleLoadPokemons = useCallback(async (page, pokemonsPerPage) => {
      const pokemonsLoad = await loadRequest();

      setPokemons(pokemonsLoad.slice(page, pokemonsPerPage));
      setAllPokemons(pokemonsLoad);

    }, []);


    useEffect(() => {
      handleLoadPokemons(0, pokemonsPerPage);
    }, [handleLoadPokemons , pokemonsPerPage]);

    const loadMorePokemons = () => {
      const nextPage = page + pokemonsPerPage;

      const nextPokemons = allPokemons.slice(nextPage, nextPage + pokemonsPerPage);

      pokemons.push(...nextPokemons);

      setPokemons(pokemons);
      setPage(nextPage);
    };

    const handleChanges = (e) => {
      const { value } = e.target;

      setSearchValue(value);
    }

    const noMorePokemons = page + pokemonsPerPage >= allPokemons.length;

  return (

    <>
      <div className="container">

        <div className="search-content">
          {
            !!searchValue && 
            (
              <h1>Search value: {searchValue}</h1>
            )
          }

          <SearchField searchValue={searchValue} handleChange={handleChanges} />
        </div>

          {filtredPokemons.length > 0 && <Cards pokemons={filtredPokemons} />}

          {filtredPokemons.length === 0 && <p>This pokemon doesn't exist</p> }

          <div className="button-container">
            {!searchValue && <Button text="Load more Pokemons" onClick={loadMorePokemons} disabled={noMorePokemons} />}
          </div>

      </div>    
    </>

  )

}