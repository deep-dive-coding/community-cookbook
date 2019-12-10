import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap"
import {UseJwt} from "../../utils/JwtHelpers";
import {SignUpModal} from "./sign-up/SignUpModal";
import {SignInModal} from "./sign-in/SignInModal";
import logo from "./images/nav-icon.png";
import smallLogo from "./images/nav-icon-sm.png"
import {httpConfig} from "../../utils/http-config";
import {UserMenu} from "./user-menu/UserMenu";
import {SearchFormContent} from "./search/SearchForm";


export const MainNav = (props) => {

	const jwt = UseJwt();

	useEffect( () =>{
		httpConfig.get("/apis/sessionAPI/")
	});

	const signOut = () => {
		httpConfig.get("apis/sign-out/")
			.then(reply => {
				if (reply.status === 200) {
					window.localStorage.removeItem("jwt-token");
					console.log(reply);
					setTimeout(() => {
						window.location.reload();
					}, 1500);
				}
			});
	};

	return(
		<Navbar className="nav-style fixed-top"
				expand="lg"
				variant="dark"
		>

			<LinkContainer exact to="/">
				<img alt="ABQCOOKBOOK Icon"
					 src= {logo}
					 id="nav-image"
					 className="d-none d-lg-inline-block align-top"
				/>
			</LinkContainer>

			<LinkContainer exact to="/">
				<img alt="ABQCOOKBOOK Icon"
					  src={smallLogo}
					  id="nav-image-small"
					  className="d-lg-none d-inline-block align-top"
				/>
			</LinkContainer>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto text-right">
						<SearchFormContent/>
						<Nav.Link href="/recipe-list"
								  className="mr-1 d-lg-none d-inline-block"
						>Search</Nav.Link>
					{jwt !== null ?
						<UserMenu/>
					 :
						<SignInModal/>
					}

					{jwt !== null &&
					<Nav.Item className="py-4"
							  id="menuSignOut">Create Recipe</Nav.Item>
					}

					{jwt !== null &&
					<Nav.Item className="py-4"
							  id="menuSignOut">My Recipes</Nav.Item>
					}

					{jwt !== null &&
					<Nav.Item className="py-4"
							  id="menuSignOut">Account Settings</Nav.Item>
					}

					{jwt !== null ?
						<Nav.Item onClick={signOut}
								  className="py-4"
								  id="menuSignOut"
						>Sign Out</Nav.Item>
						:
						<SignUpModal/>
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
};
