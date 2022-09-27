import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import LatestRecipe from '../../components/LatestRecipe/LatestRecipe';
import { BiLike, BiAlarm } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdFastfood } from 'react-icons/md';
import './RecipeDetails.css';

const RecipeDetails = () => {
	const [recipeDetails, setRecipeDetails] = useState({});
	const [activeTab, setActiveTab] = useState('');
	let params = useParams();

	const getRecipeDetails = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
		);
		const recipeData = await res.json();
		console.log(recipeData);
		setRecipeDetails(recipeData);
	};

	useEffect(() => {
		getRecipeDetails();
	}, [params.name]);

	return (
		<section>
			<Navbar />
			<div id='recipe-details' className='recipe-details'>
				<h2 className='lg-title-recipe'>{recipeDetails.title}</h2>
				<div className='flex-aic first-details'>
					<h4 className='mr-md'>
						created by {recipeDetails.sourceName}
					</h4>
					<div className='flex-aic mr-md '>
						<BiLike className='mr-sm color-grey' />{' '}
						<p>{recipeDetails.aggregateLikes}</p>
					</div>
					<div className='flex-aic '>
						<MdFastfood className='mr-sm color-grey' />{' '}
						<p>
							{recipeDetails.glutenFree === true
								? 'Gluten Free'
								: 'Not Gluten Free'}
						</p>
					</div>
				</div>

				<img
					className='recipe-details-img'
					src={recipeDetails.image}
					alt={recipeDetails.image}
				/>

				<div className='second-details'>
					<div className='flex-aic item-info'>
						<div className='mr-lg br-sm'>
							<h4 className='color-grey'>Price Per Serving</h4>
							<p>${recipeDetails.pricePerServing}</p>
						</div>
						<div className='mr-lg br-sm'>
							<h4 className='color-grey'>Ready in</h4>
							<div className='flex-aic'>
								<BiAlarm className='mr-sm' />
								<p>{recipeDetails.readyInMinutes} min</p>
							</div>
						</div>
						<div className='mr-lg br-sm'>
							<h4 className='color-grey'>Servings</h4>
							<div className='flex-aic'>
								<BsFillPeopleFill className='mr-sm' />
								<p>{recipeDetails.servings} People</p>
							</div>
						</div>
						<div className='br-sm mr-lg'>
							<h4 className='color-grey'>Dish Type</h4>
							<div className='flex-aic'>
								<MdFastfood className='mr-sm' />
								<p>{recipeDetails.dishTypes}</p>
							</div>
						</div>
						<div>
							<h4 className='color-grey'>Cuisine Type</h4>
							<div className='flex-aic'>
								<p>
									{recipeDetails.cuisines
										? recipeDetails.cuisines
										: 'N/A'}
								</p>
							</div>
						</div>
					</div>
					<p
						className='recipe-summary'
						dangerouslySetInnerHTML={{
							__html: recipeDetails.summary,
						}}
					></p>
				</div>
				<div>
					<div className='recipe-details-btn'>
						<button
							className={
								activeTab === 'instructions'
									? 'active'
									: 'btn-instructions'
							}
							onClick={() => setActiveTab('instructions')}
						>
							Instructions
						</button>
						<button
							className={
								activeTab === 'ingredients'
									? 'active'
									: 'btn-ingredient'
							}
							onClick={() => setActiveTab('ingredients')}
						>
							Ingredients
						</button>
					</div>
					<div className='recipe-details-main'>
						{activeTab === 'instructions' && (
							<div>
								{recipeDetails.analyzedInstructions.map(
									(ingredient) => (
										<ol key={ingredient.number}>
											{ingredient.steps.map((step) => (
												<li>{step.step}</li>
											))}
										</ol>
									)
								)}
							</div>
						)}
						:
						{activeTab === 'ingredients' && (
							<ul>
								{recipeDetails.extendedIngredients.map(
									(ingredient) => (
										<li key={ingredient.id}>{ingredient.original}</li>
									)
								)}
							</ul>
						)}
					</div>
				</div>
			</div>
			<LatestRecipe />
			<Footer />
		</section>
	);
};

export default RecipeDetails;
