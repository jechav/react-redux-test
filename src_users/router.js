import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Welcome from "./components/Welcome";

import UserList from "./containers/UserList.jsx";
import UserNew from "./containers/UserNew.jsx";


// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="users" component={UserList} />
      <Route path="users-new" component={UserNew} />
    </Route>
  </Router>
);

// export
export { router };
