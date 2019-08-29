import React from 'react';
import styled from 'styled-components';

function Photo (props) {
    console.log(props)

    const Div = styled.div `
    background-color: black;
    `

    const H2 = styled.h2 `
    font-family: 'Lexend Peta', sans-serif;
    `
    const Img = styled.img `
    padding: 15px;
    border-radius: 60%;
    `

    const P = styled.p `
    font-family: 'Lexend Peta', sans-serif;
    font-size: 1rem;
    margin: auto;
    `

    return(
        <Div className="photo-card">
            <div className="title">
                <H2>{props.title}</H2>
            </div>
            <div className="url">
            <Img src={props.url} alt="url of the day"/>
            </div>
            <div className="explanation">
                <P>{props.explanation}</P>
            </div>
        </Div>
    )
}

export default Photo;