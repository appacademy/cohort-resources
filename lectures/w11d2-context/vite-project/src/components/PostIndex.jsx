import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostIndex.css';
import PostIndexItem from './PostIndexItem';

const PostIndex = props => {
  const { sub } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('fetching info on', sub);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, [sub]);

  return (
    <div className='post-index'>
      { sub === 'salamanders' && (
        <img className='salamander' src='https://www.californiaherps.com/salamanders/images/alugubriscocolong.jpg'></img>
      )}
      {posts.map(ele => (
        <PostIndexItem key={ele.id} post={ele} />
      ))}
    </div>
  );
};

export default PostIndex;