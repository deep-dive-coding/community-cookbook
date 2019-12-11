// import React, {Component} from 'react';
// import './RecipeSubmission.css';
// //
// // export const RecipeSubmission = (props) => {
// // class RecipeSubmission extends Component {
// // 	static defaultProps = {
// // 		onClose() {
// // 		},
// // 		onSave() {
// // 		}
// // 	};
// //
// // 	constructor(props) {
// // 		super(props);
// // 		this.state = {
// // 			title: '',
// // 			instructions: "",
// // 			ingredients: [''],
// // 			img: ''
// // 		};
// //
// // 		this.handleChange = this.handleChange.bind(this);
// // 		this.handleNewIngredient = this.handleNewIngredient.bind(this);
// // 		this.handleChangeIng = this.handleChangeIng.bind(this);
// // 		this.handleSubmit = this.handleSubmit.bind(this);
// // 	}
// //
// // 	handleChange(e) {
// // 		this.setState({[e.target.name]: e.target.value});
// // 	}
// //
// // 	handleNewIngredient(e) {
// // 		const {ingredients} = this.state;
// // 		this.setState({ingredients: [...ingredients, '']});
// // 	}
// //
// // 	handleChangeIng(e) {
// // 		const index = Number(e.target.name.split('-')[1]);
// // 		const ingredients = this.state.ingredients.map((ing, i) => (
// // 			i === index ? e.target.value : ing
// // 		));
// // 		this.setState({ingredients});
// // 	}
// //
// // 	handleSubmit(e) {
// // 		e.preventDefault();
// // 		this.props.onSave({...this.state});
// // 		this.setState({
// // 			title: '',
// // 			instructions: '',
// // 			ingredients: [''],
// // 			img: ''
// // 		})
// // 	}
// //
// // 	render() {
// // 		const {title, instructions, img, ingredients} = this.state;
// // 		const {onClose} = this.props;
// // 		let submissions = ingredients.map((ing, i) => (
// // 			<div className="recipe-form-line" key={`ingredient-${i}`}>
// // 				<label> {i + 1}.< submission type="text" name={`ingredient-${i}`} value={ing} size={45} autoComplete="off"
// // 						placeholder=" Ingredient" onChange={this.handleChangeIng}/></label>
// // 			</div>));
//
// return (
// 	<div className="recipe-form-container">
// 		<form className='recipe-form' onSubmit={this.handleSubmit}>
// 			<button type="button" className="close-button" onClick={onClose}>X</button>
//
// 			<div className='recipe-form-line'><label htmlFor='recipe-title-submission'> Title </label>
// 				<submission id='recipe-title-submission' key='title' name='title' type='text' value={title}
// 								size={42} autoComplete="off" onChange={this.handleChange}/>
// 			</div>
// 			<label htmlFor='recipe-instructions-submission' style={{marginTop: '5px'}}>Instructions</label>
//
// < textarea
// key='instructions'
// id='recipe-instructions-submission'
// type='Instructions'
// name='instructions'
// rows='8'
// cols='50'
// autoComplete='off'
// value={instructions}
// onChange={this.handleChange}/> {submissions}
//
// <button type="button" onClick={this.handleNewIngredient} className="buttons">+</button>
//
// 			<div className='recipe-form-line'><label htmlFor='recipe-img-submission'>Image Url</label>
// 				<submission id='recipe-img-submission' type='text' placeholder='' name='img' value={img} size={36} autoComplete='off' onChange={this.handleChange}/>
// 			</div>
//
// 				<button type="submit" className="buttons" style={{alignSelf: 'flex-end', marginRight: 0}}>SAVE</button>
//
// 			</form>
// 		</div>;
