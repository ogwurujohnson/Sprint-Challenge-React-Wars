import React from "react";
import SingleCharacter from "./SingleCharacter";
import "./StarWars.css";

export default function AllCharacters(props) {
  const { characters, prevLink, nextLink, getCharacters, next, prev  } = props;
  return (
    <div>
      <ul>
        {characters.map((character, index) => {
          return (
            <SingleCharacter
              key={character.name}
              character={character}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
}
