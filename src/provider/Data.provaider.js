import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useCallback,
} from "react";

export const DataContext = createContext({});

export function useDataProvider() {
  return useContext(DataContext);
}

const DataProvider = ({ children }) => {
  const categories = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const [popMoviesList, setPopMoviesList] = useState();
  const [currentCategoriesMoviesList, setCurrentCategoriesMoviesList] =
    useState();
  const [currentCategoryName, setCurrentCategoryName] = useState();
  useEffect(() => {
    const fetchPopMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=ac3bfcd5e1c584dc30f01a2b2546e3a6&page=1`
      );
      const newData = await response.json();
      setPopMoviesList(newData.results);
    };
    fetchPopMovies();
  }, []);

  const updateCurrentCategoryName = useCallback((categoryName) => {
    setCurrentCategoryName(categoryName);
  }, []);
  const updateCurrentCategoriesMovies = useCallback((categoryMovieList) => {
    setCurrentCategoriesMoviesList(categoryMovieList);
  }, []);

  const fetchCurrentMovieList = useCallback(async (category) => {
    const categoryId = categories.filter(
      (categoryName) => categoryName.name === category
    );

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ac3bfcd5e1c584dc30f01a2b2546e3a6&with_genres=${categoryId[0].id}&page=1`
    );
    const data = await response.json();
    setCurrentCategoriesMoviesList(data.results);
  }, []);

  return (
    <DataContext.Provider
      value={{
        categories,
        popMoviesList,
        currentCategoriesMoviesList,
        updateCurrentCategoryName,
        updateCurrentCategoriesMovies,
        fetchCurrentMovieList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
