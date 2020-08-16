import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DashBoardstyle.css";

function DashBoardcontent() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://official-joke-api.appspot.com/random_ten`
        );

        const json1 = await response.json();

        setResults(json1);
      } catch (error) {}

      console.log(query);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <form
        id="srch"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Challenges..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((item) => (
          <div key={item.id}>
            <Link to={`/challenges/${item.id}`} >
              <h4>{String(item.setup)}</h4>
              <p>{item.punchline}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashBoardcontent;
