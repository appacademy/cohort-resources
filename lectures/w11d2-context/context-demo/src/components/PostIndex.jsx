import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SessionContext, useSessionContext } from '../context/sessionContext';

const PostIndex = props => {
  // const {loggedIn} = props;
  const {loggedIn} = useSessionContext();
  const [data, setData] = useState([]); //[state variable, function for reassigning that variable]
  const { familyName } = useParams();

  
  useEffect(() => {
    console.log('fetching new data');
    const func = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchedData = await res.json();
      setData(fetchedData);
    };
    func();
    return ()=> console.log('clean up')
  }, [familyName]);
  
  console.log("Rendering...");
  const title = familyName.slice(0, familyName.length - 1);

  if(!loggedIn) return <h2>You need to be logged in to see this page</h2>
  return (
    <>
      <p>Fun {title[0].toUpperCase() + title.slice(1, title.length)} Posts</p>
      {/* <SessionContext.Consumer>
        {value => <h2>I like {value.fruit}</h2>}
      </SessionContext.Consumer> */}
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