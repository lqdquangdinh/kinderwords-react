import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Requests from "./pages/Requests";
import CreateRequest from "./pages/CreateRequest";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <ProtectedRoute path="/requests" exact component={Requests} />
          <ProtectedRoute
            path="/create_request"
            exact
            component={CreateRequest}
          />
          <ProtectedRoute path="/inbox" exact component={Inbox} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
