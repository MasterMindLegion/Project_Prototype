import React, {createContext} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
import NotFoundPage from './Layout/NotFoundPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import Cart from './Layout/Main/Cart/Cart.jsx';
import SellOn from './Layout/Main/SellOn.jsx';
import Products from './Layout/Main/Products.jsx';
import Checkout from './Layout/Main/Checkout/Checkout.jsx'
import CharityRegister from './Auth/CharityRegister.jsx';
import PrivateRoute from './Pages/Protected.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';

export const cartContext = createContext({});
const CartContextProvider = cartContext.Provider;

class App extends React.Component {
    constructor(props) {

        super(props);
        const cartString = window.localStorage.getItem("cart")
        const cart = cartString ? JSON.parse(cartString) : []
        this.state = {
            token: null,
            logged_in: null,
            items: [],
            cart: cart,
            selectedCart: null,
            test: 'hi'


        };
    }
    componentDidMount() {
        fetch("http://www.projectprototype.test:8080/api/items")
            .then(res => res.json())
            .then(result => {
            //  console.log("[Homepage] FETCH", result);
                this.setState({
                    isLoaded: true,
                    items: result
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

    selectedCartCallback = (arg) => {
        console.log("argument of the callback", arg)
        console.log("parent state object", this.state)
        this.setState({
            selectedCart: arg
        })

        // console.log('PARENT STATE AFTER CALLBACK FUNCTION', this.state.selectedCart)
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
        console.log('app parent STATE from callback', this.state.selectedCart)
        return (
            <BrowserRouter>
            <Switch>
                {/* HomePage */}
                 <Route exact path="/"  render={() => {
                     return <HomePage
                     items={this.state.items}
                     addItemToCart={this.addItemToCart}
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
                <CartContextProvider value={{selectedCartValue: this.state.selectedCart, selectedCartCallback: this.selectedCartCallback}}>
                <Route exact path="/app/cart"  render={() => {
                     return <Cart
                     items={this.state.cart}
                     removeItemFromCart={this.removeItemFromCart}
                     />;
                 }}
                />
                {/* SELL ON */}
                <Route path="/app/sellon" component={SellOn} />
                {/* PRODUCTS */}
                {/* <CartContextProvider value={this.selectedCartCallback}> */}
                        <Route exact path="/app/products"  render={() => {
                            return <ProductsPage
                            items={this.state.items}
                            addItemToCart={this.addItemToCart}
                            />;
                        }}
                        ></Route>

                        <Route path="/app/checkout" component={Checkout} />
                </CartContextProvider>


                {/* CHECKOUT  */}


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
