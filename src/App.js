import { useState } from "react";
import "./App.css";
import AddMovies from "./components/AddMovies";
import MoviesList from "./components/MoviesList";
import SearchMovies from "./components/SearchMovies";
import { moviesData } from "./Data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  const handleRating = (newRate) => setSearchRating(newRate);
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <SearchMovies
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
        handleAdd={handleAdd}
      />
      <MoviesList
        movies={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
        )}
      />
      
    </div>
  );
}

export default App;
