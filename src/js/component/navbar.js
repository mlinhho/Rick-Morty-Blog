import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="logo" src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"></img>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="favorites btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						{"Favorites "} <span className="badge bg-secondary"> {`${store.collected.length}`} </span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{(store.collected.length === 0) ? "(empty)" : ""}
						{store.collected.map(
							(character) => {
								return (
									<li key={character.id}>
										<a className="dropdown-item" href="#">{character.name}</a>
									</li>
								);
							},
							<i
								className="fas fa-trash-alt"
								onClick={() =>
								setStore(
									store.collected.filter((t, currentIndex) => index != currentIndex)
								)
								}
							></i>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};