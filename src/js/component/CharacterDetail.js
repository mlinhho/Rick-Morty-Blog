import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

export const CharacterDetail = (props) => {
    const {characterName, characterId} = useParams();

    const BASE_API_URL = "https://rickandmortyapi.com/api"

    const [character,setCharacter] = useState();

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
            {(character !== undefined) && (<h2>{`Hello Character with name ${character.name} and id ${characterId}`}</h2>)}
            {(character !== undefined) && (<img src={character.image} className="w-50 h-auto" />)}
            {(character !== undefined) && (<p>{`this is its species: ${character.species}`}</p>)}
        </div>
        
    );
}