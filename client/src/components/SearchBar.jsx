import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsName } from "../actions";
import style from "./SearchBar.module.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [searchError, setSearchError] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchError(false);
    const result = dispatch(getDogsName(name));
    if (result.length === 0) {
      setSearchError(true);
    }
    setCurrentPage(1);
    setName("");
  };

  return (
    <div className={style.searchbar_container}>
      <input
        className={style.searchbar}
        type="text"
        placeholder="Enter breed name..."
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
      <button
        className={style.searchbar_button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {searchError && <p>No results found.</p>}
    </div>
  );
}
