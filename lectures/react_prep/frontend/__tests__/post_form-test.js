/* globals jest */

import React from 'react';
import { Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, configure } from 'enzyme';
import MockRouter from 'react-mock-router';
import * as PostActions from '../actions/post_actions';
import CreatePostFormContainer from '../components/posts/create_post_form_container';
import EditPostFormContainer from '../components/posts/edit_post_form_container';
import PostForm from '../components/posts/post_form';

const testPost = {
  id: 1,
  title: "Title",
  body: "Body"
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ posts: { 1: testPost } });

describe('post form container', () => {
  let postFormWrapper,
    titleInput,
    bodyInput;

  beforeEach(() => {
    PostActions.updatePost = jest.fn(post => dispatch => {
      return Promise.resolve(post);
    });
    PostActions.createPost = jest.fn(post => dispatch => {
      return Promise.resolve(post);
    });
    PostActions.fetchPost = jest.fn(id => dispatch => {
    });
  });

  describe('creating a new post', () => {
    beforeEach(() => {
      postFormWrapper = mount(
        <MockRouter path={"/"}>
          <CreatePostFormContainer store={testStore} />
        </MockRouter>
      ).find(PostForm);


      // Make sure the title input is a text input and body input is a textarea!
      titleInput = postFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));
      bodyInput = postFormWrapper.find('textarea');
    });

    it('correctly maps state to props', () => {
      expect(postFormWrapper.props().post).toEqual({
        title: "", body: ""
      });
      expect(postFormWrapper.props().formType).toEqual('Create Post');
    });

    it('correctly maps dispatch to props', () => {
      expect(postFormWrapper.props().action).toBeDefined();
      expect(postFormWrapper.props().action).toBeInstanceOf(Function);
    });

    it('should contain text indicating it is the create form', () => {
      const renderedText = postFormWrapper.text();
      expect(renderedText).toContain('Create Post');
    });

    it('pre-fills title and body input fields with empty string', () => {
      expect(titleInput.props().value).toEqual('');
      expect(bodyInput.props().value).toEqual('');
    });

    it('updates the title field when it changes', () => {
      titleInput.prop('onChange')({
        currentTarget: { value: 'telephone' },
        target: { value: 'telephone' }
      });

      // Update wrapper and re-find title input
      let updatedWrapper = postFormWrapper.update();
      titleInput = updatedWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));

      // Assert that state was updated on component and that title input value changed
      expect(postFormWrapper.state().title).toEqual('telephone');
      expect(titleInput.props().value).toEqual('telephone');
    });

    it('updates the body field when it changes', () => {
      bodyInput.prop('onChange')({
        currentTarget: { value: 'telephone' },
        target: { value: 'telephone' }
      });

      // Update wrapper and re-find body input
      let updatedWrapper = postFormWrapper.update();
      bodyInput = updatedWrapper.find('textarea');

      // Assert that state was updated on component and that body input value changed
      expect(postFormWrapper.state().body).toEqual('telephone');
      expect(bodyInput.props().value).toEqual('telephone');
    });

    it('triggers the correct action when submitted', () => {
      const newPost = { title: 'testTitle', body: 'testBody' };

      titleInput.prop('onChange')({
        currentTarget: { value: newPost.title },
        target: { value: newPost.title }
      });
      bodyInput.prop('onChange')({
        currentTarget: { value: newPost.body },
        target: { value: newPost.body }
      });

      postFormWrapper.find('form').simulate('submit');
      expect(PostActions.createPost).toBeCalledWith(newPost);
    });
  });

  describe('updating an existing post', () => {
    beforeEach(() => {
      postFormWrapper = mount(
        <MockRouter path={"/posts/:postId/edit"} params={{ postId: testPost.id }}>
          <Route render={(props) => (
            <EditPostFormContainer {...props} store={testStore} />
          )}
          />
        </MockRouter>
      ).find(PostForm);

      // Make sure the title input is a text input and body input is a textarea!
      titleInput = postFormWrapper.find('input').filterWhere(input => {
        return input.props().type === 'text'
      });
      bodyInput = postFormWrapper.find('textarea');
    });

    it('correctly maps state to props', () => {
      expect(postFormWrapper.props().post).toEqual(testPost);
      expect(postFormWrapper.props().formType).toEqual('Update Post');
    });

    it('correctly maps dispatch to props', () => {
      const props = postFormWrapper.props();

      // Hint: fetch in `EditPostForm`!
      expect(props.fetchPost).toBeUndefined();
      expect(props.action).toBeDefined();
      expect(props.action).toBeInstanceOf(Function);
    });

    it('should contain text indicating it is the edit form', () => {
      const renderedText = postFormWrapper.text();
      expect(renderedText).toContain('Update Post');
    });

    it('fetches the appropriate post after being mounted', () => {
      expect(PostActions.fetchPost).toBeCalledWith(testPost.id);
    });

    it('pre-fills title and body input fields with post data from the store', () => {
      expect(titleInput.props().value).toEqual(testPost.title);
      expect(bodyInput.props().value).toEqual(testPost.body);
    });

    it('triggers the correct action when submitted', () => {
      postFormWrapper.find('form').simulate('submit');
      expect(PostActions.updatePost).toBeCalledWith(testPost);
    });
  });
});
