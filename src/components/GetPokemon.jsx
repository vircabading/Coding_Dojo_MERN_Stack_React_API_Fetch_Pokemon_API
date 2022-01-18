import React, { useState } from 'react'

/**
 * /////////////////////////////////////////////////////////////////////
 *      GET POKEMON
 * /////////////////////////////////////////////////////////////////////
 *  * @returns A Button which will fetch pokemo 
 */
const GetPokemon = () => {
    // //// FIELDS /////////////////////////////////////////////////////
    const [pokemonList, setPokemonList] = useState([]);


    const fetchPokemon = (e) => {
        e.preventDefault();
        console.log("*****************");
        console.log("In Fetch Pokemon");
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemonList(response.results));
    }

    // //// OUTPUT /////////////////////////////////////////////////////
    return (
        <div>
            <form className="row"
                onSubmit={(e) => fetchPokemon(e)} >
                <button className="col btn btn-primary round">
                    <strong>Fetch Pokemon</strong>
                </button>
            </form>
            <h3>Pokemon List</h3>
            <p>{JSON.stringify(pokemonList)}</p>
        </div>
    )
}

export default GetPokemon
