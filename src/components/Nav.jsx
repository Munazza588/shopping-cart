import { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
function Nav({amount}) {
    return (
        <div className='nav-div'>
            <p>ShopiGo</p>
            <div className='links-div'>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link className="cart-link" to="/cart">Cart
                 <span className="amount-display-on-link">{amount}</span>
                    </Link>
            </div>
        </div>
    )
}

export default Nav;