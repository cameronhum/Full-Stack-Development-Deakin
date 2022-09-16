import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:400px;
 `

const Rating = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    p{
        margin: 10px;
    }
 `

function Highlight(props) {
        return (
            <Container>
                <img src={props.image} />
                <h1>{props.articleName}</h1>
                <p>{props.description}</p>
                <hr />
                <Rating>
                    <p>⭐5 </p> <p>{props.author}</p>
                </Rating>
            </Container>
                );
    
} export default Highlight;
