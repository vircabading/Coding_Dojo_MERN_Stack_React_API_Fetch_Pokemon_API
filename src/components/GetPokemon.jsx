import React from 'react'

/**
 * /////////////////////////////////////////////////////////////////////
 *      GET POKEMON
 * /////////////////////////////////////////////////////////////////////
 *  * @returns A Button which will fetch pokemo 
 */
const GetPokemon = () => {
    return (
        <div>
            <form className="row">
                <button className="col btn btn-primary round">
                    <strong>Fetch Pokemon</strong>
                </button>
            </form>
        </div>
    )
}

export default GetPokemon
