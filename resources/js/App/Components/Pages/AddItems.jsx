import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import {store} from './../../../app';

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price: null,
      description: null,
      in_stock: null,
        localToken: window.localStorage.getItem('_token'),
    }
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    })
  }
handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    })
  }
handleInStockChange = (event) => {
    this.setState({
      in_stock: event.target.value,
    })
  }


  componentDidMount() {
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('/api/addItems', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
        'Authorization': 'Bearer ' + this.state.localToken
      },
      body: JSON.stringify({
        item_name: this.state.name,
        price_per_item: this.state.price,
        description: this.state.description,
        in_stock: this.state.in_stock,
      })
    })
    .then(response => response.json())
    .then(data => {
    })
}
  render() {
    return (
      <>
        <h1>Please add new item</h1>
        <Form action="" method="post" onSubmit={this.handleFormSubmit} >
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input type="integer" name="price"
              value={this.state.price}
              onChange={this.handlePriceChange}
            />
          </FormGroup>
        <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
        <FormGroup>
            <Label for="in_stock">In stock</Label>
            <Input type="text" name="in_stock"
              value={this.state.in_stock}
              onChange={this.handleInStockChange}
            />
          </FormGroup>
          <Button type="submit" value="Login" color="danger">Send item</Button>
        </Form>
      </>
    )
  }
}
//==========
// REDUX
//==========
// What state be used
/* const mapStateToProps = state => {
  return {
    loginSuccess: state.loginReducer.loginSuccess,
    _token : state.loginReducer._token
  };
}
// What Actions be used
const mapDispatchToProps = dispatch => {
  return {
    loginFunction: () => {
      dispatch({ type: "login" })
    }
  }
} */

export default AddItems;