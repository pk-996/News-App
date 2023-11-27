import React from "react";

function FeaturedArticle({ title, description, url, urlToImage, publishedAt }) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="featured-article">
      <img src={urlToImage} alt={title} />
      <div className="article-details">
        <div className="topic">TOPIC</div>
        <div className="published-date">{formattedDate}</div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="">
        READ MORE
      </a>
    </div>
  );
}

export default FeaturedArticle;
