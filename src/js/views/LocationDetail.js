import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

export const LocationDetail = (props) => {
    const {locationName, locationId} = useParams();

    const BASE_API_URL = "https://rickandmortyapi.com/api"

    const [location,setLocation] = useState();

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3,
                margin: 10,
            }}
        />
    );

    async function getThisLocationFromApi(){
        try {
            const response = await fetch(`${BASE_API_URL}/location/${locationId}`);
            const body = await response.json();
            if (!response.ok) throw new Error(`${body}`);
            setLocation(body)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getThisLocationFromApi();
    },[])

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    {(location !== undefined) && (<img src={"https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png"} style={{height:"400px",width:"600px"}}/>)}
                </div>
                <div className="col">
                    {(location !== undefined) && (<h2 className="card-name">{`${location.name}`}</h2>)}
                    {(location !== undefined) && (<h5 className="card-description">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`}</h5>)}
                </div>
            </div>
            <div className="row">
            <ColoredLine color="red"/>
                <div className="col card-mini-cols">
                    {(location !== undefined) && (
                        <h6>{"Name"}</h6>
                    )}
                    {(location !== undefined) && (
                        <p>{`${location.name}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(location !== undefined) && (
                        <h6>{"Type"}</h6>
                    )}
                    {(location !== undefined) && (
                        <p>{`${location.type}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(location !== undefined) && (
                        <h6>{"Dimension"}</h6>
                    )}
                    {(location !== undefined) && (
                        <p>{`${location.dimension}`}</p>
                    )}
                </div>
            </div>
        </div>
    );
}