import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

export const EpisodeDetail = (props) => {
    const {episodeName, episodeId} = useParams();

    const BASE_API_URL = "https://rickandmortyapi.com/api"

    const [episode,setEpisode] = useState();

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

    async function getThisEpisodeFromApi(){
        try {
            const response = await fetch(`${BASE_API_URL}/episode/${episodeId}`);
            const body = await response.json();
            if (!response.ok) throw new Error(`${body}`);
            setEpisode(body)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getThisEpisodeFromApi();
    },[])

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    {(episode !== undefined) && (<img src={"https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png"} style={{height:"400px",width:"600px"}}/>)}
                </div>
                <div className="col">
                    {(episode !== undefined) && (<h2 className="card-name">{`${episode.name}`}</h2>)}
                    {(episode !== undefined) && (<h5 className="card-description">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`}</h5>)}
                </div>
            </div>
            <div className="row">
            <ColoredLine color="red"/>
                <div className="col card-mini-cols">
                    {(episode !== undefined) && (
                        <h6>{"Name"}</h6>
                    )}
                    {(episode !== undefined) && (
                        <p>{`${episode.name}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(episode !== undefined) && (
                        <h6>{"Air Date"}</h6>
                    )}
                    {(episode !== undefined) && (
                        <p>{`${episode.air_date}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(episode !== undefined) && (
                        <h6>{"Episode"}</h6>
                    )}
                    {(episode !== undefined) && (
                        <p>{`${episode.episode}`}</p>
                    )}
                </div>
            </div>
        </div>
    );
}