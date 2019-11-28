import React, {useContext} from "react";
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
    console.log("CONTEXT CONSUMER FROM CART", SelectedCartContext)

    const removeItem =() => {
        props.removeItemFromCart(props.name);

    }



    return (
        <>
            <div>

            <h1> display cart message </h1>
            <Jumbotron>
            <CardBody min-width="400px">
            <h4 className="display-3"><strong>   Excellent Choice!  You're almost there! </strong> </h4>
                <h3 className="display-3"><strong>   Selected item: </strong> </h3>
                <h4 className="display-3"><strong>    <h4> {props.name} </h4> </strong></h4>
                <CardImg max-width="50rem" max-height="20%" src={props.image} alt="Card image"/>
                <p></p>
                <CardSubtitle> <h2>  Only {props.price}  CZK </h2>  </CardSubtitle>
                <hr className="my-2" />
                <h4> Item description: </h4>
                <h5>  Donald John Trump is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality. Trump was born and raised in the New York City borough of Queens, and received a bachelor's degree in economics from the Wharton School at the University of Pennsylvania..{props.description} </h5>
                <p className="lead">
            <Button className="counter-button" color="primary"  onClick={removeItem}>Remove Item</Button>
                </p>
                <Button color="secondary">Learn More</Button>
                </CardBody>
                <hr className="my-2" />
                <CardBody min-width="400px">

                <CardTitle><Link to="/app/products">Click to See More Items</Link></CardTitle>
                <Link to="/app/checkout">Proceed to Checkout</Link>

                <FormGroup>
                    <Label for="examplePassword"> <h4> Enter Discount Code   </h4> </Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Your Discount Code " />
                </FormGroup>

                </CardBody>
            </Jumbotron>
             </div>
        </>
    );
};

const Cart = props => {
    console.log("cart props", props);
    const [value, setValue] = React.useState(localStorage.getItem("cart"));
    const onChange = event => setValue(event.target.value);
    const localstorage_shoppingCart = JSON.parse(value);
    console.log(localstorage_shoppingCart);


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
    return <div>{productCard}</div>;


};
export default Cart;
