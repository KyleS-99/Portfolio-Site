import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Reem Kufi', sans-serif;
    font-size: 4rem;
    text-align: center;

    @media (max-width: 425px) {
        font-size: 3rem;
    }
`;

const SectionTitle = ({ text }) => (
    <Title>{text}</Title>
);

export default SectionTitle;