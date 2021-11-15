import React from 'react';

const Home = (props) => {
  console.log(props)
  return(
  <section className="home">
      <h1><font color="white">This is The Super Cool Home Page!</font></h1>
      <h1 className="sub-header">[ Home Component ]</h1>
  </section>
  );
};

export default Home;
