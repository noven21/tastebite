import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

import Italian from '../../img/Italian-Cuisine.jpg';
import Chinese from '../../img/Chinese-Cuisine.jpg';
import French from '../../img/French-Cuisine.jpg';
import Greek from '../../img/Greek-Cuisine.jpg';
import Indian from '../../img/Indian-Cuisine.jpg';
import Japanese from '../../img/Japanese-Cuisine.jpg';
import Spanish from '../../img/Spanish-Cuisine.jpg';
import Thai from '../../img/Thai-Cuisine.jpeg';

const Category = () => {
	return (
		<section className='category'>
			<h2 className='section-title'>Popular Categories</h2>
			<div className='category-items'>
				<Link to={'/cuisine/Italian'}>
					<div className='category-item'>
						<img src={Italian} alt='Italian' />
						<h4>Italian</h4>
					</div>
				</Link>
				<Link to={'/cuisine/Chinese'}>
					<div className='category-item'>
						<img src={Chinese} alt='Chinese' />
						<h4>Chinese</h4>
					</div>
				</Link>
				<Link to={'/cuisine/French'}>
					<div className='category-item'>
						<img src={French} alt='French' />
						<h4>French</h4>
					</div>
				</Link>

				<Link to={'/cuisine/Indian'}>
					<div className='category-item'>
						<img src={Indian} alt='Indian' />
						<h4>Indian</h4>
					</div>
				</Link>

				<Link to={'/cuisine/Spanish'}>
					<div className='category-item'>
						<img src={Spanish} alt='Spanish' />
						<h4>Spanish</h4>
					</div>
				</Link>
				<Link to={'/cuisine/Thai'}>
					<div className='category-item'>
						<img src={Thai} alt='Thai' />
						<h4>Thai</h4>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Category;
