import './Card.css';
import { useState } from 'react';
function Card({title,url,price,amount,setAmount,addToCart}) {
    const [quantity, setQuantity] = useState(1);

    function handleAddButton() {
        setQuantity(quantity +1);

    }

    function handleSubButton() {
        if (quantity > 0) {
            setQuantity(quantity -1);
        }

    }

    function handleInputBoxAmount(e) {
        const value = Number(e.target.value);
        setQuantity(value < 1 ? 1 : value);
    }

    
    function handleAddToCartButton() {
        setAmount(prev => prev + quantity);
        addToCart({ title, url, price, quantity });
    }

    return (
        <div className="card-div">
            <img src={url}  />
            <div className='text-of-items'>
                <p className='title-card'>{title}</p>
                <p className='price'>Price: ${price}</p>
            </div>
            <div className='button-set-div'>
                <div className='add-items-div'>
                <button onClick={handleSubButton} className='button-minus'>-</button>
                <input type="number" value ={quantity}  onChange={handleInputBoxAmount} onFocus={(e) => e.target.select()}  min="1" className='input-box'/>
                <button onClick={handleAddButton} className='button-plus'>+</button>
                </div>
                <button onClick={handleAddToCartButton} className='add-to-cart-button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;