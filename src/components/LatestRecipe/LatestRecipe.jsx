import React, { useState, useEffect } from 'react';
import { BiAlarm } from 'react-icons/bi';
import FreshRecipe from '../FreshRecipe/FreshRecipe';
import './LatestRecipe.css';

const LatestRecipe = () => {
	const [latestRecipe, setLatestRecipe] = useState([]);

	const getLatestRecipe = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=1`
		);

		const data = await res.json();
		// console.log(data);
		setLatestRecipe(data.recipes);
	};

	useEffect(() => {
		getLatestRecipe();
	}, []);

	return (
		<section className='latest-recipe'>
			<h2 className='section-title'>Latest Recipe</h2>

			{latestRecipe.map((recipe) => (
				<div className='latest' key={recipe.id}>
					<div className='latest-item'>
						<img src={recipe.image} alt='' />
						<div>
							<button className='recipe-type'>
								{recipe.dishTypes}
							</button>
							<h2>{recipe.title}</h2>
							<p
								dangerouslySetInnerHTML={{
									__html: recipe.summary.slice(0, 200),
								}}
							></p>
							<div className='recipe-info'>
								<h4>
									<span className='text-sm'>created by </span>{' '}
									<span className='text-red'>
										{recipe.sourceName}
									</span>
								</h4>
								<span className='recipe-aic'>
									{recipe.readyInMinutes} min{' '}
									<BiAlarm className='info-icon' />{' '}
								</span>
							</div>
						</div>
					</div>
					<FreshRecipe />
				</div>
			))}
		</section>
	);
};

export default LatestRecipe;
