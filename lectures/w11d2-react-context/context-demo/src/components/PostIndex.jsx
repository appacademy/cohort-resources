import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSessionContext } from '../context/sessionContext';

const PostIndex = props => {
  console.log("Rendering...");

  const [data, setData] = useState([]);
  const { familyName } = useParams();

  const { loggedIn } = useSessionContext();

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

  if (!loggedIn) return <h2>You are not logged in</h2>

  return (
    <>
      <p>Fun {title[0].toUpperCase() + title.slice(1, title.length)} Posts</p>
      {data.map((ele, i) => (
        <div key={i} className="index-item">
          <p className='title'>{ele.title}</p>
          <p className='body'>{ele.body}</p>
        </div>
      ))}
    </>
  )
};

export default PostIndex;