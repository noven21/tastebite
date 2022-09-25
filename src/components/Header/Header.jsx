import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	const [randomRecipe, setRandomRecipe] = useState([]);
	const getRandomRecipe = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=1`
		);

		const data = await res.json();
		// console.log(data);
		setRandomRecipe(data.recipes);
	};

	useEffect(() => {
		getRandomRecipe();
	}, []);

	return (
		<header>
			{randomRecipe.map((recipe) => (
				<div className='header ' key={recipe.id}>
					<div className='header-img'>
						<img src={recipe.image} alt={recipe.image} />
					</div>
					<div className='header-desc'>
						<Link to={'/recipe-details/' + recipe.id}>
							<h1>{recipe.title}</h1>
						</Link>
						<button className='recipe-type'>
							{recipe.dishTypes}
						</button>
						<p
							dangerouslySetInnerHTML={{
								__html: recipe.summary.slice(0, 200),
							}}
						></p>
					</div>
				</div>
			))}
		</header>
	);
};

export default Header;
