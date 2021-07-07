/* globals jest */

import {
  fetchPost,
  fetchPosts,
  deletePost,
  updatePost,
  createPost
} from '../util/post_api_util';

describe('the api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchPosts makes request and returns an ajax promise', () => {
    const returnValue = fetchPosts();
    expect($.ajax).toBeCalled();

    // This line gets the first argument of the first call to $.ajax
    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toMatch(/^\/?api\/posts\/?$/)
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchPost makes request and returns an ajax promise', () => {
    const returnValue = fetchPost(15);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toMatch(/^\/?api\/posts\/15\/?$/)
    expect(returnValue).toEqual("ajax promise");
  });

  it('createPost makes request and returns an ajax promise', () => {
    const post = { title: 'New Post', body: 'Content' };
    const returnValue = createPost(post);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ post });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updatePost makes request and returns an ajax promise', () => {
    const post = { id: 15, title: 'Existing Post', body: 'Content' };
    const returnValue = updatePost(post);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toMatch(/^\/?api\/posts\/15\/?$/)
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ post });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deletePost makes request and returns an ajax promise', () => {
    const returnValue = deletePost(15);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toMatch(/^\/?api\/posts\/15\/?$/)
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
