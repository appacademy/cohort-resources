import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSessionContext } from '../context/SessionContext';



const PostIndex = () => {
  // console.log("Rendering...");

  const [data, setData] = useState([]);
  const { familyName } = useParams();
  const {loggedIn} = useSessionContext();

  useEffect(() => {
    console.log('fetching new data');
    const func = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchedData = await res.json();
      // console.log("DATA:", fetchedData)
      setData(fetchedData);
    };
    func();
  }, [familyName]);

  const title = familyName.slice(0, familyName.length - 1);

    return (loggedIn) ? (
      <>
        {/* {console.log("returning...")} */}
        {/* <SessionContext.Consumer>
          {(value) => (<h1>{value.fruit} is my most used fruit for examples</h1>)}
        </SessionContext.Consumer> */}

        <p>Fun {title[0].toUpperCase() + title.slice(1, title.length)} Posts</p>
        {data.map((ele, i) => (
          <div key={i} className="index-item">
            <p className='title'>{ele.title}</p>
            <p className='body'>{ele.body}</p>
          </div>
        ))}
      </>
    ) : (<h1>You must be logged in to see posts</h1>)
};

export default PostIndex;