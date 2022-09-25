import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Nav/Navbar';
import Search from '../../components/Search/Search';
import { BiAlarm } from 'react-icons/bi';
import './Cuisine.css';

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	const getCuisineRecipe = async (name) => {
		const res = await fetch(
			` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&cuisine=${name}/information&number=9`
		);
		const recipes = await res.json();
		// console.log(recipes);
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisineRecipe(params.type);
	}, [params.type]);

	return (
		<div className='cuisine'>
			<Navbar />
			<Search />
			<Category />
			<div className='cuisine-grid'>
				{cuisine.map((recipe) => (
					<div key={recipe.id}>
						<img src={recipe.image} alt='' />

						<h3 className='recipe-title'>{recipe.title}</h3>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Cuisine;
