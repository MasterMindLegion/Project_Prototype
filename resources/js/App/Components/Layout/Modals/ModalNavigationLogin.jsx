import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './../../Auth/Login.jsx';
import { connect } from 'react-redux';
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalNavigationLogin = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [loginValue, setLoginValue] = useState('Log In');

  const toggle = () => setModal(!modal);

  // Close Modal
  const parentLoginStatus = () =>  { 
    console.log("parentLoginStatus - closing modal");
    setModal(!modal);
  }
  // Get login value from Login
  const parentLoginValue = (value) =>  { 
    setLoginValue(value);
  }
  return (
    <div>
  <Button color="success" onClick={toggle}>{buttonLabel} {'Login'}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>  <FontAwesomeIcon  icon={faIdCard} /> </ModalHeader>
        <ModalBody>
          <Login 
          
           />
        </ModalBody>
      </Modal>
    </div>
  );
}
//==========
// REDUX
//==========
// What state be used
const mapStateToProps = state => {
  return {
    loginStatus: state.loginStatus,
    loginSuccess: state.loginSuccess,
  };
}
export default connect(mapStateToProps)(ModalNavigationLogin);
