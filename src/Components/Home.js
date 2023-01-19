import React from "react";
import { useDataProvider } from "../provider/Data.provaider";

const Home = () => {
  const { popMoviesList } = useDataProvider();
  return (
    <div>
      <h1>Top 20 popular movies</h1>
      {popMoviesList?.map((c, i) => (
        <h3 key={c.id}>
          {i + 1 + ". "}
          {c.title}
        </h3>
      ))}
    </div>
  );
};

export default Home;
