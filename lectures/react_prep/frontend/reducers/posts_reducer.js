import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';

/*
Export a `PostsReducer` that takes in the old state and appropriately handles
all post actions.
*/

const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch (action.type) {
      case RECEIVE_ALL_POSTS:
        // return Object.assign({},action.posts);
        return {...action.posts}
      case RECEIVE_POST:
        newState[action.post.id] = action.post
        return newState
      case REMOVE_POST:
        delete newState[action.postId]
        return newState
      default:
        return state
    }
};

export default PostsReducer;