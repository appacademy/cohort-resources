import { useState } from "react";
import { useSessionContext } from "../context/sessionContext";

const PostIndexItem = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [showCommentField, setShowCommentField] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const { loggedIn, currentUser } = useSessionContext();

  const clickHandler = e => {
    e.preventDefault();
    if (loggedIn) {
      setShowCommentField(oldValue => !oldValue);
    } else {
      alert('you need to be logged in');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setComments(cmnts => [...cmnts, currentUser.name + ': ' + commentInput]);
    setCommentInput('');
    setShowCommentField(false);
  };

  return(
    <div className="index-item" onClick={clickHandler}>
      <p className='title'>{post.title}</p>
      <p className='body'>{post.body}</p>
      {comments.map((cmnt, i) => (
        <p key={i} className="comment">{cmnt}</p>
      ))}
      {showCommentField && (
        <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
          <input type='text' value={commentInput} onChange={e => setCommentInput(e.target.value)}/>
          <input type='submit' value='post' />
        </form>
      )}
    </div>
  )
};

export default PostIndexItem;