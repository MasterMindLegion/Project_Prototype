import React from 'react';
import { Button } from 'reactstrap';
import { addToCart } from './ProductCard';
import AddedProductModal from './AddedProductModal.jsx';
import { FaShoppingCart } from 'react-icons/fa';
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



}
  render() {
    return (
      <div>
           <h2> Update Your Cart  <FaShoppingCart />  </h2>
        <h3>Current Quantity in Your Cart: {this.state.count}</h3>

        <Button color="primary" size="lg" onClick={this.increment}  >Add More Item</Button>
        <Button color="primary" size="lg" onClick={this.decrement}  >Remove Item</Button>
        {/* <Button color="primary" size="lg" onClick={this.reset} > Refresh Your Cart </Button> */}
        {/* <Button color="primary" size="md" onClick={this.addToCart}> <AddedProductModal/> Add to cart</Button> */}
        {/* <AddedProductModal/>  */}
        <hr className="my-2" />
        <Button color="danger" size="md" block  onClick={this.addItemToCart}> <AddedProductModal/> Add to Cart</Button>
        <Button color="danger" size="md" block> Refresh Your Cart</Button>

      </div>
      )
    }
  }

