import React from 'react';

const TeaIndexItem = ({ tea }) => (
  <li>
    <ul>
      <li>{tea.flavor}</li>
      <li>{tea.amount}</li>
    </ul>
  </li>
);

export default TeaIndexItem;
