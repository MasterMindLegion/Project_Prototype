import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from '../Layout/Navigation.jsx';
import { Link } from 'react-router-dom';
import Products from '../Layout/Main/Products.jsx'
import Footer from '../Layout/Footer/Footer.jsx'

export default class ProductsPage extends React.Component {
   constructor(props) {
       super(props);
   }
   render() {

       return (
         <>
           <Navigation items={this.props.cart} removeItemFromCart={this.props.removeItemFromCart} />

                     <Products
                     addItemToCart={ this.props.addItemToCart }
                     />
           <Footer />
         </>
       )
    }
}
