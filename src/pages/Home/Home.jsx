import React from 'react';
import DessertRecipe from '../../components/DesertRecipes/DessertRecipe';
import Header from '../../components/Header/Header';
import LatestRecipe from '../../components/LatestRecipe/LatestRecipe';
import Navbar from '../../components/Nav/Navbar';

const Home = () => {
	return (
		<section>
			<Navbar />
			<Header />
			<DessertRecipe />
			<LatestRecipe />
		</section>
	);
};

export default Home;
