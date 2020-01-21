import React, { useState } from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';
import Form from './Form';
import GoBack from './GoBack';

const ContactContainer = styled.div`
    width: 100%;
    padding-bottom: 6.5rem;
    position: relative;
`;

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <ContactContainer id="contact">
            <SectionTitle text="Contact" />

            { formSubmitted ? <GoBack /> : <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} /> }
        </ContactContainer>
    );
}

export default Contact;