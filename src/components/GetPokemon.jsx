import React, { useState } from 'react'

/**
 * /////////////////////////////////////////////////////////////////////
 *      GET POKEMON
 * /////////////////////////////////////////////////////////////////////
 *  * @returns A Button which will fetch pokemo 
 */
const GetPokemon = () => {
    // //// FIELDS /////////////////////////////////////////////////////
    // **** List of Polkemon ********
    const [pokemonList, setPokemonList] = useState([]);

    /**
     * *****************************************************************
     *      FETCH POKEMON
     *  ****************************************************************
     * @param {event} e 
     */
    const fetchPokemon = (e) => {
        e.preventDefault();
        console.log("*****************");
        console.log("In Fetch Pokemon");
        // **** Get First 807 Pokemon from thePokemon API **************
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemonList(response.results));
    }

    // //// OUTPUT /////////////////////////////////////////////////////
    return (
        <div className='bg-white round'>
            {/* **** Button that Will Call Fetch Pokemon on Submit ******** */}
            <form className="row"
                onSubmit={(e) => fetchPokemon(e)} >
                <button className="col btn btn-primary round">
                    <strong>Fetch Pokemon</strong>
                </button>
            </form>
            <h3 className='text-center mt-5' >Pokemon List</h3>
            {/* **** Table of The Names of All the Pokemon Retrieved from the Pokemon API ******** */}
            <table className='table table-striped'>
                <thead className="thead-dark bg-warning">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pokemon</th>
                    </tr>
                </thead>
                <tbody>
                    {/* **** Go through the List of Pokemon and Display one Pokemon per row on the table ******** */}
                    {
                        pokemonList.map( (pokemon, idx) => {
                            return <tr key={ idx }>
                                <th scope="row">{ idx+1 }</th>
                                <td>{ pokemon.name }</td>
                            </tr>
                        } )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetPokemon
