import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsName } from "../actions";
import style from "./SearchBar.module.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  function handleKeyUp(e) {
    if (e.target.value && e.key === "Enter") {
      performSearch();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length > 0) {
      performSearch();
    }
  };

  const performSearch = () => {
    dispatch(getDogsName(name));
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
        onKeyUp={handleKeyUp}
        value={name}
      />
      <button
        className={style.searchbar_button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
