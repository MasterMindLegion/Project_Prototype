import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
import NotFoundPage from './Layout/NotFoundPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import Cart from './Layout/Main/Cart/Cart.jsx';
import SellOn from './Layout/Main/SellOn.jsx';
import Checkout from './Layout/Main/Checkout/Checkout.jsx'
import CharityRegister from './Auth/CharityRegister.jsx';
import UserPage  from './Pages/UserPage.jsx';
import PrivateRoute from './Pages/Protected.jsx';
import ProductPage from './Layout/Main/Cart/ProductPage.jsx';
import Charities from './Pages/Charities.jsx';
import ShowItems from './Pages/ShowItems.jsx';

class App extends React.Component {
    constructor(props) {
        super(props); 
        const cartString = window.localStorage.getItem("cart")
        const cart = cartString ? JSON.parse(cartString) : [{name: 'nemo'}]
        this.state = {
            token: null,
            logged_in: null,
            items: [],
            charities: [],
            cart: cart,
        };
    }
    componentDidMount() {
        //MARTIN VERSION /www.final_charity.test:8080/
        fetch("http://www.final_charity.test:8080/api/items")
            .then(res => res.json())
            .then(result => {
            //  console.log("[Homepage] FETCH", result);
                this.setState({
                    isLoaded: true,
                    items: result
                });
            });

            fetch("http://www.final_charity.test:8080/api/charities")
            .then(res => res.json())
            .then(result => {
            //  console.log("[Homepage] FETCH", result);
                this.setState({
                    isLoaded: true,
                    charities: result
                });
            });
    }
    
    addItemToCart = (newItem) => {
        this.setState(prevState => {
            const hasItem = !!prevState.cart.find(item => item.name === newItem.name)
            let newCart
            if(hasItem) {
                newCart = prevState.cart.reduce((acc, curr) => {
                    if(newItem.name === curr.name) curr.quantity = curr.quantity + 1
                    return acc.concat(curr)
                }, [])
            } else {
                newCart = prevState.cart.concat(newItem)
            }
            window.localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...prevState,
                cart: newCart
            }
        })
    }
    removeItemFromCart = (itemName) => {
        this.setState(prevState => {
            const newCart = prevState.cart.filter(item=>itemName!==item.name)
            return {
                ...prevState,
                cart: newCart
            }
        })
    }
    decreaseItemInCart=itemName=>{
    
    }
    render() {
       
        return (
            <BrowserRouter>
            <Switch>
                {/* HomePage */}
                 <Route exact path="/"  render={() => {
                     return <HomePage
                     items={this.state.items}
                     addItemToCart={this.addItemToCart}
                     charities={this.state.charities}
                     />;
                 }}
             ></Route>
             {/* REGISTER */}
                 <Route exact path="/app/register" component={Register}/>           
                {/* LOGIN */}
               <Route exact path="/app/login">
                   <Login/>
               </Route>   
               {/* REGISTER CHARITY/PRIVATE ROUTE */}
               <PrivateRoute exact path="/app/registerCharity">
                    <CharityRegister/>
                </PrivateRoute>
                {/* CART */}
                <Route exact path="/app/cart"  render={() => {
                     return <Cart
                     items={this.state.cart} 
                     removeItemFromCart={this.removeItemFromCart}
                     />;
                 }}
                />


                 <Route exact path="/app/charities"  render={() => {
                     return <Charities
                     charities={this.state.charities}
                     />;
                 }}
             ></Route>


                {/* 'MORE INFO' BUTTON --- SHOULD GO TO PRODUCT PAGE */}
                {/* <Route path="/app/moreinfo/:id" component={ProductPage} /> */}
                <Route path="/app/moreinfo/:id" 
                 render={() => {
                    return <ProductPage
                    items={this.state.items}
                    />;
                }} />


                {/* SELL ON */}
                <Route path="/app/sellon" component={SellOn} />
                {/* CHECKOUT  */}
                <Route path="/app/checkout" component={Checkout} />
                {/* Display User Page */}
                <Route path="/app/user" component={UserPage} />
             
                {/* Change Charity Information */}

                 {/* show items from one Charity */}
                <Route exact path="/app/showItems/:id" render={() => {
                      return   <ShowItems
                     items={this.state.items}
                     />;
                 }}
                 ></Route>

                {/* NotFoundPage */}
               <Route path="*" component={NotFoundPage} /> 
            </Switch>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = state => {
    return {
      loginStatus: state.loginReducer.loginStatus,
      loginSuccess: state.loginReducer.loginSuccess,
      
    };
  }
export default connect(mapStateToProps)(App);