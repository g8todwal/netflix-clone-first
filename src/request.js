const API_KEY = "599f963205c8e75c104be2eedbc79c49";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=14`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=36`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
}

export default requests;