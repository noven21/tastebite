import React from 'react';
import DessertRecipe from '../../components/DesertRecipes/DessertRecipe';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LatestRecipe from '../../components/LatestRecipe/LatestRecipe';
import Navbar from '../../components/Nav/Navbar';
import VegetarianRecipe from '../../components/Vege/VegetarianRecipe';

const Home = () => {
	return (
		<section>
			<Navbar />
			<Header />
			<DessertRecipe />
			<LatestRecipe />
			<VegetarianRecipe />
			<Footer />
		</section>
	);
};

export default Home;
