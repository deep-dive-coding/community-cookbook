import React from 'react';
import Card from "react-bootstrap/Card";

export const RecipeCard = ({recipe}) => {
	return (
		<Card className="container">
			<Card.Body className="row">
				<div className="col-3">
					<Card.Img src="cap-logo-4.png" alt="placeholder"/>
				</div>
				<div className="col-9">
					<Card.Title> {recipe.recipeName}</Card.Title>
					<Card.Subtitle>Cooktime: {recipe.recipeMinutes} mins.</Card.Subtitle>
					<Card.Text>{recipe.recipeDescription}</Card.Text>
				</div>
			</Card.Body>
		</Card>
	);
};