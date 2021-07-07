/*
Export the following API Util functions with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`
*/

export const fetchPosts = () => {
    return $.ajax({
        // method: 'GET',
        url: '/api/posts'
    });
};

export const fetchPost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`
    });
};

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: { post }
        // data: { post: post }
    });
};

export const updatePost = (post) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post }
    });
};

export const deletePost = (postId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    });
};