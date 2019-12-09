import {httpConfig} from "../../../src/shared/utils/http-config";

export const getAllInteractions = () => async (dispatch) => {
 		const payload = await httpConfig.get("/apis/interaction/");
 		dispatch({type: "GET_ALL_INTERACTIONS", payload : payload.data});
 };

export const getRecipeInteraction = (recipeId) => async dispatch => {
	const {data} = await httpConfig('/apis/recipe/?interactionRecipeId=${recipeId}');
	dispatch({type: "GET_RECIPE_INTERACTIONS", payload: data})
};

export const getUserInteraction = (userId) => async dispatch => {
	const {data} = await httpConfig('/apis/recipe/?interactionUserId=${userId}');
	dispatch({type: "GET_USER_INTERACTIONS", payload: data})
};

export const getInteractionByInteractionRecipeIdAndInteractionUserId = (recipeIdAndUserId) => async dispatch => {
	const {data} = await httpConfig('/apis/recipe/?interactionUserId=${userId}');
	dispatch({type: "GET_SPECIFIC_INTERACTION", payload: data})

};