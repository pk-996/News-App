import React, { useState } from "react";
import Search from "./components/Search";
import ArticleList from "./components/ArticleList";
import config from "../js/config/config.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchArticles = async (query, count) => {
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    fetchArticles(searchTerm, 10);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ArticleList searchTerm={searchTerm} />
    </div>
  );
}

export default App;

