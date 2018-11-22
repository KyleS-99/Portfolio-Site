import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & * {
        text-transform: capitalize;
    }
`;

const Intro = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Reem Kufi', sans-serif;
`;

const TagLine = styled.h2`
    font-size: 1.375rem;
    font-weight: 300;
`;

const Home = () => (
    <HomeContainer>
        <Intro>hello, i'm Kyle!</Intro>
        <TagLine>full stack developer | open-source enthusiast | night owl</TagLine>
    </HomeContainer>
);

export default Home;