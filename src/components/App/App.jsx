import React from 'react';
import v4 from 'uuid';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import MovieList from '../MovieList/MovieList';
import MovieForm from '../MovieForm/MovieForm';
import movies from '../../fakeDatabase';

class App extends React.Component {
	state = {
		movieCards: movies
	}

	addMovieCard = (form) => {

		const singleMovieCard = {
			id: v4(),
			title: form.inputTitleValue,
			text: form.inputDescrValue,
			rating: form.inputRatingValue,
			genre: form.inputGenreValue
		};

		this.setState({
			movieCards: [...this.state.movieCards, singleMovieCard]
		})
	}

	deleteMovieCard = (id) => {
		console.log(id);

		this.setState({
			movieCards: this.state.movieCards.filter(card => card.id !== id)
		})
	}

	render() {
		const { movieCards } = this.state;
		return (
			<div className="App">
				<Header text="Movie Mate"/>
				<AppBody>
					<MovieList movieCards={movieCards}  onToDoClick={this.deleteMovieCard} />
					<MovieForm title="Title" description="Description" rating="Rating" onFormSubmit={this.addMovieCard} />
				</AppBody>
			</div>
		);
	}
}

export default App;