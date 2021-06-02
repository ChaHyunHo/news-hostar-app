import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

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

const NewList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=4e8e1a8c2f634812a9489e0af6f07c21`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  console.log(response);

  // articles 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  let articles = [];

  if (response.status === 200) {
    articles = response.data.articles;
  } else {
    return <NewsListBlock>에러 발생하였습니다.</NewsListBlock>;
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
