import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = props => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        MyBlog

        {/* {props.title} */}

      </h1>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/about'> About </Link>
        </li>
      </ul>
    </nav>
  );

}

// Nav.defaultProps = {
//   title: 'Github Finder'
// }

// Nav.propTypes = {
//   title: PropTypes.string.isRequired
// }

export default Nav;
