import React from 'react';
import Logo from '../../img/logo.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img src={Logo} alt='tastebite' />
		</nav>
	);
};

export default Navbar;
