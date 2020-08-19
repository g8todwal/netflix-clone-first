import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../request';
import './Banner.css';

const Banner = () => {

	const [movie, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
            	request.data.results[
            	Math.floor(Math.random() * request.data.results.length - 1)
            	]
            );
            return request;
        }
        fetchData();
	}, [])

	console.log(movie)
	return (
		<header className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
					"https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
				)`,
				backgroundPosition: "center"
			}}
		>
			<div className="content">
				<h1 className="title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="buttons">
					<button className="button">Play</button>
					<button className="button">My List</button>
				</div>
				<h1 className="description">{movie?.overview}</h1>
			</div>
			<div className="fadeBottom"></div>
		</header>
	);
}

export default Banner;