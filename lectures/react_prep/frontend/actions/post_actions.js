import * as PostApiUtil from '../util/post_api_util';

/*
Export the following action constants:

1. `RECEIVE_ALL_POSTS` (corresponding action should have a `posts` payload)
2. `RECEIVE_POST` (corresponding action should have a `post` payload)
3. `REMOVE_POST` (corresponding action should have a `postId` payload)
*/
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
/*
Export the following thunk action creators with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`
*/

const receivePosts = (posts) => {
    return{
        type: RECEIVE_ALL_POSTS,
        posts
    };
};

const receivePost = (post) => {
    return{
        type: RECEIVE_POST,
        post
    };
};

const removePost = (postId) => {
    return{
        type: REMOVE_POST,
        postId
    };
};

export const fetchPosts = () => {
    return (dispatch) => {
      return PostApiUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)));
    };
};

export const fetchPost = (postId) => {
    return (dispatch) => {
        return PostApiUtil.fetchPost(postId)
            .then(post => dispatch(receivePost(post)));
    };
};

export const createPost = (post) => {
    return (dispatch) => {
        return PostApiUtil.createPost(post)
            .then(post => dispatch(receivePost(post)));
    };
};

export const updatePost = post => dispatch => (
    PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    PostApiUtil.deletePost(postId).then(() => dispatch(removePost(postId)))
);
