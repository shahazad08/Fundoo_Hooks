import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registeration from "./pages/Registeration";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassWord from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import ParentComponent from "./pages/ParentComponent";
import Bin from "./pages/Bin";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Registeration} />
      <Route path="/login" component={Login} />
      <Route path="/forgot" component={ForgetPassword} />
      <Route path="/reset/:token" component={ResetPassWord} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/parent" component={ParentComponent}/>
      <Route path="/trash" component={Bin} />
    </Router>
  );
};

export default Routes;