import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Nav/Navbar';
import Search from '../../components/Search/Search';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import './Searched.css';

const Searched = () => {
	const [searchedRecipe, setSearchedRecipe] = useState([]);
	const params = useParams();

	const getSearchedRecipe = async (name) => {
		const res = await fetch(
			` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}&number=9`
		);
		const recipes = await res.json();
		setSearchedRecipe(recipes.results);

		// console.log(recipes);
	};

	useEffect(() => {
		getSearchedRecipe(params.search);
	}, [params.search]);

	return (
		<section className='searched'>
			<Navbar />
			<Search />
			<Category />
			<div className='searched-grid'>
				{searchedRecipe.map((recipe) => (
					<div>
						<img src={recipe.image} alt={recipe.image} />
						<Link
							href='#recipe-details'
							to={'/recipe-details/' + recipe.id}
						>
							<h1>{recipe.title}</h1>
						</Link>
					</div>
				))}
			</div>
			<Footer />
		</section>
	);
};

export default Searched;
