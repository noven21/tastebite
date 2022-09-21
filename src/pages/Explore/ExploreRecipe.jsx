import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import Category from '../../components/Category/Category';

const ExploreRecipe = () => {
	return (
		<div>
			<Navbar />
			<Search />
			<Category />
		</div>
	);
};

export default ExploreRecipe;
