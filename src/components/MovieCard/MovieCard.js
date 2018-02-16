import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';


class MovieCard extends React.Component {
	render() {
		const { title, text, rating, genre } = this.props;

		return (
			<div className="MovieCard">
				<button className="MovieCard__btn MovieCard__btn--del">Delete</button>
				<div className="MovieInfo__info">
					<h2 className="MovieInfo__title">{title}</h2>
					<p className="MovieInfo__descr">{text}</p>
					<p className="MovieInfo__rating">Rating: {rating}/10</p>
				</div>
				<ul className="ChipsList">
					{genre.map(genre=><li className="ChipsList__item">{genre}</li>)}
				</ul>
			</div>
		);
	}
}

MovieCard.PropTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	genre: PropTypes.string.isRequired,
}

export default MovieCard;