import React from 'react';
import styled from 'styled-components';
import Highlight from './highlight';

const Container = styled.div`
    h2{
        font-size:70px;
        font-weight: 500;
    }
    button{
        width:200px;
        height: 35px;
        border-radius: 100px;
        margin-top: 50px;
    }

 `

const Highlights = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    > *{
        margin-right:20px;
        margin-left:20px;
    }

 `


function HighlightComponent (highlight) {
    return <Highlight image={highlight.image} articleName={highlight.articleName} description={highlight.description} author={highlight.author}/>
}


function Feature(props) {
        return (
            <Container>
                <h2>{props.text}</h2>
                <Highlights>
                    {props.data.map(HighlightComponent)}
                </Highlights>
                <button>{props.button}</button>
            </Container>
                );
    
} export default Feature;
