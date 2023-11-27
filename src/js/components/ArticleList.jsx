import React, { useState, useEffect } from "react";
import Article from "./Article";
import FeaturedArticle from "./FeatureArticle";
import Divider from "./Divider";
import config from "../config/config.json";

function ArticleList({ searchTerm }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(searchTerm || "tesla", 10);
  }, [searchTerm]);

  const fetchArticles = async (query, count) => {
    try {
      const response = await fetch(
        `${config.NEWS_API_URL}?q=${query}&apiKey=${config.NEWS_API_KEY}&pageSize=${count}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();
      if (data.articles.length === 0) {
        setArticles([]); 
      } else {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error("Error fetching articles:", error.message);
    }
  };

  return (
    <div>
      {articles.length > 0 && (
        <>
          <FeaturedArticle {...articles[0]} />
          <Divider />
          <div className="article-list">
            {articles.slice(1).map((article) => (
              <Article key={article.url} {...article} />
            ))}
          </div>
        </>
      )}
      {articles.length === 0 && (
        <div className="no-results">
          <h2>No results found for your search</h2>
        </div>
      )}
    </div>
  );
}

export default ArticleList;
