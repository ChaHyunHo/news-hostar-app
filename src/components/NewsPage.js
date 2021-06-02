import React from 'react';
import Categories from './Categories';
import NewList from './NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewsPage;
