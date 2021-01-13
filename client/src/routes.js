import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Books from './pages/Books';
import Login from './pages/Login';
import NewBook from './pages/NewBook';
import React from 'react';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/new/:bookId" component={NewBook} />
      </Switch>
    </BrowserRouter>
  );
}
