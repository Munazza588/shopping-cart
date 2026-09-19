import './Cart.css';
import Card from './Card';
function Cart({amount,cartItems,setAmount,addToCart}) {

    function calculateTotal() {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    return (
        <div>
            <p className="title">Shopping Cart</p>
            {amount === 0 ? (
                <div className='empty-cart-info'>
                    <p>Your Cart is Empty</p>
                </div>
            ) : (
                <div className='cart-outer-div'>
                    <div>
                        {cartItems.map((item, index) => (
                            <div className='items-detail-div' key={index}>
                                <Card title={item.title} url={item.url} price={item.price} addToCart={addToCart} amount={amount} setAmount={setAmount} />
                            </div>
                        ))}
                    </div>
                    <div className='total-div'>
                        <p>Thanks for Shopping</p>
                        <p>Your Total is: {calculateTotal().toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    )
}



export default Cart;
