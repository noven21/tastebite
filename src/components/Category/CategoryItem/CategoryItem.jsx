import React from 'react';
import { Link } from 'react-router-dom';
import '.././Category.css';

import Italian from '../../../assets/img/Italian-Cuisine.jpg';
import Chinese from '../../../assets/img/Chinese-Cuisine.jpg';
import French from '../../../assets/img/French-Cuisine.jpg';

import Indian from '../../../assets/img/Indian-Cuisine.jpg';

import Spanish from '../../../assets/img/Spanish-Cuisine.jpg';
import Thai from '../../..//assets/img/Thai-Cuisine.jpeg';

const CategoryItem = () => {
	return (
		<div className='category-items'>
			<Link to={'/explore-recipe/cuisine/Italian'}>
				<div className='category-item'>
					<img src={Italian} alt='Italian' />
					<h4>Italian</h4>
				</div>
			</Link>
			<Link to={'/explore-recipe/cuisine/Chinese'}>
				<div className='category-item'>
					<img src={Chinese} alt='Chinese' />
					<h4>Chinese</h4>
				</div>
			</Link>
			<Link to={'/explore-recipe/cuisine/French'}>
				<div className='category-item'>
					<img src={French} alt='French' />
					<h4>French</h4>
				</div>
			</Link>

			<Link to={'/explore-recipe/cuisine/Indian'}>
				<div className='category-item'>
					<img src={Indian} alt='Indian' />
					<h4>Indian</h4>
				</div>
			</Link>

			<Link to={'/explore-recipe/cuisine/Spanish'}>
				<div className='category-item'>
					<img src={Spanish} alt='Spanish' />
					<h4>Spanish</h4>
				</div>
			</Link>
			<Link to={'/explore-recipe/cuisine/Thai'}>
				<div className='category-item'>
					<img src={Thai} alt='Thai' />
					<h4>Thai</h4>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
