import React, { useContext, useState, createContext, useEffect } from "react";

export const DataContext = createContext({});

export function useDataProvider() {
  return useContext(DataContext);
}

const DataProvider = ({ children }) => {
  const [popMovies, setPopMovies] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=ac3bfcd5e1c584dc30f01a2b2546e3a6&page=1`
      );
      const newData = await response.json();
      setPopMovies(newData.results);
    };
    fetchData();
  }, []);
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

  return (
    <DataContext.Provider value={{ categories, popMovies }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
