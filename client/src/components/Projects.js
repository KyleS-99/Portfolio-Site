import React from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';
import ClickMe from './styled/ClickMe';
import { Button, ButtonBlur } from './styled/ButtonAndBlur';

const ProjectsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 10rem;
    position: relative;
`;

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div + div {
        margin-top: 4rem;
    }

    @media (max-width: 768px) {
        & > div + div {
            margin-top: 3rem;
        }
    }
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

    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;

        & > div {
            width: 100%;
        }

        & > div + div {
            margin: 2rem 0;
        }
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
    justify-content: space-around;
    margin-top: 11%;

    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > a + a {
            margin-top: 1.5rem;
        }

        & > a {
            width: 80%;
        }
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
                            <li>Front end built with <strong>React</strong>, <strong>React-Router-DOM</strong>, <strong>React-Context-API</strong>, <strong>Redux</strong>, <strong>Styled-Components</strong>, <strong>Axios</strong>, and <strong>WebSockets</strong></li>
                            <li>Back end built with <strong>NodeJS</strong>, <strong>Express</strong>, <strong>Passport</strong>, <strong>MongoDB</strong>, <strong>JSON Web Tokens</strong>, and <strong>OAuth</strong></li>
                        </UL>
                        <ButtonContainer>
                            <Button 
                                href="https://real-time-racer.herokuapp.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit
                                <img 
                                    src={window.location.origin + '/img/visit.png'} 
                                    alt="" 
                                    style={{ position: 'relative', top: '6px', left: '5px' }} 
                                />
                                <ButtonBlur />
                            </Button>

                            <Button 
                                href="https://github.com/KyleS-99/Real-Time-Racer" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img 
                                    src={window.location.origin + '/img/code.png'} 
                                    alt="" 
                                    width="18" 
                                    height="18" 
                                    style={{ position: 'relative', top: '4px', right: '5px'}} 
                                /> 
                                Code
                                <ButtonBlur />
                            </Button>
                        </ButtonContainer>
                    </Info>
                </ProjectItem>

                <ProjectItem>
                    <GIFContainer>
                        <GIF src={window.location.origin + '/img/real-time-racer.gif'} alt="Dev Connector" />
                    </GIFContainer>

                    <Info>
                        <Title>dev connector</Title>
                        <Description>Web app that allows developers to come together and discuss different topics, such as web dev tools and frameworks/libraries.</Description>
                        <UL>
                            <li>Front end built with <strong>React</strong>, <strong>Bootstrap</strong>, <strong>Redux</strong>, <strong>Sass</strong>, <strong>Axios</strong>, <strong>GitHub's API</strong>, and <strong>JWTs</strong> to request private resources</li>
                            <li>Back end built with <strong>NodeJS</strong>, <strong>Express</strong>, <strong>Passport</strong>, <strong>MongoDB</strong>, <strong>JSON Web Tokens</strong>, and <strong>GitHub's API</strong> to request users account information and repositories</li>
                        </UL>
                        <ButtonContainer>
                            <Button 
                                href="https://powerful-wave-23158.herokuapp.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit
                                <img 
                                    src={window.location.origin + '/img/visit.png'} 
                                    alt="" 
                                    style={{ position: 'relative', top: '6px', left: '5px' }} 
                                />
                                <ButtonBlur />
                            </Button>

                            <Button 
                                href="https://github.com/KyleS-99/dev_connector" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img 
                                    src={window.location.origin + '/img/code.png'} 
                                    alt="" 
                                    width="18" 
                                    height="18" 
                                    style={{ position: 'relative', top: '4px', right: '5px'}} 
                                /> 
                                Code
                                <ButtonBlur />
                            </Button>
                        </ButtonContainer>
                    </Info>
                </ProjectItem>
            </ProjectContainer>
        </ProjectContainer>

        <ClickMe />
    </ProjectsContainer>
);

export default Projects;