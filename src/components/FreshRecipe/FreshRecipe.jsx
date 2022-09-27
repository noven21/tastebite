import { Link } from 'react-router-dom';
import { useFreshRecipe } from '../../hooks/useFetch';

import './FreshRecipe.css';

const FreshRecipe = () => {
	const { freshRecipe } = useFreshRecipe();

	return (
		<section className='fresh-recipe'>
			<h2 className='section-title'>Fresh Recipes</h2>
			<div className='fresh-recipe__grid'>
				{freshRecipe.map((recipe) => (
					<div key={recipe.id} className='fresh-recipe__item'>
						<img src={recipe.image} alt='' />
						<Link
							href='#recipe-details'
							to={'/recipe-details/' + recipe.id}
						>
							<h3>{recipe.title}</h3>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default FreshRecipe;
