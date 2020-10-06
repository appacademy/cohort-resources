import React from 'react';

const Error = ({location: { pathname }}) => (
  <section>
    <h2>Couldn't find route</h2>
    <img src="https://media1.giphy.com/media/OPU6wzx8JrHna/giphy.gif" />
  </section>
);

export default Error;