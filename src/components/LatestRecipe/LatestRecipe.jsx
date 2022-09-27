import React from 'react';
import { BiAlarm } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useHeaderRecipe } from '../../hooks/useFetch';
import FreshRecipe from '../FreshRecipe/FreshRecipe';
import './LatestRecipe.css';

const LatestRecipe = () => {
	const { randomRecipe } = useHeaderRecipe();

	return (
		<section className='latest-recipe'>
			<h2 className='section-title'>Latest Recipe</h2>

			{randomRecipe.map((recipe) => (
				<div className='latest' key={recipe.id}>
					<div className='latest-item'>
						<img src={recipe.image} alt='' />
						<div>
							<button className='recipe-type'>
								{recipe.dishTypes}
							</button>
							<Link
								href='#recipe-details'
								to={'/recipe-details/' + recipe.id}
							>
								<h2>{recipe.title}</h2>
							</Link>
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
