import React, {Fragment} from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    const {link, getCharacters, text} = props;
    return (
        <Fragment>
            <button onClick={()=>{getCharacters(link)}}>{text}</button>
        </Fragment>
    )
}

Button.propType = {
    link: PropTypes.string,
    getCharacters: PropTypes.func,
    text: PropTypes.string,
}