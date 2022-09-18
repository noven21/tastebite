import React, { useEffect, useState } from 'react';
import './FreshRecipe.css';

const FreshRecipe = () => {
	const [freshRecipe, setFreshRecipe] = useState([]);

	const getFreshRecipe = async () => {
		const check = localStorage.getItem('fresh');

		if (check) {
			setFreshRecipe(JSON.parse(check));
		} else {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=6`
			);

			const data = await res.json();
			localStorage.setItem('fresh', JSON.stringify(data.recipes));

			console.log(data);
			setFreshRecipe(data.recipes);
		}
	};

	useEffect(() => {
		getFreshRecipe();
	}, []);

	return (
		<section className='fresh-recipe'>
			<h2 className='section-title'>Fresh Recipes</h2>
			<div className='fresh-recipe__grid'>
				{freshRecipe.map((recipe) => (
					<div key={recipe.id} className='fresh-recipe__item'>
						<img src={recipe.image} alt='' />

						<h3>{recipe.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default FreshRecipe;
