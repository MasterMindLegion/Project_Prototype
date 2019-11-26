import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText,  } from 'reactstrap';

 export default class PasswordChange extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      old_password: '',
      new_password: '',
      confirm_new_password: '',
      localToken: window.localStorage.getItem('_token'),
      }
  }
  handleOldPassword = (event) => {
      this.setState({
        old_password: event.target.value
      });
    }

    handleNewPassword = (event) => {
      this.setState({
          new_password: event.target.value
      });
    }
    handleConfirmNewPassword = (event) => {
        this.setState({
            confirm_new_password: event.target.value
        });
      }

  handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('/api/userpasswordchange', {
        method: 'PUT',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.localToken
        },
        body: JSON.stringify({
            old_password: this.state.old_password,
            new_password: this.state.new_password,
            confirm_new_password: this.state.confirm_new_password
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
              <Label htmlFor="email">Old Password</Label>
               <Input type="password" name="old_password" value={this.state.old_password}
               onChange={this.handleOldPassword} 
               placeholder="old_password" id="old_password"/>
             </FormGroup>

             <FormGroup>
             <Label htmlFor="new_password">New Password</Label>
             <Input type="password" name="new_password" value={this.state.new_password} onChange={this.handleNewPassword} placeholder="confirm_password" id="confirm_password"/>
             </FormGroup>

             <FormGroup>
             <Label htmlFor="confirm_new_password">Confirm Password</Label>
             <Input type="password" name="confirm_new_password" value={this.state.confirm_new_password} onChange={this.handleConfirmNewPassword } placeholder="confirm_new_password" id="confirm_new_password"/>
             </FormGroup>

              <Button type="submit" value="Submit" color="danger">Submit</Button>       
           </Form> 
          </>
        )
    }
}