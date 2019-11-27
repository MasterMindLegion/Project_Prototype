import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">CATEGORIES   </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Fashion </NavLink>

              <NavLink href="#">Home & Garden</NavLink>

              <NavLink href="#">Electronics</NavLink>
              <NavLink href="#">Sports & Leisure </NavLink>
              <NavLink href="#">Health & Beauty</NavLink>
              <NavLink href="#">Entertainment </NavLink>
              <NavLink href="#">Collectables </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
