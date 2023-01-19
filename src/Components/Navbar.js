import React from "react";
import { useDataProvider } from "../provider/Data.provaider";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import SearchMovie from "./SearchMovie";

const Navbar = () => {
  const { categories, updateCurrentCategoryName } = useDataProvider();
  const nav = useNavigate();
  const selceltHandler = (categoryName) => {
    updateCurrentCategoryName(categoryName);
    nav(`/category/${categoryName}`);
  };
  return (
    <nav className='main'>
      <h3 onClick={() => nav("/")} className='logo'>
        MovieB
      </h3>
      <div>
        <SearchMovie />
      </div>
      <div>
        <select
          onChange={(e) => selceltHandler(e.target.value)}
          value={""}
          className='category_dropdown'
          name='categories'
        >
          <option>Categories</option>
          {categories.map((c, i) => {
            return (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            );
          })}
        </select>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
