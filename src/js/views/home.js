import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { LocationCard } from "../component/LocationCard";
import { EpisodeCard } from "../component/EpisodeCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context);

	useEffect(() => {
		actions.getCharactersFromApi();
	},[actions])

	useEffect(() => {
		actions.getLocationsFromApi();
	},[actions])

	useEffect(() => {
		actions.getEpisodesFromApi();
	},[actions])
	
	return (
		<div className="container">
			
			<h1 className="100-w text-center">{"Rick & Morty"}</h1>

			<div className="d-flex flex-column">
				<div className="d-flex">
					<h2 className="h2">{"Characters"}</h2>
				</div>
				<div className="d-flex 100-w overflow-auto">
					{store.characters.map((character) => {
						return (
							<CharacterCard
								key={character.id}
								character={character}/>
						)
					})}
				</div>

				<div className="d-flex card-row">
					<h2 className="h2">{"Locations"}</h2>
				</div>
				<div className="d-flex 100-w overflow-auto">
					{store.locations.map((location) => {
						return (
							<LocationCard
								key={location.id}
								location={location}/>
						)
					})}
				</div>

				<div className="d-flex card-row">
					<h2 className="h2">{"Episodes"}</h2>
				</div>
				<div className="d-flex 100-w overflow-auto">
					{store.episodes.map((episode) => {
						return (
							<EpisodeCard
								key={episode.id}
								episode={episode}/>
						)
					})}
				</div>

			</div>
		</div>
	);
}
