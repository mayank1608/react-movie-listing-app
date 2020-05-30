import React from 'react';
import Cards from './Cards';
import Movies from '../data/data';

const MovieList = () => {
	const getMovies = (movie) => {
		// console.log(movie)
		return(
			<Cards
			key = {movie.id}
			name={movie.name}
			imgsrc={movie.imgsrc}
			desc={movie.desc}
			tags={movie.tags}
			link={movie.link}			
			/>
		)
	}
	return(
		<div>
			<h2 className="heading">Bollywood Movie List 2020</h2>
			<div className="container">
				<div className="row">
					{Movies.map(getMovies)}
				</div>
			</div>
		</div>
	)
}

export default MovieList