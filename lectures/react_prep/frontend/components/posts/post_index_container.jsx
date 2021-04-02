import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

/*
Export a container component for the `PostIndex` that maps an array of all posts
from the store as a `posts` prop. Additionally, it should map in functions that
will dispatch `fetchPosts` and `deletePost` to the store as props of the same
name.
*/

const mSTP = (state) => {   
    return {
        posts: Object.values(state.posts)
    };
};

const mDTP = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: postId => dispatch(deletePost(postId))
    };
};

export default connect(mSTP,mDTP)(PostIndex);