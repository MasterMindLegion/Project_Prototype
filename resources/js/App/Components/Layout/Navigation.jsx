import React from 'react';
import { 
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,   DropdownToggle,
  DropdownMenu, DropdownItem,  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalNavigationLogin from './Modals/ModalNavigationLogin.jsx';
import ModalNavigationRegister from './Modals/ModalNavigationRegister.jsx';
import Logout from './../Auth/Logout.jsx';
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
        <Navbar color="dark" dark expand="md" className='navigation align-items-center'>
          <NavbarBrand href="/">E-Market</NavbarBrand>
          <NavbarToggler onClick={this.toggle}  />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto p-2 align-items-center" navbar>
              {/* LOGIN/LOGOUT */}
              <NavItem className='p-1'>
                {
                  this.props.loginSuccess === true
                  ? <Logout />
                  : <ModalNavigationLogin />
                }
              </NavItem>
              {/* Register */}
              <NavItem className='p-1'>
                <ModalNavigationRegister />
              </NavItem>
              {/* Register/Edit Charity */}
              { this.props.loginSuccess && <NavItem >
                <Link to="/app/registerCharity">{this.props.showRegisterLink ? "registerCharity": "editcharity"}</Link>
              </ NavItem >}
              {/* Sell */}
              <NavItem className='p-1'>
                <Link to='/app/sellon'>  Sell </ Link>
              </NavItem>
              {/* PRODUCTS */}
              <NavItem className='p-1'>
                <Link to='/app/Products'> Products </ Link>
              </NavItem>
              <NavItem  className='p-1'>
                 <Link to='/app/cart' > <FontAwesomeIcon  icon={faShoppingCart} />  {this.props.numberOfItems} </ Link>
              </NavItem>
                {/* USER DROPDOWN  */}
              {this.props.loginSuccess &&
              <UncontrolledDropdown nav inNavbar className='p-1'>
              <DropdownToggle nav caret>
              <FontAwesomeIcon  icon={faUser} /> 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/app/user">Purchasses and Sales</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/app/user">Account Settings</Link>
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
