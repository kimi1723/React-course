import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);

	const fetchMoviesHandler = async () => {
		const URL = "https://swapi.dev/api/films";
		const res = await fetch(URL);
		const data = await res.json();

		const transformedMovies = data.results.map((movie) => {
			return {
				id: movie.episode_id,
				title: movie.title,
				openingText: movie.opening_crawl,
				releaseDate: movie.release_date,
			};
		});
		setMovies(transformedMovies);
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
