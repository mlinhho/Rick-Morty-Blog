import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({character}) => {
    const {store, actions} = useContext(Context);
    return (
        <div className="card" style={{minWidth: "18rem", maxWidth:"28rem"}}>
        <img src={character.image} className="card-img-top" alt="..." style={{maxWidth:"400px", maxHeight:"200px"}}/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <ul className="card-text">
                <li>{"Species: "}{character.species}</li>
                <li>{"Status: "}{character.status}</li>
                <li>{"Gender: "}{character.gender}</li>
            </ul>
            <div className="d-flex justify-content-between">
                <Link 
                    to={`/characters/${character.name.replaceAll(" ", "-").toLowerCase()}/${character.id}`} 
                    className="btn btn btn-outline-primary"
                    state={{character:character}}>
                    {"Learn more!"}
                </Link>
                <button 
                    onClick={() => actions.toggleCharacterCollected(character)}
                    className={(store.collected.find(
                        (_character) => _character.url === character.url
                     )) ? "btn btn-warning" : "btn btn-outline-warning"}
                    type="button">
                   <i className="fas fa-light fa-heart" />
                </button>
            </div>
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
        type:PropTypes.string,
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