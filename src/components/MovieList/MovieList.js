import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import movies from '../../fakeDatabase';


class MovieList extends React.Component {
	render() {
		return (
			<div className="MovieList">
				{movies.map((movies) => <MovieCard key={movies.id} {...movies}/>)}

			</div>
		);
	}
}

export default MovieList;

// <MovieCard title={movies[0].title} text={movies[0].text} rating={movies[0].rating}/>