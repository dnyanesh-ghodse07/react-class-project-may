import React from 'react'
import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {ShopContext} from '../../context/shopContext';


const Navbar = () => {

    const navigate = useNavigate();
    const {auth} = useContext(ShopContext);

    const {cartItems} = useContext(ShopContext);
    const totalItems = Object.values(cartItems).reduce((acc,cur) => acc + cur,0);
    console.log(totalItems);


    const navigateToCart = () => {
        if(auth){
            navigate('/cart');
        }else{
            navigate('/login')
        }
    }
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
                    <button onClick={navigateToCart}>Cart <span className='cart-item-no'>{totalItems}</span></button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar