import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div class="head" >
    <h1>Ravi Ranjan</h1>
    <nav>
    <Link to="/"> Home </Link>
    <Link to="/About"> About </Link>
    <Link to="/Contact"> contact </Link>
    </nav> 
    </div>
  )
}

export default Header