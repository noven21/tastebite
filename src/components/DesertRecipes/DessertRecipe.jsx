import React from 'react';
import { Link } from 'react-router-dom';
import './DessertRecipe.css';
import { useDessertRecipe } from '../../hooks/useFetch';

const DessertRecipe = () => {
	const { dessertRecipe } = useDessertRecipe();

	return (
		<main className='dessert'>
			<h2 className='section-title'>Deilicious Dessert</h2>
			<section className='dessert-grid'>
				{dessertRecipe.map((recipe) => (
					<div key={recipe.id}>
						<div className='dessert-item'>
							<img src={recipe.image} alt={recipe.image} />
							<div className='dessert-overlay'></div>
						</div>
						<button className='recipe-type'>
							{recipe.dishTypes}
						</button>
						<Link to={'/recipe-details/' + recipe.id}>
							<h3 className='recipe-title'>{recipe.title}</h3>
						</Link>
					</div>
				))}
			</section>
		</main>
	);
};

export default DessertRecipe;
