import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText,  } from 'reactstrap';

 class UserInformation extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      email: '',
      confirm_password: '',
      localToken: window.localStorage.getItem('_token'),
      }
  }
  handleEmailChange = (event) => {
      this.setState({
        email: event.target.value
      });
    }

    handleConfirmPassword = (event) => {
      this.setState({
          confirm_password: event.target.value
      });
    }
  handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('/api/useremailchange', {
        method: 'PUT',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.localToken
        },
        body: JSON.stringify({
            email: this.state.email,
            confirm_password: this.state.confirm_password
        })
    })
    .then(response => response.json() )
    .then(data => {
    })
}
    render() {
        return (
          <>
           <Form action="" method="put" onSubmit={this.handleFormSubmit}>
             <FormGroup>
              <Label htmlFor="email">Email</Label>
               <Input type="text" name="email" value={this.state.email}
               onChange={this.handleEmailChange} 
               placeholder="Enter Your Email" id="email"/>
             </FormGroup>
             <FormGroup>
             <Label htmlFor="confirm_password">Confirm Password</Label>
             <Input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleConfirmPassword} placeholder="confirm_password" id="confirm_password"/>
             </FormGroup>
              <Button type="submit" value="Submit" color="danger">Submit</Button>       
           </Form> 
          </>
        )
    }
}
//==========
// REDUX
//==========
// What state be used
const mapStateToProps = state => {
  return {
    loginStatus: state.loginStatus,
    loginSuccess: state.loginSuccess,
    showRegisterLink: state.loginReducer.showRegisterLink
  };
}

// What Actions be used
const mapDispatchToProps = dispatch => {
  return {
   registerCharityFalse : () => dispatch({type: "CHARITY_FALSE"}),
   registerCharityTrue : () => dispatch({type: "CHARITY_TRUE"}),
 }
}
//what is connect?
export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
