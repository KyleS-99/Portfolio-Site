import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    color: #cc0000;
    font-size: 0.8rem;
    padding-left: 5px;
`;

const Error = ({ error }) => {
    return (
        <ErrorMessage>{error}</ErrorMessage>
    );
}

export default Error;