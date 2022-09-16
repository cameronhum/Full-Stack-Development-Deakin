import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding: 0.5vw;
    margin:0;
    font-size: 4vh;  
    background-color: rgb(242,242,242);
    height: 30px;
    font-weight: bold;
    overflow-y:hidden;
    margin-top:50px;
    h2{
        position:relative;
        top:-17px;
        margin: 0;
        margin-left:20px;
        margin-right:30px;
    }
    input{
        width: 600px;
    }
    button{
        background-color: rgb(200,200,200);
        margin-left: 20px;
        width: 100px;
    }

 `

export default class Signup extends React.Component {
    render() {
        return (
            <Container>
                <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>                
            </Container>
                );
    }
}