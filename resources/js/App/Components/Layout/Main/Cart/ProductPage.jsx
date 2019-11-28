import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button } from "reactstrap";
import ProductCounter from "./ProductCounter.jsx";
import { useParams } from "react-router-dom";

export default function ProductPage (props){
  //all props are passed down
  const {items} = {...props}
  console.log("[ProductPage] items", items)

  //looks for the item id based on url - app/more/info/3
  const {id} = useParams();

  const addItem =() => {
    props.addItemToCart(props.name)
  }

  let item = null;
  if(items.length > 0){
    item = items.filter((item) => (item.id == id))[0];
  } 
 
  if (item === undefined) {
    item = null;
  }
  return(
      <div>
      {
       item !== null ? (
         <Row>
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
          </Col>
          
          <Col>
          <ProductCounter/>
          </Col>
          
        </Row>
       ) : (
         <h2>Loading</h2> 
       )
       }
      </div>
    )


}
