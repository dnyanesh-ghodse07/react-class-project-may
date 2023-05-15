import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {ShopContext} from '../../context/shopContext';


const Navbar = () => {

    const {cartItems} = useContext(ShopContext);
    const totalItems = Object.values(cartItems).reduce((acc,cur) => acc + cur,0);
    console.log(totalItems);
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
                    <Link to='/cart'>Cart <span className='cart-item-no'>{totalItems}</span></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar