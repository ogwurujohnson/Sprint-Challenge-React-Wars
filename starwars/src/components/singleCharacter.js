import React, { Fragment } from "react";

export default function singleCharacter(props) {
  const { character, index } = props;

  return (
    <Fragment>
      <li>
        <input type="checkbox" id={"list-item-" + index} />
        <label htmlFor={"list-item-" + index} className="first">
          {character.name}
        </label>
        <div className="about">
          <div className="personal">
            <p>{character.birth_year}</p>
            <p>{character.eye_color}</p>
            <p>{character.gender}</p>
            <p>{character.hair_color}</p>
            <p>{character.height}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
}
