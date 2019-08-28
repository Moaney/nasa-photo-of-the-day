import React from 'react';

function Photo (props) {
    console.log(props)
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt="url" />
            <p>{props.explanation}</p>
        </div>
    )
}

export default Photo;