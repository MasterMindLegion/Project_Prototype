import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Jumbotron,
  Button } from "reactstrap";
import ProductCounter from "./ProductCounter.jsx";
import { useParams } from "react-router-dom";
import { FaCcVisa } from 'react-icons/fa';FaApplePay
import { FaCcMastercard } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { FaGoogleWallet } from 'react-icons/fa';
import { Link } from "react-router-dom";

// const SingleItem = (props) => {
//   //pass down the correct ID here on props
//   return(
//     <div>
//       <p>Product ID: {props.id}</p>
//       <p>name: {props.name}</p>
//       <p>description: {props.description}</p>
//     </div>
//   )
// }

export default function ProductPage (props){
  //all props are passed down
  const {items} = {...props}
  console.log("[ProductPage] items", items)

  //looks for the item id based on url - app/more/info/3
  const {id} = useParams();

  const addItem =(item) => {
    props.addItemToCart({
        name: item.name,
        price:item.price_per_item,
        description: item.description,
        image: item.item_img,
        quantity: 1
    })
  }


  // addToCart = e => {
  //     console.log('addProps', this.props)
  //     this.props.addItemToCart({
  //         name: this.name,
  //         price: this.price,
  //         description: this.description,
  //         image: this.item_img,
  //         quantity: 1
  //   })
  // }

  let item = null;
  if(items.length > 0){
    item = items.filter((item) => (item.id == id))[0];
  }

  if (item === undefined) {
    item = null;
  }
  return(
      <div>
      {item !== null ? (

        <>
            <Jumbotron>
            <CardBody min-width="200px">
            <h4 className="display-3"><strong>  More Infro About Your Product! </strong> </h4>
            <CardTitle><h1>{item.item_name}</h1></CardTitle>
            <CardImg
                top
                width="100%"
                src={item.item_img}
                alt="product image and ITS DEMODAY"/>

            <p></p>
            <CardSubtitle> <h2>  Buy it only for  {item.price_per_item}  CZK !!!</h2>  </CardSubtitle>
            <CardSubtitle> <h5> Or see other items from seller! Click for more...</h5>  </CardSubtitle>
            <hr className="my-2" />
            <h4> Item description: </h4>
            <h5> {item.description} </h5>
           </CardBody>
           {/* <Button color="danger" size="md" block  onClick={this.addToCart}> <AddedProductModal/> Add to Cart</Button> */}

            <CardBody min-width="400px">
            <Link to="/app/checkout"> <h4> Proceed to Checkout </h4> </Link>
            <hr className="my-2" />
            <CardTitle>
                            <h5>   Delivery: Varies         </h5>
            </CardTitle>
            <CardSubtitle>
                <h5>   Returns: 30 days refund, buyer pays return postage          </h5>
            </CardSubtitle>
            <CardText> <h4 color="secondary"> Payments: <FaCcVisa /> <FaCcMastercard /> <FaApplePay /> <FaGoogleWallet /> </h4>   </CardText>


            <CardText> <h6 color="secondary">  Get more time to pay.  See payment information... </h6>   </CardText>

            </CardBody>
            <Col>
            {/** HERE GOES ADD/REMOVE PRODUCT QUANTITY */}
            <ProductCounter/>
            </Col>


            </Jumbotron>


            {/* <Row>
            <Col>
            <Card
            style={{
                padding: "1rem",
                margin: "1rem",
                minHeight: "500px",
                maxWidth: "500px",
            }}>
                <CardTitle><h1>{item.item_name}</h1></CardTitle>
                <CardImg
                top
                width="100%"
                src={item.item_img}
                alt="product image"/>

                <CardBody min-width="500px">
                <CardSubtitle>Description: {item.description}</CardSubtitle>
                <CardText>Price: {item.price_per_item} CZK</CardText>
                </CardBody>
                </Card>
            </Col> */}

            {/* </Row> */}
        </>
       ) : (
         <h2>Loading</h2>
       )
       }
      </div>
    )


}
