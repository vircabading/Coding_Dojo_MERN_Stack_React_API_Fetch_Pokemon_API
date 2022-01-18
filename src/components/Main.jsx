import React from 'react'
import GetPokemon from './GetPokemon'

/**
 * ////////////////////////////////////////////////////////
 *      MAIN COMPONENT
 * ////////////////////////////////////////////////////////
 */
const Main = () => {
    return (
        <main role="main">
            <div className='container mt-4'>
                <div className='row border'>
                    {/* **** Get Pokemon Component ******** */}
                    <GetPokemon />
                </div>
            </div>
        </main>
    )
}

export default Main