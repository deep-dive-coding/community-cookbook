import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap"
import {SignUpModal} from "./sign-up/SignUpModal";
//import {SignInModal} from "./sign-in/SignInModal";
import logo from "./images/nav-icon.png";


export const MainNav = (props) => {
	return(
		<Navbar className="nav-style">
			<Navbar.Brand href="/">
				<img className="nav-icon.png"
					  src= {logo}
					  className="d-inline-block align-top"
				/>
			</Navbar.Brand>

			<LinkContainer exact to="/" >
				<Navbar.Brand></Navbar.Brand>
			</LinkContainer>
			<Nav className="ml-auto">
				<LinkContainer exact to="/profile">
					<Nav.Link></Nav.Link>
				</LinkContainer>
				<SignUpModal/>
				{/*<SignInModal/>*/}
				<LinkContainer exact to="/image"
				><Nav.Link></Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar>
	)
};
