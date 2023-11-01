import React, { useState } from 'react';
import styles from './cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, incrementItem, decrementItem, comments, setComments }) => {
  const [loader, setLoader] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  
  const uniqueCartItems = Array.from(new Set(cartItems.map((cartItem) => cartItem.id))).map((id) =>
    cartItems.find((item) => item.id === id)
  );
  const toggleModal = () => {
    setLoader(!loader);
    if (!isModalVisible) {
      setTimeout(() => {
        setIsModalVisible(!isModalVisible);
        setLoader(!loader);
        handleConfirmOrder(); 
      }, 5000);
    }
  };

  const calculateTotalPrice = () => {
    return uniqueCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  const handleConfirmOrder = () => {
    const cartItemsWithComments = uniqueCartItems.map((cartItem) => ({
      ...cartItem,
      comments: comments[cartItem.id] || '',
    }));

    localStorage.setItem('cartItems', JSON.stringify(cartItemsWithComments));
  };
  const handle = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className={styles.cart}>
      <div className="container">
        <h2 className="page_title">корзина</h2>
        {uniqueCartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <div>
            <div className={styles.cart_items}>
              {uniqueCartItems.map((cartItem, index) => (
                <div key={index} className={styles.cart_item_content}>
                  <div className={styles.photos}>
                    <img className={styles.photo} src={cartItem.photo} alt="" />
                  </div>
                  <h4 className={styles.name}>{cartItem.name}</h4>
                  <div className={styles.cart_item_price}>
                    <p>{cartItem.quantity} шт.</p>
                    <p>{cartItem.price * cartItem.quantity} сом</p>
                  </div>
                  <div className={styles.cart_item_buttons}>
                    <button className={styles.plus} onClick={() => incrementItem(cartItem.id)}>+</button>
                    <button onClick={() => decrementItem(cartItem.id)} disabled={cartItem.quantity === 1}>-</button>
                    <button className={styles.minus} onClick={() => removeFromCart(cartItem.id)} danger>Удалить</button>
                  </div>
                  <h3>Комментарии</h3>
                  <input
                  placeholder=''
                  className={styles.input}
                  value={comments[cartItem.id] || ''}
                  onChange={(e) => {
                    const updatedComments = { ...comments };
                    updatedComments[cartItem.id] = e.target.value;
                    setComments(updatedComments);
                  }}
                ></input>
                </div>
              ))}
            </div>
            <div className={styles.checkout_link}>
              <div>
                <div className={styles.checkout_link_title}>
                  <h4>Общая стоимость:</h4>
                  <p className={styles.checkout_price}>{calculateTotalPrice()} сом</p>
                </div>
                <button className={styles.confirm_order_button} onClick={toggleModal}>
                  Подтвердить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isModalVisible || loader ? (
        <div className={styles.modal}>
          {loader && (
            <h2 className={styles.yourDiv}>{loader?"Большое спасибо, ожидайте заказ":null}</h2>
          )}
          {isModalVisible && (
            <div className={styles.customModal}>
              <div className={styles.modalContent}>
                {uniqueCartItems.map((el) => (
                  <div className={styles.modalItem} key={el.id}>
                    <h3>{el.name}</h3>
                    <h3>{el.comments?el.comments:"-"}</h3>
                  </div>
                ))}
                <div className={styles.checkout_link_title}>
                  <h4>Общая стоимость:</h4>
                  <p className={styles.checkout_price}>{calculateTotalPrice()} сом</p>
                </div>
                <button onClick={handle}>Я принимал заказ</button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Cart;