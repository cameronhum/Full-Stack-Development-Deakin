import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = styled.div`
    display:flex;
    flex-direction:row;
    padding: 0.5vw;
    margin:0;
    margin-bottom: 20px;
    font-size: 1.5vh;  
    background-color: rgb(242,242,242);
    height: 20px;
    font-weight: bold;
    h2{
        position:relative;
        top:-3px;
        margin: 0;
        padding-right:60px
    }
    input{
        width: 100%;
        height: 20px;
        position:relative;
        top:-2px;
        border:none;
    }
 `

const Buttons = styled.div`
    width: 128.46;
    display:flex;
    margin-left: 60px;
    button{
        padding: 0;
        border: none;
        background: none;
        margin-right:20px;
    }
    a{
        text-decoration: none;
        color: black;
    }
     button:hover{
        cursor:pointer;
        color: #3b3b3b;
    }
 `

export default class Navbar extends React.Component {
    render() {
        return (
            <Nav>
                <h2>DEV@Deakin</h2>
                <input type="text" placeholder="&#x1F50E;&#xFE0E; Search..." />
                <Buttons>
                    <button>Post</button>
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                </Buttons>
            </Nav>
                );
    }
}