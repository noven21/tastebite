import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { FiArrowRight } from 'react-icons/fi';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to={'/'}>
				<img src={Logo} alt='tastebite' />
			</Link>
			<Link to={'/explore-recipe'}>
				<button className='explore-btn'>
					Explore Recipes <FiArrowRight />{' '}
				</button>
			</Link>
		</nav>
	);
};

export default Navbar;
