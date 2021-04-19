import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container } from "react-bootstrap";

import { CardTemplate } from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let listPlanets = store.planets.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/planets/"}
				src={"https://www.caracteristicas.co/wp-content/uploads/2017/05/neptuno-e1569255785939.jpg"}
				index={index}
				url={item.url}
				click={() => {
					actions.captureItem(item.name);
				}}
				key={index.toString()}
				description={"Los planetas son difíciles de visitar"}
			/>
		);
	});

	let listStartShips = store.starShipsList.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/starships/"}
				src={
					"https://static3.elcomercio.es/www/multimedia/201912/23/media/cortadas/porsche-crea-nave-espacial-star-wars-kv5F-U901046244105faF-1248x770@El%20Comercio.jpg"
				}
				index={index}
				url={item.url}
				click={() => {
					actions.captureItem(item.name);
				}}
				key={index.toString()}
				description={"Nave de locos!"}
			/>
		);
	});

	let listPeople = store.characters.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/people/"}
				src={"https://img.ecartelera.com/noticias/33000/33093-m.jpg"}
				index={index}
				url={item.url}
				click={() => {
					actions.captureItem(item.name);
				}}
				key={index.toString()}
				description={"Su carencia de fe resulta molesta"}
			/>
		);
	});

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
	return (
		<>
			<Container className="mb-2">
				<div className="etiqueta d-flex justify-content-center align-items-center mt-1">
					<h1 className="titlesHome mt-2">PERSONAJES</h1>
				</div>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listPeople}
				</Carousel>
			</Container>

			<Container className="mb-2">
				<div className="etiqueta d-flex justify-content-center align-items-center mt-1">
					<h1 className="titlesHome mt-2">PLANETAS</h1>
				</div>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listPlanets}
				</Carousel>
			</Container>

			<Container className="mb-2">
				<div className="etiqueta d-flex justify-content-center align-items-center mt-1">
					<h1 className="titlesHome mt-2">NAVES ESTRELLAS</h1>
				</div>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listStartShips}
				</Carousel>
			</Container>
		</>
	);
};
