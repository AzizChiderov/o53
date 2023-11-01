import React, { useState } from "react";
import ItemList from "./ItemList";
import Modal from "./Modal";

const Item = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const categories = [...new Set(props.items.map((item) => item.category))];

  return (
    <>
      {categories.map((category) => (
        <h1 key={category}>{category}</h1>
      ))}

      <ItemList items={props.items} openModal={openModal} ErrorImg={"https://i.1.creatium.io/35/fe/01/7200eaf8da4697c0142667237cc1bba5bc/1142x169q8/oblako_53_wordmark_white.png"} />
      {selectedItem && selectedItem.id && (
        <Modal
          selectedItem={selectedItem}
          handleOverlayClick={handleOverlayClick}
          closeModal={closeModal}
          ErrorImg={"https://i.1.creatium.io/35/fe/01/7200eaf8da4697c0142667237cc1bba5bc/1142x169q8/oblako_53_wordmark_white.png"}
        />
      )}
    </>
  );
};

export default Item;