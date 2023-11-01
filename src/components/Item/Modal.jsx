import React, { useState, useEffect } from "react";

const Modal = ({ selectedItem, handleOverlayClick, closeModal, ErrorImg }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [Basket, setBasket] = useState([]);

  useEffect(() => {
    // Загружаем элементы корзины из localStorage при монтировании компонента
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setBasket(cartItems);

    // Проверяем, содержится ли выбранный элемент в корзине из localStorage
    setIsButtonClicked(isItemInBasket(selectedItem, cartItems));
  }, [selectedItem]);

  const handleImageError = (event) => {
    event.target.src = ErrorImg;
  };

  const addBasket = (item) => {
    if (isButtonClicked || isItemInBasket(item, Basket)) {
      return;
    }
    setIsButtonClicked(true);
    item.quantity = 1;
    const updatedBasket = [...Basket, item];
    setBasket(updatedBasket);
    localStorage.setItem("cartItems", JSON.stringify(updatedBasket));
  };

  const isItemInBasket = (item, basket) => {
    return basket.some((cartItem) => cartItem.id === item.id);
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <img
          src={selectedItem.photo}
          alt={selectedItem.name}
          onError={handleImageError}
        />
        <h2 className="font_smaller">{selectedItem.name}</h2>
        <div className="modal_h">
        {selectedItem.ingredients && (
          <p className="font_smaller">
           <span className="subtitle">Состав:</span>  <br /> {selectedItem.ingredients}
          </p>
        )}
        {selectedItem.description && (
          <p className="font_smaller"><span className="subtitle"></span> <br /> {selectedItem.description}</p>
        )}
         {selectedItem.ingredients2 && (
          <p className="font_smaller">
            Состав: {selectedItem.ingredients2.join(", ")}
          </p>
        )}
        {selectedItem.description2 && (
          <p className="font_smaller">
            {selectedItem.description2}
          </p>
        )}
        </div>
        {selectedItem.weight && (
          <p className="font_smaller">Вес: {selectedItem.weight} гр</p>
        )}
        <p className="font_green">Цена: {selectedItem.price} сом</p>
        
        {selectedItem.count && (
          <p className="font_smaller">Количество: {selectedItem.count} шт</p>
        )}
        {selectedItem.name2 && (
          <h2 className="font_smaller">{selectedItem.name2}</h2>
        )}
        {selectedItem.price2 && (
          <p className="font_green">Цена: {selectedItem.price2} сом</p>
        )}
     <button
          disabled={isButtonClicked}
          className={"addbasket"}
          onClick={() => addBasket(selectedItem)}
        >
          {isButtonClicked ? "Уже в корзине" : "Добавить в корзину"}
        </button>
        {selectedItem.weight2 && (
          <p className="font_smaller">Вес: {selectedItem.weight2} гр</p>
        )}
        {selectedItem.ingr && selectedItem.ingr.length > 0 ? (
          <table>
            <tbody>
              {selectedItem.ingr.map((ingrItem, index) => (
                <tr key={index}>
                  <td className="tab-item">{ingrItem.name}</td>
                  {ingrItem.weight && (
                    <td className="tab-item">{ingrItem.weight} гр</td>
                  )}
                  {ingrItem.count && (
                    <td className="tab-item">{ingrItem.count} шт</td>
                  )}
                  <td className="tab-item">{ingrItem.price} сом</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;