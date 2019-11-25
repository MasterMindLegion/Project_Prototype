import React from 'react';
import { Card, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import {useParams } from "react-router-dom";


export default function  ProductPage (props){
  const {items} = {...props}
  let { id } = {...useParams()};
  
  // console.log(props.items);
  console.log('ITEMS: ', items)
  // console.log('ITEMS: ')

  // const content

  // componentDidMount(){
  //   content = (
  //     <div>{item[2].item_name}</div>
  //   )
  // }

    return(
      <div>
        <h1>Hel {id}</h1>
        <h1>WORLD</h1>

        {/* {items.map(item => (
          <>
          <p>{item.item_name}</p>
          <p>{item.id}</p>
          </>

        ))} */}
        {/* <div>{items[2].item_name}</div> */}
      </div>
    )


}