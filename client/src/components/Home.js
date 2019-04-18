import React, { Component } from 'react';
import styled from 'styled-components';

import ClickMe from './styled/ClickMe';
import Jump from './styled/Jump';

const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    & * {
        text-transform: capitalize;
        text-align: center;
    }
`;

const Intro = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Reem Kufi', sans-serif;
    margin-bottom: 0;

    @media (max-width: 425px) {
        font-size: 3rem;
    }
`;

const TagLine = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
`;

const GitHub = styled.img`
    &:hover {
        animation: ${Jump} 1s;
    }
`;


class Home extends Component { 
    render() {
        return (
            <HomeContainer>
                <Intro>hello, i'm kyle!</Intro>
                <TagLine>full stack developer | open-source enthusiast | night owl</TagLine>
                <a 
                    href="https://github.com/KyleS-99" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ marginTop: '0.5rem' }}
                >
                    <GitHub src={window.location.origin + '/img/github-large.png'} />
                </a>
                <ClickMe />
            </HomeContainer>
        );
    }
}
export default Home;