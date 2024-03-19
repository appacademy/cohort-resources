import { useState } from 'react';
import './PostIndexItem.css';
import { useSessionContext } from '../contexts/sessionContext';

const PostIndexItem = ({ post }) => {
  const [showDetail, setShowDetail] = useState(false);

  const { loggedIn } = useSessionContext();

  const handleClick = e => {
    e.stopPropagation();
    setShowDetail(old => !old);
  };

  const handleReact = e => {
    e.stopPropagation();
    if (loggedIn) {
      console.log('You', e.target.innerText, 'this post');
      alert('You ' + e.target.innerText + ' this post');
    } else {
      alert('You must be logged in in order to react');
    }
  };

  return (
    <div className='post-index-item' onClick={handleClick}>
      <p>{post.title}</p>
      {showDetail && (
        <>
          <p>{post.body}</p>
          <div className='reactions' onClick={handleReact}>
            <p>Like</p>
            <p>Laugh</p>
            <p>Love</p>
          </div>
        </>
      )}
    </div>
  )
};

export default PostIndexItem;