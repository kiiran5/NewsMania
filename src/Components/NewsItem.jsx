import React from "react";

import image from "../assets/breaking-news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  const fallbackImage = "https://via.placeholder.com/345x200?text=No+Image";

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-1 py-1"
      style={{ maxWidth: "335px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "320px" }}
        className="card-img-top"
        alt="News"
        onError={(e) => (e.target.src = fallbackImage)}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : " Current Event. It is Information about something that has Just Happened"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
