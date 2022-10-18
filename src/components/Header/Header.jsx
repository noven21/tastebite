import React from 'react';
import { Link } from 'react-router-dom';
import { useHeaderRecipe } from '../../hooks/useFetch';
import './Header.css';

const Header = () => {
	const { randomRecipe, isLoading } = useHeaderRecipe();

	return (
		<header>
			{isLoading && <div>Loading Recipe...</div>}
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
