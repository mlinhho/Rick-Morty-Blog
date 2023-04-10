import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EpisodeCard = ({episode}) => {
    const {store, actions} = useContext(Context);
    return (
        <div className="card" style={{minWidth: "18rem", maxWidth:"28rem"}}>
        <img src="https://www.verance.com/app/uploads/2017/01/400x200.png"className="card-img-top" alt="..." style={{maxWidth:"400px", maxHeight:"200px"}}/>
        <div className="card-body" style={{height:"200px"}}>
            <h5 className="card-title">{episode.name}</h5>
            <ul className="card-text">
                <li>{"Air Date: "}{episode.air_date}</li>
                <li>{"Episode: "}{episode.episode}</li>
            </ul>
            <div className="d-flex justify-content-between">
                <Link 
                    to={`/episodes/${episode.name.replaceAll(" ", "-").toLowerCase()}/${episode.id}`} 
                    className="btn btn btn-outline-primary"
                    state={{episode:episode}}>
                    {"Learn more!"}
                </Link>
                <button 
                    onClick={() => actions.toggleEpisodeCollected(episode)}
                    className={(store.collected.find(
                        (_episode) => _episode.url === episode.url
                     )) ? "btn btn-warning" : "btn btn-outline-warning"}
                    type="button">
                   <i className="fas fa-light fa-heart" />
                </button>
            </div>
        </div>
    </div>
    )
}

EpisodeCard.propTypes = {
    episode:PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        air_date: PropTypes.string,
        episode:PropTypes.string,
        characters: PropTypes.arrayOf(PropTypes.string),
        url:PropTypes.string,
        created:PropTypes.string
    })
}