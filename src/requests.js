const APIKEY = "api_key...";

const requests = {
    fetchTreding: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetFlixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchFiction:`/discover/tv?api_key=${APIKEY}&with_genres=10765`,
    fetchWarMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10752`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchWar:`/discover/tv?api_key=${APIKEY}&with_genres=10768`,
    fetchScienceFiction:`/discover/movie?api_key=${APIKEY}&with_genres=878`,
}

export default requests;
