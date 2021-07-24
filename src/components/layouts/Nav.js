import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const userLogout = () => {};

  return (
    <nav className='navbar bg-default'>
      <h3>MyBlog</h3>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/about'> About </Link>
        </li>
        <li>
          <Link to='#' onClick={() => userLogout()}>
            Logout{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
