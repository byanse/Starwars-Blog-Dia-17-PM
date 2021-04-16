import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Favorites } from "../component/favorites.jsx";
import "../../styles/home.css";

export const Navbars = () => {
	return (
		<>
			<Navbar className="navbar-css" expand="lg">
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<img
								alt=""
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3HqZ2zm66oWaXaeR5ApTyLVWCw1Pfv5_0AqfKy67Z7ZEXLElyfoSIkbkM5zKNQyAbDg&usqp=CAU"
								width="130"
								height="50"
								className="d-inline-block align-top"
							/>{" "}
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto mr-5" />
						<Favorites />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
