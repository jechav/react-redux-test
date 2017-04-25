import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Welcome from "./components/Welcome";

import UserList from "./containers/UserList.jsx";
import UserEditNew from "./containers/UserEditNew.jsx";


// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="users" component={UserList} />
      <Route path="users-new" component={UserEditNew} />
      <Route path="users-edit/:_id" component={UserEditNew} />
    </Route>
  </Router>
);

// export
export { router };
