import React, { Component } from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';

const ContactContainer = styled.div`
    width: 100%;
    padding-bottom: 10rem;
    position: relative;
`;

const FormContainer = styled.div`
    width: 80%;
    max-width: 
`;

const Input = styled.input`

`;

const TextArea = styled.textarea``

;

class Contact extends Component {
    state = {
        email: '',
        name: '',
        message: '',
        hiddenInput: ''
    }
    onChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }
    render() {
        const { email, name, message, hiddenInput } = this.state;

        return (
            <ContactContainer>
                <SectionTitle text="Contact" />

                <form action="/email" method="post" autoComplete="off">
                    <Input 
                        onChange={this.onChange} 
                        placeholder="Name" 
                        value={name} 
                        name="name"
                    />
                    <Input 
                        onChange={this.onChange} 
                        placeholder="Subject" 
                        value={email} 
                        name="subject"
                    />
                    <Input 
                        onChange={this.onChange} 
                        style={{ display: 'none' }} 
                        value={hiddenInput} 
                        name="hiddenInput"
                    />
                    <TextArea 
                        onChange={this.onChange} 
                        placeholder="Message" 
                        value={message} 
                        name="message" 
                    />
                </form>
            </ContactContainer>
        );
    }
}

export default Contact;