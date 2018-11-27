import React from 'react';
import styled from 'styled-components';

import ClickMe from './styled/ClickMe';

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

    @media (max-width: 425px) {
        font-size: 3rem;
    }
`;

const TagLine = styled.h2`
    font-size: 1.375rem;
    font-weight: 300;

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
`;

const Home = () => (
    <HomeContainer>
        <Intro>hello, i'm kyle!</Intro>
        <TagLine>full stack developer | open-source enthusiast | night owl</TagLine>
        <ClickMe />
    </HomeContainer>
);

export default Home;