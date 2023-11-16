import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="notification is-dark">
        <h1 className="title is-3">{greeting}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;