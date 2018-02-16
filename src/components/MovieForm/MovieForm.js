import React from 'react';
import './MovieForm.css';


class MovieForm extends React.Component {
	render() {
		const MovieForm__option = [1,2,3,4,5,6,7,8,9,10];
		const { title, description,rating } = this.props;

		return (
			<form className="MovieForm">
				<label className="MovieForm__label">{title} 
					<input className="MovieForm__input" type="text"/>
				</label>
				<label className="MovieForm__label">{description} 
					<textarea className="MovieForm__txtarea" rows="8"></textarea>
				</label>
				<label className="MovieForm__label">{rating} 
					<select className="MovieForm__input">
						{MovieForm__option.map( option => <option value={option}>{option}</option> )}
					</select>
				</label>
				<button className="MovieForm__submit">submit</button>
			</form>
		);
	}
}

export default MovieForm;