import React from "react";
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";
// import {getRecipeBySearchTerm} from "../../../actions/recipeActions";
import FormControl from "react-bootstrap/FormControl";
import {httpConfig} from "../../../utils/http-config";


export const SearchFormContent = () => {

	const searchTerm = (e) => {
		httpConfig.get('apis/recipe/')
			.then( reply => {
				if (reply.status === 200) {
					console.log(e);
				}
			})
	};



	return (
		<>
			<Form inline className="ml-auto" id="search-box">
				<input type="text" placeholder="Search for recipe" id="search-text" onChange={searchTerm}/>
				<Button className="btn btn-dark mx-4 px-4 py-2 text-white"
						variant="outline-dark"
						id="search-button"
						type="reset"
						onSubmit={searchTerm}
				>
					Search</Button>
			</Form>
		</>
	)
};