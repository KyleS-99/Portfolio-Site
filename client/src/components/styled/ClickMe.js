import React from 'react';
import styled, { keyframes } from 'styled-components';

const Bounce = keyframes`
0%,
20%,
50%,
80%,
100% {
  -webkit-transform: translateY(0);
          transform: translateY(0); }
40% {
  -webkit-transform: translateY(-25px);
          transform: translateY(-25px); }
60% {
  -webkit-transform: translateY(-10px);
          transform: translateY(-10px); }
`;

const ScrollDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${Bounce} 2s infinite;
    position: absolute;
    left: 50%;
    margin-left: -36.5px;
    bottom: 0px;

    & * {
        cursor: pointer;
    }
`;

const ScrollDown = styled.p`
    font-size: 1.1rem;
    text-transform: capitalize;
`;

const ClickMe = (props) => (
    <ScrollDownContainer onClick={props.handleClick}>
        <ScrollDown>click me</ScrollDown>
        <img 
            src={window.location.origin + '/img/down-arrow.png'} 
            alt="" 
            width="50" 
            height="50" 
            style={{ position: 'relative', top: '-25px' }}
        />
    </ScrollDownContainer>
);

export default ClickMe;