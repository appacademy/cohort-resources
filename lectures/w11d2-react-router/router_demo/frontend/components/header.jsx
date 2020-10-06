import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderDetailContainer from "./header_detail/header_detail_container";

const Header = (props) => {
  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      {/* <Link to="/" className="button"> Home </Link> 
      <Link to="/todos" className="button"> Todos </Link>
      <Link to="/todos/new" className="button"> New Todo </Link> */}

      <NavLink exact={true} activeClassName="curr" to="/" className="button"> Home </NavLink> 
      <NavLink exact={true} activeClassName="curr" to="/todos" className="button"> Todos </NavLink>
      <NavLink exact={true} activeClassName="curr" to="/todos/new" className="button"> New Todo </NavLink>
      <HeaderDetailContainer />
    </header>
  );
};

export default Header;
