import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Steps from './components/steps/Steps';
import Ready from './components/ready/Ready';
import Footer from './components/footer/Footer';
import Tools from './components/tools/Tools';
import Cart from './components/cart/Cart';
import Pricing from './components/pricing/Pricing';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Section />
      <Tools cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <Steps />
      <Pricing />
      <Ready />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;
