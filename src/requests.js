const apiKey = "7868c5d099b48e4ba264a5cd4cfcc9b8";

const requests = { 
  hitTrending: `/trending/all/day?api_key=${apiKey}&language=en-US`,
  hitNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  hitTopRated: `/tv/top_rated?api_key=${apiKey}&language=en-US`,
  hitActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  hitComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  hitHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  hitRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  hitDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
  hitSciFictionMovies: `/discover/movie?api_key=${apiKey}&with_genres=878`,
  hitPopularMoviesToShowOnBanner: `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
};

// axios.get(`${baseURL}${requests.hitTrending}`).then((res) => console.log(res));

export default requests