import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSessionContext } from '../../context/sessionContext';
import { fetchPosts } from '../../util/fetchPosts';
import './PostIndex.css';

const PostIndex = props => {
  const ctx = useSessionContext();
  // const ctx = useContext(SessionContext);
  console.log("Rendering...");

  const [data, setData] = useState([]);
  const { familyName } = useParams();

  useEffect(() => {
    console.log('fetching new data');
    const f = async () => {
      const fetchedData = await fetchPosts();
      setData(fetchedData);
    };
    f();
  }, [familyName]);

  const title = familyName.slice(0, familyName.length - 1);

  return(
    <>
      <p>Fun {title[0].toUpperCase() + title.slice(1,title.length)} Posts</p>
      {data.map((ele, i) => (
        <div key={i} className="index-item">
          <p className='title'>{ele.title}</p>
          <p className='body'>{ele.body}</p>
          {/* <PostIndexItem post={ele} /> */}
        </div>
      ))}
    </>
  )
};

export default PostIndex;