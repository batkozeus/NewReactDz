import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
	static propTypes = {
		movieCards: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			genre: PropTypes.arrayOf.isRequired
		}).isRequired).isRequired,
		onToDoClick: PropTypes.func.isRequired
	};

	render() {
		const { movieCards, onToDoClick } = this.props;
		return (
			<div className="MovieList">
				{movieCards.map((movies) => <MovieCard key={movies.id} onClick={() => {onToDoClick(movies.id);}} {...movies}/>)}
			</div>
		);
	}
}

export default MovieList;

// <MovieCard title={movies[0].title} text={movies[0].text} rating={movies[0].rating}/>

// {movies.map((movies) => <MovieCard key={movies.id} onClick={() => {onToDoClick(movies.id);}} {...movies}/>)}