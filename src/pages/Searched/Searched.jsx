import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Searched = () => {
	const [searchedRecipe, setSearchedRecipe] = useState([]);
	const params = useParams();

	const getSearchedRecipe = async (name) => {
		const res = await fetch(
			` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}`
		);
		const recipes = await res.json();
		setSearchedRecipe(recipes.results);

		// console.log(recipes);
	};

	useEffect(() => {
		getSearchedRecipe(params.search);
	}, [params.search]);

	return (
		<div>
			{searchedRecipe.map((recipe) => (
				<h1>{recipe.title}</h1>
			))}
		</div>
	);
};

export default Searched;
