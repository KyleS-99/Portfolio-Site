import React from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';

const ProjectsContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProjectItem = styled.div`
    width: 80%;
    max-width: 1000px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 28px 102px -1px rgba(0,0,0,0.05);
    transition: 0.2s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 40px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 28px 102px -1px rgba(0,0,0,0.08);
    }
`;

const GIFContainer = styled.div`
    width: 50%;
    height: 100%;
`;

const Info = styled.div`
    width: 50%;
    height: 100%;
`;

const GIF = styled.img`
    width: 100%;
    height: 100%;
    min-height: 300px;
`;

const Title = styled.h1`
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 300;
    text-align: center;
    margin: 0;
`;

const Description = styled.p`
    font-weight: 300;
    display: block;
    text-align: center;
    width: 90%;
    margin: 15px auto 0;
`;

const UL = styled.ul`
    margin-left: 15px;

    & li {
        font-weight: 300;
    }

    & li + li {
        margin-top: 10px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Button = styled.a`
    width: 150px;
    height: 40px;
    background: #000;
    border: none;
    outline: none;
    border-radius: 50px;
    color: #fff;
    text-transform: capitalize;
    font-weight: 300;
    transition: .2s;

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(4px);
        transform: scale(0.9);
    }
`;

const Projects = () => (
    <ProjectsContainer>
        <SectionTitle text="Projects" />

        <ProjectContainer>
            <ProjectContainer>
                <ProjectItem>
                    <GIFContainer>
                        <GIF src={window.location.origin + '/img/real-time-racer.gif'} alt="Real Time Racer" />
                    </GIFContainer>

                    <Info>
                        <Title>real time racer</Title>
                        <Description>Web app that allows users to race against others, and become more proficient at typing.</Description>
                        <UL>
                            <li>Front end built with react, react context-api, redux, styled-components, and websockets</li>
                            <li>Back end built with NodeJS, Express, Passport, MongoDB, JSON Web Tokens, and OAuth</li>
                        </UL>
                        <ButtonContainer>
                            <Button>Visit</Button>
                            <Button>Code</Button>
                        </ButtonContainer>
                    </Info>
                </ProjectItem>


            </ProjectContainer>
        </ProjectContainer>
    </ProjectsContainer>
);

export default Projects;