import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import ExploreRecipe from '../../pages/Explore/ExploreRecipe';
import Searched from '../../pages/Searched/Searched';
import Cuisine from '../../pages/Cuisine/Cuisine';
import RecipeDetails from '../../pages/RecipeDetails/RecipeDetails';

const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/explore-recipe' element={<ExploreRecipe />} />
			<Route path='/searched/:search' element={<Searched />} />
			<Route path='/cuisine/:type' element={<Cuisine />} />
			<Route
				path='/recipe-details/:name'
				element={<RecipeDetails />}
			/>
		</Routes>
	);
};

export default Pages;
