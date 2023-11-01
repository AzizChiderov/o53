import React, { useContext, useState } from 'react';
import Cart from './Cart';
import { CartContext } from '../../context/CartContext.js';
import "./cart.module.css";
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader/Loader"

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [loader, setLoader] = useState(false);

  const [comments, setComments] = useState({});
  const navigate = useNavigate();
  const RR = ()=>{
    window.location.reload();
    setLoader(true)
      setTimeout(() => {
        setLoader(false)
      }, 5000)
  }

  const updateCartItemsAndLocalStorage = (newCartItems) => {
    const cartItemsWithComments = newCartItems.map((cartItem) => ({
      ...cartItem,
      comments: comments[cartItem.id] || '',
    }));

    localStorage.setItem('cartItems', JSON.stringify(cartItemsWithComments));
  };

  const incrementItem = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    updateCartItemsAndLocalStorage(updatedCartItems);
    RR()
  };

  const decrementItem = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    updateCartItemsAndLocalStorage(updatedCartItems);
    RR()
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    updateCartItemsAndLocalStorage(updatedCartItems);
    RR()
  };

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    !loader?
    <section>
      <button className="back_button" onClick={handleGoBack}>
        ←
      </button>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        comments={comments}
        setComments={setComments}
      />
    </section>:<Loader/>
  );
};

export default CartPage;
