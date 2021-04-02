/* globals jest */

jest.mock('../components/posts/post_index_item', () => (
  () => ({ render: () => (<div></div>) })
));
jest.mock('../components/posts/create_post_form_container', () => {
  // need to name function so we can query for it later
  return function FormContainer() {
    return { render: () => (<div></div>) }
  }
});

import React from 'react';
import { mount } from 'enzyme';
import PostIndexContainer from '../components/posts/post_index_container';
import PostIndex from '../components/posts/post_index';
import * as PostActions from '../actions/post_actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testPosts = {
  1: { id: 1, title: "Title1" },
  2: { id: 2, title: "Title2" },
  3: { id: 3, title: "Title3" }
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ posts: testPosts });

describe('post index', () => {
  let postIndexWrapper;

  beforeEach(() => {
    PostActions.fetchPosts = jest.fn(() => dispatch => { });
    postIndexWrapper = mount(
      <PostIndexContainer store={testStore} />
    ).find(PostIndex);
  });

  it('correctly maps state to props', () => {
    expect(postIndexWrapper.props().posts).toEqual(Object.values(testPosts));
  });

  it('correctly maps dispatch to props', () => {
    expect(postIndexWrapper.props().fetchPosts).toBeDefined();
    expect(postIndexWrapper.props().deletePost).toBeDefined();
    expect(postIndexWrapper.props().deletePost).toBeInstanceOf(Function);
    expect(postIndexWrapper.props().deletePost).toBeInstanceOf(Function);
  });

  it('fetches posts after being mounted', () => {
    expect(PostActions.fetchPosts).toBeCalled();
  });

  it('renders a PostIndexItem for each post, passing in the `post` object and `deletePost` action as props', () => {
    const postIndexItems = postIndexWrapper.find('ul').children();
    expect(postIndexItems.getElements().length).toBe(3);

    postIndexItems.forEach((item, i) => {
      expect(item.props().post).toEqual(testPosts[i + 1]);
      expect(item.props().deletePost).toEqual(postIndexWrapper.props().deletePost);
    });
  });

  it('contains a PostFormContainer component', () => {
    const postForm = postIndexWrapper.find('FormContainer');
    expect(postForm.length).toBe(1);
  });
});
