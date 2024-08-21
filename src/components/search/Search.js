import { AiOutlineSearch } from "react-icons/ai";
import "./query.css";
import { useState } from "react";

function Search({ onGetUserData }) {
  const [query, setQuery] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();

    onGetUserData(query);
    setQuery("");
  }

  return (
    <form className="query-container" onSubmit={handleFormSubmit}>
      <div className="search-container">
        <AiOutlineSearch className="search-icon" />
        <input
          type="text"
          name="Query"
          placeholder="Search GitHub username..."
          required
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
}

export default Search;
