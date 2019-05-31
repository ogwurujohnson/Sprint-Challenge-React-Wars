import React, {Fragment} from 'react'

export default function Button(props) {
    const {link, getCharacters, text} = props;
    return (
        <Fragment>
            <button onClick={()=>{getCharacters(link)}}>{text}</button>
        </Fragment>
    )
}
