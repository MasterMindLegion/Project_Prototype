import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { connect } from 'react-redux';

import UserInformation from './../Auth/UserInformation.jsx';
import PasswordChange from './../Auth/PasswordChange.jsx';
import AddItems from './../Pages/AddItems.jsx'
import HomePage from './../Pages/HomePage.jsx';
import EditItems from './../Pages/EditItems.jsx';
import PrivateRouteEditItems from './../Pages/Protected.jsx';

 function UserPage(props) {
console.log('USERPAGE PROPS', props)
 function edit(){
    fetch("http://www.final_charity.test:8080/api/details",{
        method: 'GET',
        headers: {
           'Accept':       'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + window.localStorage.getItem('_token')
      },})
    .then(res => res.json())
    .then(result => {
      props.startFetch(result);
    });
  }

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
            <li onClick={edit}>
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
  //==========
// REDUX
//==========
// What state be used
const mapStateToProps = state => {
  return {
    loginSuccess: state.loginReducer.loginSuccess,
    showRegisterLink: state.loginReducer.showRegisterLink,
    items: state.itemReducer.items
  };
}
// What Actions be used
const mapDispatchToProps = dispatch => {
  return {
    startFetch : (arg) => {
      console.log('startfetch is being dispatched')
      console.log(arg)
      dispatch({type: "startFetch", payload: arg})
      },
 }
}
  // What Actions be used
  export default connect(mapStateToProps, mapDispatchToProps)(UserPage);


  