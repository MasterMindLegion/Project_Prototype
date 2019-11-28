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
           <h2> Update Your Cart  <FaShoppingCart />  </h2>
        <h3>Current Quantity in Your Cart: {this.state.count}</h3>

        <Button color="primary" size="lg" onClick={this.increment}  >Add More Item</Button>
        <Button color="primary" size="lg" onClick={this.decrement}  >Remove Item</Button>
        {/* <Button color="primary" size="lg" onClick={this.reset} > Refresh Your Cart </Button> */}
        {/* <Button color="primary" size="md" onClick={this.addToCart}> <AddedProductModal/> Add to cart</Button> */}
        {/* <AddedProductModal/>  */}
        <hr className="my-2" />
        <Button color="danger" size="md" block >  <AddedProductModal/> Add to Cart</Button>
        <Button color="danger" size="md" block  onClick={this.reset} >  <AddedProductModal/> Refresh Your Cart</Button>

      </div>
      )
    }
  }

