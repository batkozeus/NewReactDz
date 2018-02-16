import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import MovieList from '../MovieList/MovieList';
import MovieForm from '../MovieForm/MovieForm';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header text="Movie Mate"/>
				<AppBody>
					<MovieList />
					<MovieForm title="Title" description="Description" rating="Rating" />
				</AppBody>
			</div>
		);
	}
}

export default App;