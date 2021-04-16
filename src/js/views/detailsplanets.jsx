import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const Detailsplanet = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();

	let url = {};

	let newPlanet = store.planets.find(item => {
		if (item.name == param.id.replace("_", " ")) return (url = item);
	});

	const getUrl = () => {
		let getUrl = Object.values(url);
		return getUrl[2];
	};

	useEffect(
		() => {
			actions.getDetails(getUrl());
		},
		[getUrl() != undefined]
	);

	return (
		<content className="container d-flex justify-content-center">
			<div className="card">
				<img
					className="imgDetails"
					src="https://www.caracteristicas.co/wp-content/uploads/2017/05/neptuno-e1569255785939.jpg"
				/>
				<h1 className="detailCardTitle bg-info">{store.details.name}</h1>
				<div className="detailList">
					<ul className="ulClass">
						<li className="liClass">
							Diameter:
							<span className="spanDetail rounded">{store.details.diameter}</span>{" "}
						</li>
						<li className="liClass">
							Population:
							<span className="spanDetail rounded">{store.details.population}</span>
						</li>
						<li className="liClass">
							Climate:
							<span className="spanDetail rounded">{store.details.climate}</span>
						</li>
						<li className="liClass">
							Terrain:
							<span className="spanDetail rounded">{store.details.terrain}</span>
						</li>
						<li className="liClass">
							Orbital period:
							<span className="spanDetail rounded">{store.details.orbital_period}</span>
						</li>
						<li className="liClass">
							Gravity:
							<span className="spanDetail rounded">{store.details.gravity}</span>
						</li>
						<li className="liClass">
							Rotation period:
							<span className="spanDetail rounded">{store.details.rotation_period}</span>{" "}
						</li>
						<li className="liClass">
							Surface water:
							<span className="spanDetail rounded">{store.details.surface_water}</span>
						</li>
					</ul>
				</div>
				<Link to="/" className="button d-flex justify-content-center mb-3">
					<button className="btn btn-outline-info btn-lg">Regresar</button>
				</Link>
			</div>
		</content>
	);
};
