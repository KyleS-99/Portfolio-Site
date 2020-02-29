import React from 'react';
import styled from 'styled-components';

import { Button } from './styled/Button';
import { slideUp } from './animations/animations';

const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    animation: ${slideUp} 1s;
`;

const MessageContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Raven = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 55px;
`;

const GoBack = (props) => {

    const returnToForm = (e) => {
        e.preventDefault();

        props.setFormSubmitted(false);
    }

    return ( 
        <Container>
            <MessageContainer>
                <Raven>Raven has been sent!</Raven>

                <Button 
                    href="#" 
                    onClick={returnToForm}
                >
                    Return
                </Button>
            </MessageContainer>
        </Container>
    );
};
 
export default GoBack;