import React, { useState, useEffect } from 'react';
import './VegetarianRecipe.css';

const VegetarianRecipe = () => {
	const [vegeRecipe, setVegeRecipe] = useState([]);

	const getVegeRecipe = async () => {
		const check = localStorage.getItem('vege');

		if (check) {
			setVegeRecipe(JSON.parse(check));
		} else {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=3&tags=vegetarian`
			);

			const data = await res.json();
			console.log(data);
			localStorage.setItem('vege', JSON.stringify(data.recipes));
			setVegeRecipe(data.recipes);
		}
	};

	useEffect(() => {
		getVegeRecipe();
	}, []);

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
						<h3 className='recipe-title'>{recipe.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default VegetarianRecipe;
