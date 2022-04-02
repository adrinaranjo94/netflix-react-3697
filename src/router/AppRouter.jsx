import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchMoviePage from "../pages/SearchMovie";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClickLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <Router>
      {props.children}
      <Switch>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/movies" exact render={() => <h1>Movies</h1>} />
        <Route path="/search" exact render={() => <h1>Search</h1>} />
        <Route path="/search/:id" component={SearchMoviePage} /> */}

        {/* PUBLIC ROUTES */}
        <PublicRoute
          path="/login"
          exact
          isLoggedIn={isLoggedIn}
          render={() => <button onClick={handleClickLogin}>Log in</button>}
        />
        <PublicRoute
          path="/signin"
          exact
          isLoggedIn={isLoggedIn}
          render={() => <h1>Sign in</h1>}
        />
        {/* PRIVATE ROUTES */}
        <PrivateRoute
          path="/"
          exact
          isLoggedIn={isLoggedIn}
          render={() => <h1>HOME</h1>}
        />
        <PrivateRoute
          isLoggedIn={isLoggedIn}
          path="/search/:id"
          component={SearchMoviePage}
        />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
