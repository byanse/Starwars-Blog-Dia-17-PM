import React, { Component } from "react";

import "../../styles/footer.css";

export const Footer = () => (
	<footer className="container-fluid footer">
		<div className="row footerIconos">
			<p>
				Bárbara Ulloa <i className="fa fa-heart text-danger" />
			</p>
		</div>
		<div className="row d-flex justify-content-center text-center">
			<a className="col-2 bg-info" href="https://github.com/byanse">
				byanse <i className="fab fa-github" />
			</a>
		</div>
		<div className="row slogan d-felx align-items-center">
			<i className="fab fa-jedi-order fa-2x" />
			<span>StarWars</span>
			<i className="fab fa-jedi-order fa-2x" />
		</div>
	</footer>
);
