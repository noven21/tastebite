import React from 'react';

import Navbar from '../../components/Nav/Navbar';
import Search from '../../components/Search/Search';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import './Searched.css';
import { useSearchedRecipe } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Searched = () => {
	const { searchedRecipe } = useSearchedRecipe();

	return (
		<section className='searched'>
			<Navbar />
			<Search />
			<Category />
			<div className='searched-grid'>
				{searchedRecipe.map((recipe) => (
					<div key={recipe.id}>
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
