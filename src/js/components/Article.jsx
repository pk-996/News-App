import React from "react";

const Article = ({ title, description, url, urlToImage, publishedAt }) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <div className="article">
      <img src={urlToImage} alt={title} />
      <div className="topic">TOPIC</div>
      <h4>{title}</h4>
      <p className="date">{formattedDate}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        READ MORE
      </a>
    </div>
  );
}

export default Article;
