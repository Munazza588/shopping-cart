import './Card.css';
import { useState } from 'react';
function Card({title,url,price}) {
    const [amount,setAmount] = useState(0);


    function handleAddButton() {
        setAmount(amount +1);

    }

    function handleSubButton() {
        if (amount > 0) {
            setAmount(amount -1);
        }

    }

    function handleInputBoxAmount(e) {
        setAmount(Number(e.target.value));
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
                <input type="number" value ={amount}  onChange={handleInputBoxAmount}  min="1" className='input-box'/>
                <button onClick={handleAddButton} className='button-plus'>+</button>
                </div>
                <button className='add-to-cart-button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;