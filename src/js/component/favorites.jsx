import React, { useContext, useEffect } from "react";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Favorites = props => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			favoritesInHTML();
		},
		[store.favorites]
	);

	const favoritesInHTML = () => {
		return store.favorites.map((item, index) => {
			return (
				<Dropdown.ItemText key={index.toString()}>
					{item}{" "}
					<Button onClick={() => actions.clickDeleteFavorite(item)} variant="outline-info">
						<i className="fas fa-trash-alt " />
					</Button>
				</Dropdown.ItemText>
			);
		});
	};
	return (
		<DropdownButton
			id="dropdown-item-button"
			title={<i className="fas fa-heart" />}
			variant="btn btn-info"
			className="ml-2"
			menuAlign="right">
			{favoritesInHTML()}
		</DropdownButton>
	);
};

Favorites.propTypes = {
	click: PropTypes.func
};
