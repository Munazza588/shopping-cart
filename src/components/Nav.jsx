import { useState } from 'react';
import './Nav.css';
function Nav() {
    const [count, setCount] = useState(0);
    return (
        <div className='nav-div'>
            <p>ShopiGo</p>
            <div className='links-div'>
                <a>Home</a>
                <a>Cart</a>
                <a>Shop</a>
            </div>
        </div>
    )
}

export default Nav;