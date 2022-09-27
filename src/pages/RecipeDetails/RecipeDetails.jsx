import React from 'react';

import Navbar from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import LatestRecipe from '../../components/LatestRecipe/LatestRecipe';
import { BiLike } from 'react-icons/bi';
import { MdFastfood } from 'react-icons/md';
import './RecipeDetails.css';
import { useRecipeDetails } from '../../hooks/useFetch';
import RecipeDetailsExtra from './RecipeDetailsExtra/RecipeDetailsExtra';
import SecondRecipeDetails from './RecipeDetailsExtra/SecondRecipeDetails';

const RecipeDetails = () => {
	const { recipeDetails } = useRecipeDetails();

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

				<SecondRecipeDetails />
				<RecipeDetailsExtra />
			</div>
			<LatestRecipe />
			<Footer />
		</section>
	);
};

export default RecipeDetails;
