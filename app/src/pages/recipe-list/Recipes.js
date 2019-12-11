import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from 'react';
import {getAllRecipe} from "../../shared/actions/recipeActions";
import {RecipeCard} from "./RecipeCard";

// destructuring searchTerm from the props that this component receives
export const Recipes = ({searchTerm}) => {

	// assigning value of filtered recipes to recipes
	const recipesState = useSelector(state => (state.recipe ? state.recipe : []));

	const filteredRecipes = recipesState.filter(recipe => recipe.recipeName.includes(searchTerm) || recipe.recipeIngredients.includes(searchTerm) || recipe.recipeStep.includes(searchTerm));

	function sideEffects() {
		dispatch(getAllRecipe());
	}

	const sideEffectsInputs = [];

	useEffect(sideEffects, sideEffectsInputs);

	return (
		<>
				<div>
					{filteredRecipes.map(recipe => <RecipeCard key={recipe.recipeId} recipe={recipe}/>
					)}
				</div>
		</>
	)
};