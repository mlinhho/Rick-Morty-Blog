import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterCard = ({character}) => {
    return (
        <div className="card" style={{minWidth: "18rem", maxWidth:"28rem"}}>
        <img src={character.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <ul className="card-text">
                <li>{character.species}</li>
                <li>{character.status}</li>
                <li>{character.gender}</li>
            </ul>
            <Link to={`/characters/${character.name.replaceAll(" ", "-").toLowerCase()}/${character.id}`} className="btn btn-primary">{"see more"}</Link>
        </div>
        </div>
    )
}

CharacterCard.propTypes = {
    character:PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.oneOf(["Dead","Alive", "unknown"]),
        species:PropTypes.string,
        gender: PropTypes.oneOf(["Female","Male","Genderless","unknown"]),
        origin: PropTypes.shape({
            name:PropTypes.string,
            url:PropTypes.string
        }),
        location: PropTypes.shape({
            name:PropTypes.string,
            url:PropTypes.string
        }),
        image: PropTypes.string,
        episode: PropTypes.arrayOf(PropTypes.string),
        url:PropTypes.string,
        created:PropTypes.string
    })
}