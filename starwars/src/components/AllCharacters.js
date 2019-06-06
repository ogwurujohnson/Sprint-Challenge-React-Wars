import React from "react";
import SingleCharacter from "./singleCharacter.js";
import Button from "./Button";
import PropTypes from "prop-types";
import "./StarWars.css";

export default function AllCharacters(props) {
  const { characters, prevLink, nextLink, getCharacters, next, prev, loading  } = props;
  return (
    loading? "Loading...." :
    <div className="characterList">
      <ul>
        {/* map throught the characters set to display all characters */}
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

      {/* add a condition to determine when the buttons should show using the next and prev state created */}
      {prev ? (

        <Button getCharacters={getCharacters} link={prevLink} text="prev"/>
        
      ) : (
        ""
      )}


      {next ? (

        <Button getCharacters={getCharacters} link={nextLink} text="next"/>
        
      ) : (
        ""
      )}

    </div>
  );
}

AllCharacters.propType = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    eye_color: PropTypes.string
  })),
  prevLink: PropTypes.string,
  nextLink: PropTypes.string,
  getCharacters: PropTypes.func,
  next: PropTypes.bool,
  prev: PropTypes.bool,
}
