import React from 'react';
import styled from 'styled-components';
import Feature from './feature';
import Signup from './signup';
import { faker } from '@faker-js/faker';
import { Link } from "react-router-dom";


const ContentDiv = styled.div`
    overflow-x:hidden;

 `
const articlesList = [
    {
        image: "https://picsum.photos/300/200",
        articleName: faker.random.words(2),
        description: faker.random.words(6),
        author: faker.name.fullName()
    },
    {
        image: "https://picsum.photos/300/200",
        articleName: faker.random.words(2),
        description: faker.random.words(6),
        author: faker.name.fullName()
    },
    {
        image: "https://picsum.photos/300/200",
        articleName: faker.random.words(2),
        description: faker.random.words(6),
        author: faker.name.fullName()
    }
]
const tutorialsList = [
    {
        image: "https://picsum.photos/300/200",
        articleName: faker.random.words(2),
        description: faker.random.words(6),
        author: faker.name.fullName()
    },
    {
        image: "https://picsum.photos/300/200",
        articleName: faker.random.words(2),
        description: faker.random.words(6),
        author: faker.name.fullName()
    },
    {
        image: "https://picsum.photos/300/200",
        articleName: faker.random.words(2),
        description: faker.random.words(6),
        author: faker.name.fullName()
    }
]
export default class Content extends React.Component {
    render() {
        return (
            <ContentDiv>
                <img src="https://picsum.photos/1520/500" />
                <Feature text="Featured Articles" button="See all articles" data={articlesList}></Feature>
                <Feature text="Featured Tutorials" button="See all tutorials" data={tutorialsList}></Feature>
                <Signup></Signup>

            </ContentDiv>
                );
    }
}