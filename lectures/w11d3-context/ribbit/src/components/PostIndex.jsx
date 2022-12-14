import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../util/fetchPosts';
import './PostIndex.css';
import PostIndexItem from './PostIndexItem';

const PostIndex = props => {
  const [data, setData] = useState([]);
  const { familyName } = useParams();

  // will run when component first mounts
  // and whenever familyName changes
  useEffect(() => {
    console.log(`fetching new data about ${familyName}`);
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
        <PostIndexItem key={i} post={ele} />
      ))}
    </>
  )
};

export default PostIndex;