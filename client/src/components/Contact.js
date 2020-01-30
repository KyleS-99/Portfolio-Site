import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';
import Form from './Form';
import GoBack from './GoBack';
import useInput from './hooks/useInput';

const ContactContainer = styled.div`
    width: 100%;
    padding-bottom: 6.5rem;
    position: relative;
`;

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(true);
    const [email, bindEmail, resetEmail] = useInput();
    const [name, bindName, resetName] = useInput();
    const [message, bindMessage, resetMessage] = useInput();
    const [hiddenInput, bindHiddenInput, resetHiddenInput] = useInput();

    useEffect(() => {
        resetEmail();
        resetName();
        resetMessage();
        resetHiddenInput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formSubmitted]);

    return (
        <ContactContainer id="contact">
            <SectionTitle text="Contact" />

            { formSubmitted ? 
                <GoBack setFormSubmitted={setFormSubmitted} /> 
                : 
                <Form 
                    formSubmitted={formSubmitted} 
                    setFormSubmitted={setFormSubmitted} 
                    email={email}
                    bindEmail={bindEmail}
                    name={name}
                    bindName={bindName}
                    message={message}
                    bindMessage={bindMessage}
                    hiddenInput={hiddenInput}
                    bindHiddenInput={bindHiddenInput}
                /> 
            }
        </ContactContainer>
    );
}

export default Contact;