import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useVegeRecipe } from '../../hooks/useFetch';
import './VegetarianRecipe.css';

const VegetarianRecipe = () => {
	const { vegeRecipe } = useVegeRecipe();

	return (
		<section className='vege'>
			<h2 className='section-title'>Vegetarian Recipes</h2>
			<div className='vege-grid'>
				{vegeRecipe.map((recipe) => (
					<div className='vege-item' key={recipe.id}>
						<img src={recipe.image} alt={recipe.image} />
						<button className='recipe-type'>
							{recipe.dishTypes}
						</button>
						<Link to={'/recipe-details/' + recipe.id}>
							<h3 className='recipe-title'>{recipe.title}</h3>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default VegetarianRecipe;
