import React, { useState, useEffect } from 'react';
import './DessertRecipe.css';

const DessertRecipe = () => {
	const [dessertRecipe, setDessertRecipe] = useState([]);

	const getDessertRecipe = async () => {
		const check = localStorage.getItem('dessert');

		if (check) {
			setDessertRecipe(JSON.parse(check));
		} else {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=3&tags=dessert`
			);

			const data = await res.json();
			localStorage.setItem('dessert', JSON.stringify(data.recipes));
			// console.log(data);
			setDessertRecipe(data.recipes);
		}
	};

	useEffect(() => {
		getDessertRecipe();
	}, []);

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
						<h3 className='recipe-title'>{recipe.title}</h3>
					</div>
				))}
			</section>
		</main>
	);
};

export default DessertRecipe;
