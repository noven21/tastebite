// getDessertRecipe Api
export const getDessertRecipeApi = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=3&tags=dessert`;

// getFreshRecipe Api
export const getFreshRecipeApi = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=6`;

// getHeaderRecipeApi
export const getHeaderRecipeApi = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=1`;

// getVegeRecipeApi
export const getVegeRecipeApi = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=3&tags=vegetarian`;
