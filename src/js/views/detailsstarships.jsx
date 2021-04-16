import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/details.css";

export const Detailsstarships = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();

	let url = {};

	let newStarship = store.starShipsList.find(item => {
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
					src="https://static3.elcomercio.es/www/multimedia/201912/23/media/cortadas/porsche-crea-nave-espacial-star-wars-kv5F-U901046244105faF-1248x770@El%20Comercio.jpg"
				/>
				<h1 className="detailCardTitle bg-info">{store.details.name}</h1>
				<div className="detailList">
					<ul className="ulClass">
						<li className="liClass">
							Model:
							<span className="spanDetail rounded">{store.details.model}</span>{" "}
						</li>
						<li className="liClass">
							Starship class:
							<span className="spanDetail rounded">{store.details.starship_class}</span>
						</li>
						<li className="liClass">
							Cost in credits:
							<span className="spanDetail rounded">{store.details.cost_in_credits}</span>
						</li>
						<li className="liClass">
							Length:
							<span className="spanDetail rounded">{store.details.length}</span>
						</li>
						<li className="liClass">
							Crew:
							<span className="spanDetail rounded">{store.details.crew}</span>
						</li>
						<li className="liClass">
							Passengers:
							<span className="spanDetail rounded">{store.details.passengers}</span>
						</li>
						<li className="liClass">
							Max atmosphering speed:
							<span className="spanDetail rounded">{store.details.max_atmosphering_speed}</span>
						</li>
						<li className="liClass">
							Hyperdrive rating:
							<span className="spanDetail rounded">{store.details.hyperdrive_rating}</span>
						</li>
						<li className="liClass">
							MGLT:
							<span className="spanDetail rounded">{store.details.MGLT}</span>
						</li>
						<li className="liClass">
							Cargo capacity:
							<span className="spanDetail rounded">{store.details.cargo_capacity}</span>
						</li>
						<li className="liClass">
							Consumables:
							<span className="spanDetail rounded">{store.details.consumables}</span>
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
