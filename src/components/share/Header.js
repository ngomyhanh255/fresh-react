import React from 'react';
import {Navbar, Button, Nav,NavDropdown} from 'react-bootstrap';
import { CustomDialog } from 'react-st-modal';
import DialogSetting from '../dialog/DialogSetting';
const Header = () => {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Navbar.Brand href="/">
                    Fresh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="My system" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/my-system/overview">Overview</NavDropdown.Item>
                        <NavDropdown.Item href="/my-system/report">Report</NavDropdown.Item>
                        <NavDropdown.Item  onClick={async () => {
                                         await CustomDialog(<DialogSetting/>, {
                                            title: 'Setting',
                                            showCloseIcon: true,
                                        });
                                        }}>
                        Setting</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">
                        <Button variant="outline-light">Login</Button>
                    </Nav.Link>
                    <Nav.Link href="/register   ">
                    <   Button variant="outline-light">Register</Button>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
      </div>
    );
  }

export default Header;
