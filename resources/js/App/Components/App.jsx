import React, { createContext } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
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
import Products from "./Layout/Main/Products.jsx";
 import ProductsPage from "./Pages/ProductsPage.jsx";
 import AddItems from './Pages/AddItems.jsx';
import Navigation from './Layout/Main/Navigation.jsx';
import Footer from './Layout/Footer/Footer.jsx';
export const cartContext = createContext({});
const CartContextProvider = cartContext.Provider;
class App extends React.Component {
    constructor(props) {
        super(props);
        const cartString = window.localStorage.getItem("cart");
        const cart = cartString ? JSON.parse(cartString) : [];
        this.state = {
            token: null,
            logged_in: null,
            items: [],
            charities: [],
            cart: cart,
            selectedCart: null,
            test: "hi",
            numberOfItems: 0,
        };
        console.log("cart",this.state.cart);
        
    }
    componentDidMount() {
     
        //MARTIN VERSION /www.final_charity.test:8080/
        fetch("http://www.projectprototype.test:8080/api/items")
        // fetch("http://www.final_charity.test:8080/api/items")
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            });
        fetch("http://www.projectprototype.test:8080//api/charities")
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    charities: result
                });
            });

            this.props_token = window.localStorage.getItem('_token');
            fetch('/api/validateUser', {
                method: 'GET',
                headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + this.props_token
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        window.localStorage.setItem('_token', data.success.token);
                        this.props_token = window.localStorage.getItem( data.success.token);
                        this.props.loginFunction();
                      }
                    });
    }
    addItemToCart = newItem => {
        this.setState(prevState => {
            const hasItem = !!prevState.cart.find(
                item => item.name === newItem.name
            );
            let newCart;
            if (hasItem) {
                newCart = prevState.cart.reduce((acc, curr) => {
                    if (newItem.name === curr.name)
                        curr.quantity = curr.quantity + 1;
                    return acc.concat(curr);
                }, []);
            } else {
                newCart = prevState.cart.concat(newItem);
            }
            window.localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...prevState,
                cart: newCart
            };
        });
        this.setState(prevState => {
            const newItem = this.state.numberOfItems + 1;
            return {
                ...prevState,
                numberOfItems: newItem,
                }
            })
    };
    selectedCartCallback = arg => {
        this.setState({
            selectedCart: arg
        });
    };
    removeItemFromCart = itemName => {
        if(Object.values(localStorage.getItem('cart')).includes(this.state.cart.name) > -1 ) {
            let cart = JSON.parse(localStorage.getItem('cart'))
            console.log(cart)
            cart = cart.filter(item => {
                return item.name != itemName;
            });
            console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
        }
        this.setState(prevState => {
            const newCart = prevState.cart.filter(
                item => itemName !== item.name
            );
            return {
                ...prevState,
                cart: newCart
            };
        });
        this.setState(prevState => {
            const newItem = this.state.numberOfItems - 1;
            return {
                ...prevState,
                numberOfItems: newItem,
                }
        })
    };
    decreaseItemInCart = itemName => {};
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* HomePage */}
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <HomePage
                                    items={this.state.items}
                                    addItemToCart={this.addItemToCart}
                                    charities={this.state.charities}
                                    numberOfItems={this.state.numberOfItems }
                                />
                            );
                        }}
                    ></Route>
                    {/* REGISTER */}
                    <Route exact path="/app/register" component={Register} />
​
                    <Route exact path="/app/charities"  render={() => {
                        return (
                            <>
                            <Navigation />,
                            <Charities
                            charities={this.state.charities}
                            />,
                            <Footer />
                            </>
                        )

                 }}
                    ></Route>
                    {/* LOGIN */}
                    <Route exact path="/app/login">
                        <Login />
                    </Route>
                    {/* REGISTER CHARITY/PRIVATE ROUTE */}
                    <PrivateRoute exact path="/app/registerCharity">
                        <CharityRegister />
                    </PrivateRoute>
                    {/* CART */}
                    <CartContextProvider
                        value={{
                            selectedCartValue: this.state.selectedCart,
                            selectedCartCallback: this.selectedCartCallback
                        }}
                    >
                        <Route
                            exact
                            path="/app/cart"
                            render={() => {
                                return (
                                    <>
                                    <Navigation />
                                    <Cart
                                        items={this.state.cart}
                                        removeItemFromCart={
                                            this.removeItemFromCart
                                        }
                                    />
                                    <Footer />
                                    </>
                                );
                            }}
                        />
                        {/* 'MORE INFO' BUTTON --- SHOULD GO TO PRODUCT PAGE */}
                        {/* <Route path="/app/moreinfo/:id" component={ProductPage} /> */}
                        <Route
                            path="/app/moreinfo/:id"
                            render={() => {
                                return <ProductPage
                                items={this.state.items}
                                addItemToCart= {this.addItemToCart}
                                />;
                            }}
                        />
                        {/* SELL ON */}
                        <Route
                            exact
                            path="/app/sellon"
                            render={() => {
                                return (
                                    <>
                                    <Navigation />
                                    <SellOn/>
                                    <Footer />
                                    </>
                                );
                            }}
                        />
                        {/* PRODUCTS */}
                        {/* <CartContextProvider value={this.selectedCartCallback}> */}
                        <Route
                            exact
                            path="/app/products"
                            render={() => {
                                return (
                                    <ProductsPage
                                        items={this.state.items}
                                        addItemToCart={this.addItemToCart}
                                    />
                                );
                            }}
                        >
                        </Route>
                        {/* CHECKOUT */}
                        <Route path="/app/checkout" component={Checkout} />
                        {/* Display User Page */}
                       <Route path="/app/user" component={UserPage} />
                       {/* Show Charity Items */}
                        <Route exact path="/app/showItems/:id" render={() => {
                        return   <ShowItems
                        items={this.state.items}
                        addItemToCart= {this.addItemToCart}
                        />;
                        }}
                        >
                        </Route>
                        {/* EDIT ITEMS */}
                    {/* NotFoundPage */}
                    {/* <Route path="*" component={NotFoundPage} /> */}
                    </CartContextProvider>
                </Switch>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => {
    return {
        loginStatus: state.loginReducer.loginStatus,
        loginSuccess: state.loginReducer.loginSuccess,
        credentials: state.loginReducer.credentials
    };
};
const mapDispatchToProps = dispatch => {
    return {
      loginFunction: () => {
        dispatch({ type: "login" })
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(App);
