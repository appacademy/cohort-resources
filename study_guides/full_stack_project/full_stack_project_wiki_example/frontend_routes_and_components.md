components are organized as follows:
* `Root`
  * `App`
    * `NavBar`
    * `(main component here)`
    * `Footer`

The following routes, defined in `App`, will render components between `NavBar` and `Footer`
* `/`
  * `Splash`
* `/login`
  * `SessionForm`
* `/feed`
  * `StoryIndex`
    * `StoryIndexItem`
* I don't want to show all the stories in the feed.  I want to limit the number of stories based on relevance to the user

* `/users/userId`
  * `ProfileComponent`
  * `StoryIndex`
    * `StoryIndexItem`

* `/stories/new`
  * `StoryForm`
* `stories/storyId`
  * `StoryShow`
* `stories/storyId/edit`
  * `StoryForm`

* `/stories/comments/new`
  * `CommentForm`
* `stories/comments/commentId`
  * `CommentShow`
* `stories/comments/commentId/edit`
  * `CommentForm`

