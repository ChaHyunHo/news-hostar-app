import { useCallback, useEffect, useState } from 'react';
import NewList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './components/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return <Route path={'/:category?'} component={NewsPage} />; // /:category category 값이 선택적이라는 의미 , 있을수도있고 없을수도 있다.
};

export default App;
