import React, { useState } from "react";
import Search from "./components/Search";
import ArticleList from "./components/ArticleList";
import config from "../js/config/config.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ArticleList searchTerm={searchTerm} />
    </div>
  );
}

export default App;

