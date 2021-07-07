import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

/*
Export a `PostIndex` presentational component that renders a list (`ul`) of
`PostIndexItems`. This component should receive `posts` from the store as a prop
via its container and fetch them once it has successfully mounted to the DOM.
Below the `ul`, render the `CreatePostFormContainer` component.
*/

class PostIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map(post => {
            return <PostIndexItem 
                post={post}
                key={post.id}
                deletePost={this.props.deletePost}
            />
        })
        return(
            <div>
                <ul>
                    {posts}
                </ul>
                <CreatePostFormContainer />
            </div>
        )
    }
}

export default PostIndex;