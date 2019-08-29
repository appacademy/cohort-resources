import React from 'react';

const TeaIndexItem = ({ tea }) => {
  return (
    <ul>
      <li>This is tea number: {tea.id}</li>
      <li>This is a: {tea.type} tea</li>
      <li>It costs {tea.amount}</li>
    </ul>
  );
}; 

export default TeaIndexItem;