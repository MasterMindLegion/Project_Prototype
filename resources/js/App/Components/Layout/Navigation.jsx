import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,   DropdownToggle,
  DropdownMenu, DropdownItem,  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalNavigationLogin from './Modals/ModalNavigationLogin.jsx';
import ModalNavigationRegister from './Modals/ModalNavigationRegister.jsx';
import Logout from './../Auth/Logout.jsx';


import Cart from './Main/Cart/Cart.jsx';
import { connect } from 'react-redux';


 class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">E-Market</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* LOGIN/LOGOUT */}
              <NavItem>
                {
                  this.props.loginSuccess === true
                  ? <Logout />
                  : <ModalNavigationLogin />
                }
              </NavItem>
              {/* Register */}
              <NavItem>
                <ModalNavigationRegister />
              </NavItem>
              {/* Register/Edit Charity */}
              { this.props.loginSuccess && <NavItem >
                <Link to="/app/registerCharity">{this.props.showRegisterLink ? "registerCharity": "editcharity"}</Link>
              </ NavItem >}
              {/* Cart */}
              <NavItem>
                <Link to='/app/cart'>  Cart {this.props.numberOfItems} </ Link>
              </NavItem>
              {/* Sell */}
              <NavItem>
                <Link to='/app/sellon'>  Sell </ Link>
              </NavItem>
              {/* PRODUCTS */}
              <NavItem>
                <Link to='/app/Products'> Products </ Link>
              </NavItem>
              {/* ADD ITEMS */}
              {/* {this.props.loginSuccess &&
              <NavItem >
                <Link to="/app/addItems"> Add new item</Link>
              </ NavItem >}
                USER DROPDOWN */}
              {this.props.loginSuccess &&
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/app/user">Purchasses and Sales</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/app/user">Acount Settings</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {/* <Logout /> */}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> }



            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
//==========
// REDUX
//==========
// What state be used
const mapStateToProps = state => {
  return {
    loginSuccess: state.loginReducer.loginSuccess,
    showRegisterLink: state.loginReducer.showRegisterLink
  };
}
// What Actions be used
const mapDispatchToProps = dispatch => {
  return {
    registerCharityFalse : () => dispatch({type: "CHARITY_FALSE"}),
    registerCharityTrue : () => dispatch({type: "CHARITY_TRUE"}),
 }
}
//what is connect?
export default connect(mapStateToProps, mapDispatchToProps )(Navigation);
