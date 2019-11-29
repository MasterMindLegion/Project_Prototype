import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import UserInformation from './../Auth/UserInformation.jsx';
import PasswordChange from './../Auth/PasswordChange.jsx';
import AddItems from './../Pages/AddItems.jsx'
import HomePage from './../Pages/HomePage.jsx';
import editItems from './../Pages/EditItems.jsx';
import PrivateRouteEditItems from './../Pages/Protected.jsx';

export default function UserPage() {
    return (
      <>
      {/* Cant be in router */}
       <Link to="/">Home</Link>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/app/user/email">Change Email</Link>
            </li>
            <li>
              <Link to="/app/user/password">Change Password</Link>
            </li>
            <li>
              <Link to="/app/addItems"> Add new item</Link>
            </li>
            <li>
              <Link to="/app/editItems/:id"> Edit item</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/app/user/email">
              <UserInformation />
            </Route>
            <Route exact path="/app/user/password">
              <PasswordChange />
              {/* Add Items */}
              </Route>
            <Route exact path="/app/addItems">
              <AddItems/>
            </Route>
             <Route exact path="/app/editItems/:id" render={() => {
               return <EditItems/>;
              }}
            />
          </Switch>
        </div>
      </Router>
      </>
    );
  }


  