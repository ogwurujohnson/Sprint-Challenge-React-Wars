import React from "react";
import SingleCharacter from "./SingleCharacter";
import PropTypes from "prop-types";
import "./StarWars.css";

export default function AllCharacters(props) {
  const { characters, prevLink, nextLink, getCharacters, next, prev  } = props;
  return (
    <div>
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
        <button
          onClick={() => {
            getCharacters(prevLink);
          }}
        >
          prev
        </button>
      ) : (
        ""
      )}


      {next ? (
        <button
          onClick={() => {
            getCharacters(nextLink);
          }}
        >
          next
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

AllCharacters.propType = {
  characters: PropTypes.array,
  prevLink: PropTypes.string,
  nextLink: PropTypes.string,
  getCharacters: PropTypes.func,
  next: PropTypes.bool,
  prev: PropTypes.bool,
}