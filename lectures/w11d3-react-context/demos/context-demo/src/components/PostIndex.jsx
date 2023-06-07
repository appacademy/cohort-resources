import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SessionContext } from './context/sessionContext';

const PostIndex = () => {
  console.log("Rendering...");

  const {loggedIn} = useContext(SessionContext)
  const [data, setData] = useState([]);
  const { familyName } = useParams();

  useEffect(() => {
    console.log('fetching new data');
    const func = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchedData = await res.json();
      setData(fetchedData);
    };
    func();
  }, []);

  const title = familyName.slice(0, familyName.length - 1);

  return loggedIn ? (
    <div className='post-index'>
      <p>Fun {title[0].toUpperCase() + title.slice(1, title.length)} Posts</p>
      <SessionContext.Consumer>
          {value => <h1>{value.fruit} is the best fruit!</h1>}
      </SessionContext.Consumer>
      {data.map((ele, i) => (
        <div key={i} className="index-item">
          <p className='title'>{ele.title}</p>
          <p className='body'>{ele.body}</p>
        </div>
      ))}
    </div>
  ) : <h1>You must be logged in to rib a bit</h1>
};

export default PostIndex;