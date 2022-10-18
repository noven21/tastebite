import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	getDessertRecipeApi,
	getFreshRecipeApi,
	getHeaderRecipeApi,
	getVegeRecipeApi,
} from '../proxy/getRecipeDetail';

// useDessertRecipe
export const useDessertRecipe = () => {
	const [dessertRecipe, setDessertRecipe] = useState([]);

	const getDessertRecipe = async () => {
		const check = localStorage.getItem('dessert');

		if (check) {
			setDessertRecipe(JSON.parse(check));
		} else {
			const res = await fetch(getDessertRecipeApi);

			const data = await res.json();
			localStorage.setItem('dessert', JSON.stringify(data.recipes));
			// console.log(data);
			setDessertRecipe(data.recipes);
		}
	};

	useEffect(() => {
		getDessertRecipe();
	}, []);

	return { dessertRecipe };
};

// useFreshRecipe
export const useFreshRecipe = () => {
	const [freshRecipe, setFreshRecipe] = useState([]);

	const getFreshRecipe = async () => {
		const check = localStorage.getItem('fresh');

		if (check) {
			setFreshRecipe(JSON.parse(check));
		} else {
			const res = await fetch(getFreshRecipeApi);

			const data = await res.json();
			localStorage.setItem('fresh', JSON.stringify(data.recipes));

			console.log(data);
			setFreshRecipe(data.recipes);
		}
	};

	useEffect(() => {
		getFreshRecipe();
	}, []);

	return { freshRecipe };
};

// useHeaderRecipe
export const useHeaderRecipe = () => {
	const [randomRecipe, setRandomRecipe] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getRandomRecipe = async () => {
		const res = await fetch(getHeaderRecipeApi);

		const data = await res.json();
		// console.log(data)
		setIsLoading(false);
		setRandomRecipe(data.recipes);
	};

	useEffect(() => {
		getRandomRecipe();
	}, []);

	return {
		randomRecipe,
		isLoading,
	};
};

// useSearch
export const useSearched = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(input);

		navigate('/explore-recipe/searched/' + input);
	};

	return { input, setInput, handleSubmit };
};

// useVegeRecipe
export const useVegeRecipe = () => {
	const [vegeRecipe, setVegeRecipe] = useState([]);

	const getVegeRecipe = async () => {
		const check = localStorage.getItem('vege');

		if (check) {
			setVegeRecipe(JSON.parse(check));
		} else {
			const res = await fetch(getVegeRecipeApi);

			const data = await res.json();
			console.log(data);
			localStorage.setItem('vege', JSON.stringify(data.recipes));
			setVegeRecipe(data.recipes);
		}
	};

	useEffect(() => {
		getVegeRecipe();
	}, []);

	return { vegeRecipe };
};

// useCuisineRecipe
export const useCuisineRecipe = () => {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	const getCuisineRecipe = async (name) => {
		const res = await fetch(
			` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&cuisine=${name}/information&number=9`
		);
		const recipes = await res.json();
		// console.log(recipes);
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisineRecipe(params.type);
	}, [params.type]);

	return { cuisine };
};

// useRecipeDetails
export const useRecipeDetails = () => {
	const [recipeDetails, setRecipeDetails] = useState({});
	const [activeTab, setActiveTab] = useState('');
	let params = useParams();

	const getRecipeDetails = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
		);
		const recipeData = await res.json();
		// console.log(recipeData);
		setRecipeDetails(recipeData);
	};

	useEffect(() => {
		getRecipeDetails();
	}, [params.name]);

	return { recipeDetails, activeTab, setActiveTab };
};

// useSearched

export const useSearchedRecipe = () => {
	const [searchedRecipe, setSearchedRecipe] = useState([]);
	const params = useParams();

	const getSearchedRecipe = async (name) => {
		const res = await fetch(
			` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}&number=9`
		);
		const recipes = await res.json();
		setSearchedRecipe(recipes.results);

		// console.log(recipes);
	};

	useEffect(() => {
		getSearchedRecipe(params.search);
	}, [params.search]);

	return { searchedRecipe };
};
