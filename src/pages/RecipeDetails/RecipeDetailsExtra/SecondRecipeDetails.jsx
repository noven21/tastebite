import React from 'react';
import { useRecipeDetails } from '../../../hooks/useFetch';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiAlarm } from 'react-icons/bi';
import { MdFastfood } from 'react-icons/md';

import '../RecipeDetails.css';
const SecondRecipeDetails = () => {
	const { recipeDetails } = useRecipeDetails();

	return (
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
	);
};

export default SecondRecipeDetails;
