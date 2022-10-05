import React from 'react';
import styled from 'styled-components';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../Utils/firebase.js';
import { useNavigate } from 'react-router-dom';

const ContentDiv = styled.div`
    overflow-x:hidden;
    text-align: center;
    button{
        position:relative;
        left: 40px;
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
        position:relative;
        left: 40px;
        width:490px;
        margin-bottom:10px;

    }
    h2{
        position:relative;
        top: 35px;
        right: 100px;
        text-align:left;
        font-size:15px;
        margin-left:510px;
    }
    h1{
        position:relative;
        left: 40px;
        color: #377cfb;
    }
    
 `


class SignupPage extends React.Component {
    render() {
        const handleSubmit = async (event) => {
            let email = document.getElementsByName('email')[0].value;
            let password = document.getElementsByName('password')[0].value;
            let confirmPassword = document.getElementsByName('passwordConfirm')[0].value;
            let name = document.getElementsByName('name')[0].value;
            if (!email || !password|| !name) return;

            event.preventDefault();
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            try {
                const user = await createAuthUserWithEmailAndPassword(email, password);
                createUserDocFromAuth(user.user, { name, password });
                console.log(user)
                this.props.navigate('/login')
            }
            catch (e) {
                alert(e.message);
            }
        }


        return (
            <ContentDiv>
                <h1>Create a DEV@Deakin Account</h1>
                <h2>Name*</h2>
                <input
                    name='name'
                    type='text'
                    placeholder='Enter Name'
                    required
                />
                <h2>Email*</h2>

                <input
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                    required
                />
                <h2>Password*</h2>

                <input
                    name='password'
                    type='password'
                    placeholder='Enter Password'
                    required
                />
                <h2>Confirm password*</h2>

                <input
                    name='passwordConfirm'
                    type='password'
                    placeholder='Confirm Password'
                    required
                />
                <button onClick={handleSubmit} type= 'submit'>Create</button>
                
            </ContentDiv>
                );
    }
}


function SignupWithNavigate() {

    let navigate = useNavigate();
    return <SignupPage navigate={navigate} />
}
export default SignupWithNavigate
