
import React, { useState } from 'react';
// import { Jumbotron } from 'reactstrap';
import { Card, Container, Row, Col } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect, useParams } from "react-router-dom";
import ProductCard from "../Layout/Main/Cart/ProductCard.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

import Navigation from './../Layout/Main/Navigation.jsx';

const EditItems = (props) => {
/*             const [id, setId] = useState(useParams());
            console.log("id",typeof(id.id));


            const productCards = props.items.map((x, index) => {
            
            if(x.charity_id == id.id){
                console.log(x)
                console.log(id.id);
            return (
                <Col key={`product-${x.item_name}-${index}`}>
                
                    <ProductCard
                        name={x.item_name}
                        item_img={x.item_img}
                        price={x.price_per_item}
                        description={x.description}
                        addItemToCart = {props.addItemToCart}
                    />
                </Col>
            );}
        });
   */

    return (
        <div>
    {/*     {console.log(props)} */}
        <p>dfdf</p>
        </div>
    );
};

export default EditItems;