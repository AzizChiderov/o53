import React, { useEffect, useState } from "react";
import "./style.css";
import { useRoute } from "./RouteContext.js";

export const Nav = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const links = [
    {
      "id": 0,
      "text": "Салаты",
      "route": "salads"
    },
    {
      "id": 1,
      "text": "Закуски",
      "route": "snacks"
    },
    {
      "id": 2,
      "text": "STREET FOOD",
      "route": "STREETFOOD"
    },
    {
      "id": 3,
      "text": "Боулы",
      "route": "bowls"
    },
    {
      "id": 4,
      "text": "Сеты на компанию",
      "route": "Sets_for_the_company"
    },
    {
      "id": 5,
      "text": "Гарнир",
      "route": "Side_dishes"
    },
    {
      "id": 6,
      "text": "Десерт",
      "route": "Dessert"
    },
    {
      "id": 7,
      "text": "Хлеб",
      "route": "Bread"
    },
    {
      "id": 8,
      "text": "Завтрак",
      "route": "Breakfast"
    },
    {
      "id": 9,
      "text": "Мясо",
      "route": "Meat"
    },
    {
      "id": 10,
      "text": "Курица",
      "route": "Chicken"
    },
    {
      "id": 11,
      "text": "Рыба",
      "route": "Fish"
    },
    {
      "id": 12,
      "text": "Паста",
      "route": "Paste"
    }
  ]
  const { setRoute } = useRoute();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavFixed(scrollPosition > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="nav"
      className={`nav ${isNavFixed ? "fixed" : ""}`}
      style={{
        transition: "top 0.3s ease-in-out",
      }}
    >
      <div className="link-wrapper">
        {links.map(({ id, text, route }) => (
          <button
            onClick={() => {
              setRoute(route);
              setActiveButton(id);
            }}
            className={`link ${activeButton === id ? "active" : ""}`}
            key={id}
          >
            {text}
          </button>
        ))}
          <a className="basket" href="/basket">
        <button>
          <img src="./Backet.png" alt="" />
        </button>
      </a>
      </div>
    </div>
  );
};

export default Nav;