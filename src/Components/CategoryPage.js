import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataProvider } from "../provider/Data.provaider";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { fetchCurrentMovieList, currentCategoriesMoviesList } =
    useDataProvider();

  useEffect(() => {
    fetchCurrentMovieList(categoryName);
  }, [categoryName, fetchCurrentMovieList]);

  return (
    <div>
      <h1>{categoryName}</h1>
      {currentCategoriesMoviesList?.map((c, i) => (
        <h3 key={c.id}>
          {i + 1 + ". "}
          {c.title}
        </h3>
      ))}
    </div>
  );
};

export default CategoryPage;
