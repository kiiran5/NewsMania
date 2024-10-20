import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (apiKey) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
            fetch(url)
                .then(response => response.json())
                .then(data => setArticles(data.articles))
                .catch(error => console.error('Error fetching the news:', error));
        } else {
            console.error('API Key is missing');
        }
    }, [category]);

    return (
      <div>
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>
        </h2>
        <div className="cards-container">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      </div>
    );
};

export default NewsBoard;
