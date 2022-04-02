import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, ...props }) => {
  return isLoggedIn ? <Redirect to="/" /> : <Route {...props} />;
};

export default PublicRoute;
