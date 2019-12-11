import React from 'react';
import Card from "react-bootstrap/Card";
import logo from "./cap-logo-4.png";

export const RecipeCard = ({recipe}) => {
	return (

		<Card>
			<a href="../recipe-page/RecipePage.js">
			<Card.Body className="row my-3 mx-3">
				<div className="col-3">
					<Card.Img src={recipe.receipeImageUrl ? recipe.receipeImageUrl : ({logo})} alt="placeholder"/>
				</div>
				<div className="col-9" data-categoryId={recipe.recipeCategoryId}>
					<Card.Title> {recipe.recipeName}</Card.Title>
					<Card.Subtitle>Cooktime: {recipe.recipeMinutes} mins.</Card.Subtitle>
					<Card.Text>Description: {recipe.recipeDescription}</Card.Text>

				</div>
			</Card.Body>
			</a>
		</Card>
	);
};