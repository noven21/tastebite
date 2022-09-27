import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-item'>
				<p>
					&copy; 2022
					<span className='text-bold'> N.L</span> ,all rights reserved
				</p>
			</div>
			<div>
				<p>
					Powered by{' '}
					<span className='text-bold'>spoonacular API</span>{' '}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
