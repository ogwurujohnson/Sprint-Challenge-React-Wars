import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function SingleCharacter(props) {
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
            <p>BirthYear: {character.birth_year}</p>
            <p>Eye-color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
            <p>Hair-color: {character.hair_color}</p>
            <p>Height: {character.height}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
}

SingleCharacter.propType = {
  character: PropTypes.object,
  index: PropTypes.number,
}