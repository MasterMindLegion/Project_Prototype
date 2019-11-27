import React from 'react';
import { Button } from 'reactstrap';
import { addToCart } from './ProductCard';
import AddedProductModal from './AddedProductModal.jsx';

export default class ProductCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  
  decrement(){
    if(this.state.count > 0){
       this.setState(prevState => ({count: prevState.count-1}))
    }
 
  addToCart = e => {
      console.log('addProps', this.props)
      this.props.addItemToCart({
          name: this.props.name,
          price: this.props.price,
          description: this.props.description,
          image: this.props.item_img,
          quantity: 1
    })
  }

 
}
  render() {
    return (
      <div>
        <h1>Current quantity: {this.state.count}</h1>
        <Button onClick={this.increment}>Add</Button>
        <Button onClick={this.decrement}>Remove</Button>
        <Button onClick={this.reset}>Reset</Button>
        <Button onClick={this.addToCart}><AddedProductModal />
          
          Add to cart</Button>
          
      </div>
      )
    }
  }

