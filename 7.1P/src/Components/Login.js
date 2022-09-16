import React from 'react';
import styled from 'styled-components';

import { signInAuthUserWithEmailAndPassword } from '../Utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const ContentDiv = styled.div`
    overflow-x:hidden;
    text-align: center;
    button{
        background-color: #377cfb;
        color: white;
        border:none;
        Width: 500px;
        height: 30px;
        margin-top: 30px;
        margin-bottom: 50px;

        font-size:20px;
        display:block;
        margin-left:auto;
        margin-right:auto

    }

    input{
        width:490px;
        margin-bottom:20px;

    }
    h2{
        margin-top:50px;

        text-align:left;
        font-size:15px;
        margin-left:510px;
    }
    a{
        margin-left: 440px;
        text-decoration:none;
        color: #377cfb;
    }
    
 `





class Login extends React.Component {

    render() {

        const handleSubmit = async (event) => {
            let email = document.getElementsByName('email')[0].value;
            let password = document.getElementsByName('password')[0].value;
            event.preventDefault();

            if (!email | !password) return;
            try {
                const user = await signInAuthUserWithEmailAndPassword(email, password);
                console.log(user)
                this.props.navigate('/')

            }
            catch (e) {
                alert('Log in failed');
            }
        }
        return (

            <ContentDiv>
                <Link to="/signup">Sign up</Link>
                <h2>Your email</h2>
                <input
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                />
                <h2>Your password</h2>

                <input
                    name='password'
                    type='password'
                    placeholder='Enter Password'
                />
                <button onClick={handleSubmit} type='submit'>Login</button>
                
                

            </ContentDiv>
                );
    }
}

function LoginWithNavigate() {
    
    let navigate = useNavigate();
    return <Login navigate={navigate} />
}
export default LoginWithNavigate
