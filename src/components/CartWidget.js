// components/CartWidget.js
import React from 'react';
import { SlBasket } from 'react-icons/sl';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="navbar-item">
      <div className="buttons">
        <a className="button is-dark">
          <span className="icon">
            <SlBasket size={40} /> 
          </span>
          <span>{itemCount}</span>
        </a>
      </div>
    </div>
  );
};

export default CartWidget;