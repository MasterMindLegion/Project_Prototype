import React, {useContext, useState} from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import {
    Card,
    Container,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Row,
    CardDeck
} from "reactstrap";
import {cartContext} from "../../../App.jsx";
import ProductCounter from "./ProductCounter.jsx";
// import Posts from './../Posts.jsx';


const CartItem = props => {
     const SelectedCartContext = useContext(cartContext);
    //  console.log("CONTEXT CONSUMER FROM CART", SelectedCartContext)

    const removeItem =() => {
        props.removeItemFromCart(props.name)
    }

    return (
        <>
            <div>
                {/* <h1>getting data from posts: {SelectedCartContext.selectedCartValue}</h1> */}
               <CardDeck>
                 <Col sm="6">
                <Card
                    style={{
                        padding: "1rem", margin: "5rem",maxHeight: "800px", minWidth: "400px"}}>
                    <CardImg top width="100%" src={props.image} alt="Card image"/>
                    <CardBody min-width="400px">
                        <CardTitle> Selected item: </CardTitle>
                        <CardText> {props.name} </CardText>
                        <CardSubtitle> {props.price}CZK</CardSubtitle>
                        <CardSubtitle> {props.quantity}</CardSubtitle>
                        <CardSubtitle> {props.description} </CardSubtitle>
                        <Button>Clear Cart</Button>
                        <Button className="counter-button" onClick={removeItem}>Remove Item</Button>

                        <Link to="/app/checkout">Proceed to Checkout</Link>
                    </CardBody>
                </Card>
                </Col>
                </CardDeck>
            </div>
            
        </>
    );
};


const Cart = props => {
    const [quantityState, setQuantityState] = useState( Object.values(...props.items)[4])
    
    // console.log("cart props", props);
    // console.log('prop quantity', Object.values(...props.items)[4])
    // console.log('state quantity', quantityState)
    
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
            <React.Fragment>
                <Container>
                    <Col>
                        <Row>
                        <CartItem
                            key={`cartItem-${index}`}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            description={item.description}
                            quantity={item.quantity}
                            removeItemFromCart ={props.removeItemFromCart}
                        />
                            {/* <h4>current quantity: {quantityState}</h4>
                                <button onClick={() => increment(index)}>+</button>
                                <button onClick={() => decrement(index)}>-</button> */}
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <ProductCounter/>
                        </Row>
                    </Col>
                </Container>
                <br/>
            </React.Fragment>   
        );
    });
    return <div>{productCard}</div>;
  <Button>Remove Item</Button>

};
export default Cart;
