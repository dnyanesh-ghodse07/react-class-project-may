import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="brand">
            <Link to='/'>Shoppers</Link>
        </div>
        <div className="nav_links">
            <ul>
                <li>
                    <Link href="">About</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar