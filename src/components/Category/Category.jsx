import React from 'react';
import './Category.css';

import CategoryItem from './CategoryItem/CategoryItem';

const Category = () => {
	return (
		<section className='category'>
			<h2 className='section-title'>Popular Categories</h2>
			<CategoryItem />
		</section>
	);
};

export default Category;
