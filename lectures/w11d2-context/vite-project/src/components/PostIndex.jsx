import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostIndex.css';
import PostIndexItem from './PostIndexItem';

// const PostIndex = props => {
//   const { sub } = useParams();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
    // console.log('fetching info on', sub);
    // fetch('https://dummyjson.com/posts')
    //   .then(res => res.json())
    //   .then(data => setPosts(data.posts));
//   }, [sub]);

//   return (
    // <div className='post-index'>
    //   { sub === 'salamanders' && (
    //     <img className='salamander' src='https://www.californiaherps.com/salamanders/images/alugubriscocolong.jpg'></img>
    //   )}
    //   {posts.map(ele => (
    //     <PostIndexItem key={ele.id} post={ele} />
    //   ))}
    // </div>
//   );
// };

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log('fetching info');
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data.posts }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updated');
  }

  componentWillUnmount() {
    console.log('goodbye cruel world');
  }

  render() {
    console.log('rendering');
    const { posts } = this.state;

    return (
      <div className='post-index'>
        <img className='salamander' src='https://www.californiaherps.com/salamanders/images/alugubriscocolong.jpg'></img>
        {posts.map(ele => (
          <PostIndexItem key={ele.id} post={ele} />
        ))}
      </div>
    )
  }
};

export default PostIndex;