import React from 'react';
import styled, { keyframes } from 'styled-components';

const LdsRipple = keyframes`
    0% {
        top: 28px;
        left: 28px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: -1px;
        left: -1px;
        width: 58px;
        height: 58px;
        opacity: 0;
    }
`;

const SpinnerContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    & div {
        position: absolute;
        border: 4px solid #000;
        opacity: 1;
        border-radius: 50%;
        animation: ${LdsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    & div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
`;

const Spinner = () => (
    <Container>
        <SpinnerContainer>
            <div />
            <div />
        </SpinnerContainer>
    </Container>
);

export default Spinner;