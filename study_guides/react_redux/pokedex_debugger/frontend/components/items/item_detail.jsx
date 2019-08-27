import React from 'react';

const ItemDetail = ({ item }) => (
  <ul>
    <li><h3>{item.name}</h3></li>
    <li>Happiness: {item.happiness}</li>
    <li>Price: &#36;{item.price}</li>
  </ul>
);

export default ItemDetail;
