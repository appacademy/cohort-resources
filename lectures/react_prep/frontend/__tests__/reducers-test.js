/* globals jest */

import PostsReducer from '../reducers/posts_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('PostsReducer', () => {
    let oldState;

    beforeEach(() => {
      oldState = { 1: 'oldState' }
    })

    it('exports a function', () => {
      expect(typeof PostsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(PostsReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const newState = PostsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toBe(oldState);
    });

    describe('handling the RECEIVE_ALL_POSTS action', () => {
      let action,
        testPosts;

      beforeEach(() => {
        testPosts = { 1: 'testPost1', 2: 'testPost2' };
        action = {
          type: 'RECEIVE_ALL_POSTS',
          posts: testPosts
        };
      });

      it('should replace the state with the action\'s posts', () => {
        const state = PostsReducer(undefined, action);
        expect(state).toEqual(testPosts);
      });

      it('should not modify the old state', () => {
        PostsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the RECEIVE_POST action', () => {
      let action,
        testPost;

      beforeEach(() => {
        testPost = { id: 2, title: 'testPost' };
        action = {
          type: 'RECEIVE_POST',
          post: testPost
        };
      });

      it('should add the post to the state using the post id as a key', () => {
        let state = PostsReducer(undefined, action);
        expect(state[2]).toEqual(testPost);
      });

      it('should not affect the other posts in the state', () => {
        let state = PostsReducer(oldState, action);
        expect(state[1]).toEqual('oldState');
      });

      it('should not modify the old state', () => {
        PostsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the REMOVE_POST action', () => {
      let action,
        testPost;

      beforeEach(() => {
        oldState = { 1: 'oldState', 2: 'testPost' }
        testPost = { id: 2, title: 'testPost' };
        action = {
          type: 'REMOVE_POST',
          postId: testPost.id
        };
      });

      it('should remove the correct post from the state', () => {
        let state = PostsReducer({ 2: testPost }, action);
        expect(typeof state[2]).toEqual('undefined');
      });

      it('should not affect the other posts in the state', () => {
        let state = PostsReducer(oldState, action);
        expect(state[1]).toEqual('oldState');
      });

      it('should not modify the old state', () => {
        PostsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState', 2: 'testPost' });
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the PostsReducer under the key `posts`', () => {
      const post = { id: 1, title: 'Root Reducer', content: 'Testing' };
      const action = { type: 'RECEIVE_POST', post };
      testStore.dispatch(action);

      expect(testStore.getState().posts).toEqual(PostsReducer({ [post.id]: post }, action));
    });
  });
});
