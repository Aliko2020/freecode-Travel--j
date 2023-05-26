import React from 'react'
import globe from "./images/globe.png"

const Nav = () => {
  return (
    <div className='header'>
        <header>
            <nav>
                <img src= {globe} alt="globe" />
                <h2>My Travel Journal.</h2>
            </nav>
        </header>
    </div>
  )
}

export default Nav