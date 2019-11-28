
import React, {useContext} from 'react';
import {
    Card,Container,CardImg,CardText,CardBody,CardLink,Jumbotron, Button,CardTitle, CardSubtitle,Col, Row, CardDeck
} from "reactstrap";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';FaApplePay
import { FaCcMastercard } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { FaGoogleWallet } from 'react-icons/fa';
import {cartContext} from "../../../App.jsx"
console.log("cartcontext from posts", cartContext)



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
        return <h2> Loading... </h2>;
    }
console.log(posts);
  return (
    <ul className="card">
        {posts.map (post => (
                <div key={post.id} className='card-body'>





            <Jumbotron>
                    <CardTitle> <h1>{post.item_name} </h1></CardTitle>
                    <CardImg top width="90%" alt="Loading..." src={post.item_img} />
                    <p> </p>
                    <hr className="my-2" />
                    <CardSubtitle> <h2> Price:  {post.price_per_item} CZK </h2>  </CardSubtitle>
                    
                    <h4> Item description:   </h4>
                    <CardText>{post.description}</CardText>
                    <hr className="my-1" />
                    <CardBody min-width="400px">
                    
                    <Button onClick={() => handleClick(post)}><FaShoppingCart />  ADD TO SHOPPING CART </Button>
                      
                       <h4> Payments: <FaCcVisa /> <FaCcMastercard /> <FaApplePay /> <FaGoogleWallet /> </h4>
                       <h6>  Get more time to pay.  See payment information... </h6>
                        {/* <Link to="/app/checkout"> <h3> </h3></Link>
                        <Link to="/app/checkout"> <h3><</h3></Link>
                        <Link to="/app/checkout"> <h3> </h3></Link> */}
                         <Link to="/app/cart"> Go To Shopping Cart </Link>
                        <p> </p>
                        <Link to="/app/checkout/checkout">  Proceed to Checkout </Link>
                    </CardBody>
                </Jumbotron>


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
