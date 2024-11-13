import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "./components/Header";
import Movie from "./components/Movie";
import "./App.css";

const setSearchTerm = (term) => ({
  type: "SET_SEARCH_TERM",
  payload: term,
});

const setMovies = (movies) => ({
  type: "SET_MOVIES",
  payload: movies,
});

const App = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${searchTerm}&apikey=5731728f`
        );
        dispatch(setMovies(response.data.Search || []));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch, searchTerm]);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="App">
      <Header title="FinProH8" onSearch={handleSearch} />
      <h2>Show you favorite movie</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
