import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const URL = "https://swapi.dev/api/films";
			const res = await fetch(URL);

			if (!res.ok) {
				throw new Error("Something went wrong");
			}

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
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
				{isLoading && <p>Loading..</p>}
				{!isLoading && error && <p>{error}</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
