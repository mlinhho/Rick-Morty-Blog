import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

export const CharacterDetail = (props) => {
    const {characterName, characterId} = useParams();

    const BASE_API_URL = "https://rickandmortyapi.com/api"

    const [character,setCharacter] = useState();

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

    async function getThisCharacterFromApi(){
        try {
            const response = await fetch(`${BASE_API_URL}/character/${characterId}`);
            const body = await response.json();
            if (!response.ok) throw new Error(`${body}`);
            setCharacter(body)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getThisCharacterFromApi();
    },[])

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    {(character !== undefined) && (<img src={character.image} style={{height:"400px",width:"600px"}}/>)}
                </div>
                <div className="col">
                    {(character !== undefined) && (<h2 className="card-name">{`${character.name}`}</h2>)}
                    {(character !== undefined) && (<h5 className="card-description">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`}</h5>)}
                </div>
            </div>
            <div className="row">
            <ColoredLine color="red"/>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Name"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.name}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Status"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.status}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Species"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.species}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Location"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.location.name}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Gender"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.gender}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Origin"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.origin.name}`}</p>
                    )}
                </div>
            </div>
        </div>
    );
}