import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to={'/'}>
				<img src={Logo} alt='tastebite' />
			</Link>
			<Link to={'/explore-recipe'}>
				<button className='explore-btn'>Explore Recipes</button>
			</Link>
		</nav>
	);
};

export default Navbar;
