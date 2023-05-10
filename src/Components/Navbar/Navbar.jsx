import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="brand">
            Shoppers
        </div>
        <div className="nav_links">
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Cart</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar