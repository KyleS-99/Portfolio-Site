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
    max-width: 800px;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    & > div + div {
        margin-right: 20px;
    }
`;

const Input = styled.input`
    padding: 10px;
`;

const TextArea = styled.textarea`
    width: 100%;
`;

const Label = styled.label`
    text-transform: uppercase;
`;

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

                <FormContainer>
                    <Form autoComplete="off">
                        <div style={{ width: '100%' }}>
                            <InputContainer>
                                <LabelContainer>
                                    <Label htmlFor="name">name</Label>
                                    <Input 
                                        onChange={this.onChange} 
                                        placeholder="Name" 
                                        value={name} 
                                        name="name"
                                        id="name"
                                    />
                                </LabelContainer>

                                <LabelContainer>
                                    <Label htmlFor="email">email</Label>
                                    <Input 
                                        onChange={this.onChange} 
                                        placeholder="Email" 
                                        value={email} 
                                        name="email"
                                        id="email"
                                    />
                                </LabelContainer>
                            
                                <Input 
                                    onChange={this.onChange} 
                                    style={{ display: 'none' }} 
                                    value={hiddenInput} 
                                    name="hiddenInput"
                                />
                            </InputContainer>
                        </div>
                        
                        <div style={{ width: '100%' }}>
                            <LabelContainer>
                                <Label htmlFor="message">message</Label>
                                <TextArea 
                                    onChange={this.onChange} 
                                    placeholder="Message" 
                                    value={message} 
                                    name="message" 
                                    id="message"
                                />
                            </LabelContainer>
                        </div>
                    </Form>
                </FormContainer>
            </ContactContainer>
        );
    }
}

export default Contact;