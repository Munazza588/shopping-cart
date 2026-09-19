import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
    setCartItems(prev => {
        const existingItem = prev.find(i => i.title === item.title);

        if (existingItem) {
            // item already in cart — bump its quantity, leave everything else as-is
            return prev.map(i =>
                i.title === item.title
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
            );
        } else {
            // new item — just add it to the array
            return [...prev, item];
        }
    });
}
  return (
      <BrowserRouter>
            <Nav amount={amount} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} amount={amount} setAmount={setAmount} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} amount={amount} setAmount={setAmount} addToCart={addToCart}/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
