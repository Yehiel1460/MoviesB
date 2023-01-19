import React, { useState } from "react";
import { useDataProvider } from "../provaiders/Data.provaider";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { categories } = useDataProvider();
  const nav = useNavigate();
  const selceltHandler = (e) => {
    nav(`/category/${e}`);
  };
  return (
    <nav className="main">
      <h3 className="logo">MovieB</h3>
      <div>
        <input type={"text"} placeholder="Search Movie"></input>
        <BiSearch className="seacrch" />
      </div>
      <div>
        <select
          onChange={(e) => selceltHandler(e.target.value)}
          value={""}
          className="category_dropdown"
          name="categories"
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