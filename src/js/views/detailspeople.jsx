import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const Detailspeople = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();

	let url = {};

	let newPeople = store.characters.find(item => {
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
				<img className="imgDetails" src="https://img.ecartelera.com/noticias/33000/33093-m.jpg" />
				<h1 className="detailCardTitle bg-info">{store.details.name}</h1>
				<div className="detailList">
					<ul className="ulClass">
						<li className="liClass">
							Height:
							<span className="spanDetail rounded">{store.details.height}</span>
						</li>
						<li className="liClass">
							Mass:
							<span className="spanDetail rounded">{store.details.mass}</span>
						</li>
						<li className="liClass">
							Hair color:
							<span className="spanDetail rounded">{store.details.hair_color}</span>
						</li>
						<li className="liClass">
							Eye color:
							<span className="spanDetail rounded"> {store.details.eye_color}</span>
						</li>
						<li className="liClass">
							Birth year:
							<span className="spanDetail rounded">{store.details.birth_year}</span>{" "}
						</li>
						<li className="liClass">
							Gender:
							<span className="spanDetail rounded">{store.details.gender}</span>{" "}
						</li>
					</ul>
				</div>
				<Link to="/" className="d-flex justify-content-center mb-3">
					<button className="btn btn-outline-info btn-lg">Regresar</button>
				</Link>
			</div>
		</content>
	);
};
