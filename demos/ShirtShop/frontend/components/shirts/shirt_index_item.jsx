import React from 'react';

const ShirtIndexItem = (props) => {
  return (
    <>
      <li>{props.shirt.style.toUpperCase()}</li>
      <li>${props.shirt.price}</li>
    </>
  )
};

export default ShirtIndexItem;