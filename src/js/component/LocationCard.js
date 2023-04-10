import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationCard = ({location}) => {
    const {store, actions} = useContext(Context);
    return (
        <div className="card" style={{minWidth: "18rem", maxWidth:"28rem"}}>
        <img src="https://www.verance.com/app/uploads/2017/01/400x200.png"className="card-img-top" alt="..." style={{maxWidth:"400px", maxHeight:"200px"}}/>
        <div className="card-body" style={{height:"200px"}}>
            <h5 className="card-title">{location.name}</h5>
            <ul className="card-text">
                <li>{"Type: "}{location.type}</li>
                <li>{"Dimension: "}{location.dimension}</li>
            </ul>
            <div className="d-flex justify-content-between">
                <Link 
                    to={`/locations/${location.name.replaceAll(" ", "-").toLowerCase()}/${location.id}`} 
                    className="btn btn btn-outline-primary"
                    state={{location:location}}>
                    {"Learn more!"}
                </Link>
                <button 
                    onClick={() => actions.toggleLocationCollected(location)}
                    className={(store.collected.find(
                        (_location) => _location.url === location.url
                     )) ? "btn btn-warning" : "btn btn-outline-warning"}
                    type="button">
                   <i className="fas fa-light fa-heart" />
                </button>
            </div>
        </div>
    </div>
    )
}

LocationCard.propTypes = {
    location:PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        dimension:PropTypes.string,
        residents: PropTypes.arrayOf(PropTypes.string),
        url:PropTypes.string,
        created:PropTypes.string
    })
}