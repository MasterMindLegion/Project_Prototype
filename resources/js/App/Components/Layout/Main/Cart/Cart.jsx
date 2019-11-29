import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    FormGroup,
    Label,
    Input,
    Jumbotron
} from "reactstrap";
import {cartContext} from "../../../App.jsx"

const CartItem = props => {
     const SelectedCartContext = useContext(cartContext);
    //  console.log("CONTEXT CONSUMER FROM CART", SelectedCartContext)

    const removeItem =() => {
        props.removeItemFromCart(props.name);

    }

    return (
        <>
            <div>
            <CardBody min-width="400px">
                <h4 className="display-3"><strong>    <h4> {props.name} </h4> </strong></h4>
                <CardImg max-width="50rem" max-height="20%" src={props.image} alt="Card image"/>
                <p></p>
                <CardSubtitle> <h2>  Only {props.price}  CZK </h2>  </CardSubtitle>
                <hr className="my-2" />
                <h4> Item description: </h4>
                <h5>  {props.description} </h5>
                <p className="lead">
            <Button className="counter-button" color="primary"  onClick={removeItem}>Remove Item</Button>
                </p>

                <CardSubtitle>  <h5> In case You Mind </h5>  </CardSubtitle><Link disabled to="app/products">Search Other Items...  </Link>
                
                </CardBody>
                <hr className="my-2" />
             </div>
        </>
    );
};


// const Cart = props => {
    // const [quantityState, setQuantityState] = useState( Object.values(...props.items)[])

    // console.log("cart props", props);
    // console.log('prop quantity', Object.values(...props.items)[4])
    // console.log('state quantity', quantityState)


const Cart = props => {
    // const [quantityState, setQuantityState] = useState( Object.values(...props.items)[4])
    const [value, setValue] = React.useState(localStorage.getItem("cart"));
    const onClick = event => setValue(event.target.value);
    const localstorage_shoppingCart = JSON.parse(value);
    console.log(localstorage_shoppingCart);

    const increment = (index) => {
        setQuantityState(quantityState+1)
    }
    const decrement = (index) => {
        if (quantityState > 0){
            setQuantityState(quantityState-1)
        } return
    }
    let productCard = props.items.map((item, index) => {
        return (

            <CartItem
                key={`cartItem-${index}`}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                quantity={item.quantity}
                removeItemFromCart ={props.removeItemFromCart}
            />
        );
    });
    return (
        <Jumbotron>
             {productCard}
          <CardBody min-width="400px">
            <Link to="/app/checkout">Proceed to Checkout</Link>
         </CardBody>
        </Jumbotron>);
};
export default Cart;
