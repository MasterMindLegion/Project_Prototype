//
import React, {useContext} from 'react';
import {
    Card,Container,CardImg,CardText,CardBody,CardLink, Button,CardTitle, CardSubtitle,Col, Row, CardDeck
} from "reactstrap";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';FaApplePay
import { FaCcMastercard } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaGoogleWallet } from 'react-icons/fa';
import {cartContext} from "../../../App.jsx"
console.log("cartcontext from posts", cartContext)
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';


const Posts = ({posts, loading, addItemToCart }) => {
    const cartContextValue = useContext(cartContext)
    console.log('cartcontextvalue from parent inside posts', cartContextValue)

    const handleClick = (arg) => {
        addItemToCart({
            name: arg.item_name,
            price: arg.price_per_item,
            description: arg.description,
            image: arg.item_img,
            quantity: 1
         })
        // cartContextValue.selectedCartCallback(arg.item_name)
    }
    if(loading) {
        return <h2> loading ... </h2>;
    }
console.log(posts);
  return (
    <ul className="card">
        {posts.map (post => (
                <div key={post.id} className='card-body'>
         <Container>
            {/* <Row> */}
            <Col sm="8">
            <Card style={{padding: "1rem", margin: "0.5rem",maxHeight: "900px", maxWidth: "900px"}}>
                <CardBody min-width="500px">
                <CardBody>
                    <CardTitle> <h1>{post.item_name} </h1></CardTitle>
                </CardBody>
                <CardImg top width="90%" src={post.item_img} />

                    <div>
                    <CardBody>
                    <CardText>{post.description}</CardText>
                    <CardSubtitle><h3>{post.price_per_item} CZK  BUY NOW !!! </h3> </CardSubtitle>


                        <Button onClick={() => handleClick(post)}><FaShoppingCart />  ADD TO SHOPPING CART </Button>
                        {/* <Button onClick={this.addToCart}>Add to Cart</Button> */}

                       <Link to="/app/cart"> GO TO SHOPPING CART <FaShoppingCart /></Link>

                       <h3 color="success"><FaCcVisa /> <FaCcMastercard /> <FaApplePay /> <FaGoogleWallet /> </h3>

                        {/* <Link to="/app/checkout"> <h3> </h3></Link>
                        <Link to="/app/checkout"> <h3><</h3></Link>
                        <Link to="/app/checkout"> <h3> </h3></Link> */}

                        <Link to="/app/checkout/checkout">  Proceed to Checkout </Link>
                        {/* <Link to="/checkout">Go To Checkout </Link> */}
                    </CardBody>
                    </div>
                </CardBody>
                </Card>
            </Col>
            {/* </Row> */}
            </Container>
            </div>
        ))}
        </ul>
   );
};

export default Posts;






// import React, { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import { Button } from "reactstrap";
// import {useParams } from "react-router-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import axios from 'axios';
