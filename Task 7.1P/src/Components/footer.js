import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    background-color: #348388;
    margin-bottom: 0;
    margin-top:20px;
    overflow-y: hidden;
 `
const Middle = styled.div`
    text-align: justify;
    padding-left:120px;
`

const InlineEl = styled.div`
    display:flexbox;
    flex-direction: row;
    justify-content: center;
    > *{
        margin-right:20px;
        margin-left:20px;
    }
`

const Left = styled.div`
    text-align: justify;
`
const Columns = styled.div`
    display:flex;
    background-color: #348388;
    justify-content: center;
    
    > *{
        margin-right:auto;
        margin-left:auto;
    }
    
    img{
        width:50px;
        margin: 10px;
    }

 `

export default class Footer extends React.Component {
    render() {
        return (
            <Foot>
                <Columns>
                    <Left>
                        <h2>Explore</h2>
                        <p>Home</p>
                        <p>Questions</p>
                        <p>Articles</p>
                        <p>Tutorials</p>
                    </Left>
                    <Middle>
                        <h2>Support</h2>
                        <p>FAQs</p>
                        <p>Help</p>
                        <p>Contact Us</p>
                    </Middle>
                    <div>
                        <h2>Stay connected</h2>
                        <img src={require('./instagram.png')} />
                        <img src={require('./twitter.png')} />
                        <img src={require('./facebook.png')} />
                    </div>
                </Columns>
                <div>
                    <h2>DEV@Deakin 2022</h2>
                    <InlineEl>
                        <p>Privacy Policy</p>
                        <p>Terms</p>
                        <p>Code of Conduct</p>
                    </InlineEl>

                </div>

            </Foot>
                );
    }
}