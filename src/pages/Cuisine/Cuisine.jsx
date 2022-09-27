import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Nav/Navbar';
import Search from '../../components/Search/Search';

import './Cuisine.css';
import { useCuisineRecipe } from '../../hooks/useFetch';

const Cuisine = () => {
	const { cuisine } = useCuisineRecipe();

	return (
		<div className='cuisine'>
			<Navbar />
			<Search />
			<Category />
			<div className='cuisine-grid'>
				{cuisine.map((recipe) => (
					<div key={recipe.id}>
						<img src={recipe.image} alt='' />

						<Link to={'/recipe-details/' + recipe.id}>
							<h3 className='recipe-title'>{recipe.title}</h3>
						</Link>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Cuisine;
