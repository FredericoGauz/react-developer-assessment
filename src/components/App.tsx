import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InitialPage } from './InitialPage';
import { PostDetailPage } from './PostDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <InitialPage />
        </Route>
        <Route path="/posts/:id">
          <PostDetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
