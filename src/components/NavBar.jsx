import React from 'react'

/**
 * //////////////////////////////////////////////////////////
 *      NAVIGATION BAR COMPONENT
 * //////////////////////////////////////////////////////////
 * @returns A Navigation Bar
 */
const NavBar = () => {
    return (
        <header>
            <div className='navbar navbar-dark bg-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    <div className='text-warning'>
                        <h2>
                            <strong>Fetch Pokemon API</strong>
                        </h2>
                    </div>
                    <div>
                        <button className='btn btn-secondary round'><strong>Home</strong></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
