import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = ({ onAddButtonClicked }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
            <NavbarBrand href="/">Todos World</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem className="ml-auto">
                        <Button color="primary" onClick={onAddButtonClicked}>Add Todo</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;