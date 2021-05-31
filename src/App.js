import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=4e8e1a8c2f634812a9489e0af6f07c21')
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
