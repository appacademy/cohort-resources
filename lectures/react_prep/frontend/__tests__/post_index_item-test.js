/* globals jest */

import React from 'react';
import { mount } from 'enzyme';
import MockRouter from 'react-mock-router';
import PostIndexItem from '../components/posts/post_index_item';

describe('post index item', () => {
  let post,
    postIndexItemWrapper,
    deletePost,
    push;

  beforeEach(() => {
    post = {
      id: 1,
      title: "Title",
      body: "Body"
    };

    push = jest.fn();
    deletePost = jest.fn();

    const testProps = {
      deletePost,
      post
    };

    postIndexItemWrapper = mount(
      <MockRouter>
        <PostIndexItem {...testProps} />
      </MockRouter>
    ).find(PostIndexItem);

  });

  it('should be a function', () => {
    expect(typeof PostIndexItem).toEqual('function');
  });

  it('shows the post\'s title as a Link to the post\'s show page', () => {
    const showLink = postIndexItemWrapper.find('Link').filterWhere(link => (
      link.props().to === `/posts/${post.id}`
    ))

    expect(showLink.props().children).toEqual(post.title);
    expect(showLink.props().to).toEqual(`/posts/${post.id}`);
  });

  it('has a link that links to the post edit page', () => {
    const editLink = postIndexItemWrapper.find('Link').filterWhere(link =>
      link.props().to === `/posts/${post.id}/edit`
    );

    expect(editLink.props().children).toEqual("Edit")
    expect(editLink.props().to).toEqual(`/posts/${post.id}/edit`);
  });

  it('has a button that deletes the post when clicked', () => {
    const deleteButton = postIndexItemWrapper.find('button')
    expect(deleteButton).toBeDefined();

    expect(deletePost).not.toHaveBeenCalled();
    deleteButton.simulate('click');
    expect(deletePost).toBeCalledWith(post.id);
  });
});
