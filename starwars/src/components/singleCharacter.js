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

SingleCharacter.propType = {
  character: PropTypes.object,
  index: PropTypes.number,
}