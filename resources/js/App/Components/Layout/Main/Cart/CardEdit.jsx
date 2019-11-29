
import React from "react";
import {
    Card,
    CardText,
    CardBody,
    Button ,Form, FormGroup, Label, Input, FormText, 
} from "reactstrap";

export default class CardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            price: this.props.price, 
            description: this.props.description, 
            inStock: this.props.in_stock,
            id: this.props.id,
            success: false,
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
      inStock: event.target.value,
    })
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('/api/editItems', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
        'Authorization': 'Bearer ' + this.state.localToken
      },
      body: JSON.stringify({
        id: this.state.id,
        item_name: this.state.name,
        price_per_item: this.state.price,
        description: this.state.description,
        in_stock: this.state.inStock,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('CARDEDIT', data)
    if(data.success.token !== null/*  && modalStatus */) {this.setState({
        success:true
    })}
    })
    .catch((e) => {
    console.log(e);
  })
}
    render() {

        return (


  <>

                      <Card
                    style={{
                        padding: "1rem",
                        margin: "1rem",
                        maxHeight: "600px",
                        minWidth: "200px",
                    }}>

     
            <CardBody min-width="500px">
           <Form action="" action="" method="post" onSubmit={this.handleFormSubmit}>

            <CardText>
             <FormGroup>
              <Label htmlFor="name">Name</Label>
               <Input type="text" name="register_charity_name" value={this.state.name}
               onChange={this.handleNameChange} 
               placeholder="New name" id="name"/>
             </FormGroup>
             </CardText>

            <CardText>
             <FormGroup>
              <Label htmlFor="price">Price per item</Label>
               <Input type="integer" name="pricee" value={this.state.price}
               onChange={this.handlePriceChange} 
               placeholder="New price" id="price"/>
             </FormGroup>
             </CardText>

            <CardText>
             <FormGroup>
              <Label htmlFor="description">Description</Label>
               <Input type="text" name="description" value={this.state.description}
               onChange={this.handleDescriptionChange} 
               placeholder="New description" id="description"/>
             </FormGroup>
             </CardText>

            <CardText>
             <FormGroup>
              <Label htmlFor="register_charity_name">In_stock</Label>
               <Input type="integer" name="in_stock" value={this.state.inStock}
               onChange={this.handleInStockChange} 
               placeholder="New in stock" id="inStock"/>
             </FormGroup>
             </CardText>
            <Button type="submit" value="Submit" color="danger">Submit</Button>  
            <div className='text-danger'>
               {this.state.success == false ? '' : <p role="alert" className="alert alert-success">Item was changed</p>}
            </div>
              </Form> 
             </CardBody>
             </Card>
          </>
  
        );
    }
}
