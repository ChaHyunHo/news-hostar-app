import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const query = category === 'all'? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=4e8e1a8c2f634812a9489e0af6f07c21`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoding(false);
    };
      fetchData();
  }, [category]);

  console.log(articles);

  if (loding) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((articles) => (
        <NewsItem key={articles.url} article={articles} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
