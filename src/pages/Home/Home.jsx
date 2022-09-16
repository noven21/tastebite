import React from 'react';
import DessertRecipe from '../../components/DesertRecipes/DessertRecipe';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Nav/Navbar';

const Home = () => {
	return (
		<section>
			<Navbar />
			<Header />
			<DessertRecipe />
		</section>
	);
};

export default Home;
