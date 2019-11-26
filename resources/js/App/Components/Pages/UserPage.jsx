import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import UserInformation from './../Auth/UserInformation.jsx';
import PasswordChange from './../Auth/PasswordChange.jsx';
import HomePage from './../Pages/HomePage.jsx';


export default function UserPage() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app/user/email">Change Email</Link>
            </li>
            <li>
              <Link to="/app/user/password">Change Password</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/app/user/email">
              <UserInformation />
            </Route>
            <Route path="/app/user/password">
              <PasswordChange />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


  