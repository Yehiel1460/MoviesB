import { useState, useEffect } from "react";
import { debounce } from "lodash";
import './SearchMovies.css'

function SearchMovie() {
  const [searchValue, setSearchValue] = useState("");
  const [topFive, setTopFive] = useState([]);

  const debouncedSearchValue = debounce((searchValue) => {
    fetchMovies(searchValue);
  }, 2000);

  useEffect(() => {
    if (searchValue) {
      debouncedSearchValue(searchValue);
    }
  }, [searchValue]);

  const fetchMovies = async (searchValue) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ac3bfcd5e1c584dc30f01a2b2546e3a6&query=${searchValue}`
    );
    const newData = await response.json();
    setTopFive(newData.results.slice(0, 5));
  };

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        type={"text"}
        placeholder="Search Movie"
        value={searchValue}
        onChange={onChangeHandler}
      />
      <ul className="topFiveMovies">
        {topFive.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchMovie;
