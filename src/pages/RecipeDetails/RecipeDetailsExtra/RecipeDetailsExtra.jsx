import React from 'react';
import { useRecipeDetails } from '../../../hooks/useFetch';
import '../RecipeDetails.css';

const RecipeDetailsExtra = () => {
	const { recipeDetails, activeTab, setActiveTab } =
		useRecipeDetails();

	return (
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
						activeTab === 'ingredients' ? 'active' : 'btn-ingredient'
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
							(ingredient, index) => (
								<ol key={index}>
									{ingredient.steps.map((step, index) => (
										<li key={index}>{step.step}</li>
									))}
								</ol>
							)
						)}
					</div>
				)}
				:
				{activeTab === 'ingredients' && (
					<ul>
						{recipeDetails.extendedIngredients.map((ingredient) => (
							<li key={ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default RecipeDetailsExtra;
