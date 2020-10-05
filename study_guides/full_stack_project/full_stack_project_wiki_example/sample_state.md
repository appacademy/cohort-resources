```js
{
  entities:{
    users:{
      13:{
        id: 13,
        email: "someemail1@whatever.com"
      }
      20:{
        id: 20,
        email: "someemail2@whatever.com"
      }
      32:{
        id: 32,
        email: "someemail3@whatever.com"
      }
    }
    feed:{
      1:{
        id: 1,
        title: "category1"
      }
      2:{
        id: 2,
        title: "category2"
      }
      3:{
        id: 3,
        title: "category3"
      }
    }
    stories:{
      1:{
        id: 1,
        title: "sometitle1",
        body: "somebody1",
        author_id: 13,
      }
      2:{
        id: 2,
        title: "sometitle2",
        body: "somebody1",
        author_id: 32,
      }
      3:{
        id: 3,
        title: "sometitle3",
        body: "somebody3",
        author_id: 20,
      }
    }
    comments:{
      1:{
        id: 1,
        body: "somebody1",
        author_id: 13
      }
      2:{
        id: 2,
        body: "somebody2",
        author_id: 32
      }
      3:{
        id: 2,
        body: "somebody2",
        author_id: 20
      }
    }
    claps:{
      1:{
        id: 1,
        comment_id: 1,
        story_id: 1
      }
      2:{
        id: 2,
        comment_id: 2,
        story_id: 2
      }
      3:{
        id: 3,
        comment_id: 3,
        story_id: 3
      }
    }
    follows:{
      1:{
        id: 1,
        follower_id: 13,
        folowee_id: 20
      }
      2:{
        id: 2,
        follower_id: 32,
        folowee_id: 32
      }
      3:{
        id: 3,
        follower_id: 13,
        folowee_id: 13
      }
    }
  }
}
```