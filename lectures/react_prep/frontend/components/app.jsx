import React from "react";
import { Route, Switch } from "react-router-dom";

import PostIndexContainer from "./posts/post_index_container";
import PostShowContainer from "./posts/post_show_container";
import EditPostFormContainer from "./posts/edit_post_form_container";

// NB: this file is complete - you do not to write/edit anything!
const App = () => (
  <div>
    <h1>React 1</h1>
    <Switch>
      <Route exact path="/" component={PostIndexContainer} />
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route path="/posts/:postId/edit" component={EditPostFormContainer} />
    </Switch>
  </div>
);

export default App;
