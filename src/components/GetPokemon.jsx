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

            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pokemon</th>
                    </tr>
                    {
                        pokemonList.map( (pokemon, idx) => {
                            return <tr key={ idx }>
                                <th scope="row">{ idx+1 }</th>
                                <td>{ pokemon.name }</td>
                            </tr>
                        } )
                    }
                </thead>
            </table>
        </div>
    )
}

export default GetPokemon
