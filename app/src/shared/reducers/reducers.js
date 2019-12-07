import {combineReducers} from "redux";
import UserReducer from "./UserReducer";
import interactionReducer from "./interactionReducer";
import recipeReducer from "./doWeNeedThis";

export default combineReducers({
	user:UserReducer,
	interactions: interactionReducer,
	// recipe: recipeReducer,
})