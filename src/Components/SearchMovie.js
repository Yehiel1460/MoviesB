import React, { useEffect, useState } from "react";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";

function SearchMovie() {
  const [searchValue, setSearchValue] = useState();

  const searchHandler = () => {};

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <>
      <input
        type={"text"}
        placeholder='Search Movie'
        value={searchValue}
        onChange={onChangeHandler}
      />
      <BiSearch className='seacrch' onClick={searchHandler} />
    </>
  );
}

export default SearchMovie;
