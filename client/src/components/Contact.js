import React, { Component } from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';
import { ButtonBlur } from './styled/ButtonAndBlur';

const ContactContainer = styled.div`
    width: 100%;
    padding-bottom: 6rem;
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

    & > div + div {
        margin-top: 37px;
    }
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    & > input, textarea {
        outline: none;
        border: 1px solid #eee;
        font-size: 18px;
        box-shadow: 0px 20px 80px -1px rgba(0,0,0,0.05);
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    & > div + div {
        margin-left: 30px;
    }
`;

const Input = styled.input`
    padding: 10px;
`;

const TextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    resize: vertical;
`;

const Label = styled.label`
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 3px;
`;

const Submit = styled.button`
    width: 150px;
    height: 40px;
    background: #000;
    border: none;
    outline: none;
    border-radius: 50px;
    color: #fff;
    text-transform: capitalize;
    font-weight: 300;
    -webkit-transition: .2s;
    transition: .2s;
    text-align: center;
    line-height: 40px;
    font-size: 1.1rem;
    margin-top: 3rem;

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(4px);
        transform: scale(0.9);
    }
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
    onSubmit = () => {
        
    }
    render() {
        const { email, name, message, hiddenInput } = this.state;

        return (
            <ContactContainer>
                <SectionTitle text="Contact" />

                <FormContainer>
                    <Form autoComplete="off" onSubmit={this.onSubmit}>
                        <div style={{ width: '100%' }}>
                            <InputContainer>
                                <LabelContainer>
                                    <Label htmlFor="name">name</Label>
                                    <Input 
                                        onChange={this.onChange} 
                                        placeholder="Whats your mom call you?" 
                                        value={name} 
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </LabelContainer>

                                <LabelContainer>
                                    <Label htmlFor="email">email</Label>
                                    <Input 
                                        onChange={this.onChange} 
                                        placeholder="Where can I email you back?" 
                                        value={email} 
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                </LabelContainer>
                            
                                <Input 
                                    onChange={this.onChange} 
                                    style={{ display: 'none' }} 
                                    value={hiddenInput} 
                                    type="text"
                                    name="hiddenInput"
                                />
                            </InputContainer>
                        </div>
                        
                        <div style={{ width: '100%' }}>
                            <LabelContainer>
                                <Label htmlFor="message">message</Label>
                                <TextArea 
                                    onChange={this.onChange} 
                                    placeholder="What's on your mind?" 
                                    value={message} 
                                    name="message" 
                                    id="message"
                                    rows="11"
                                />
                            </LabelContainer>
                        </div>

                        <Submit type="submit">
                            send
                            <ButtonBlur />
                        </Submit>
                    </Form>
                </FormContainer>
            </ContactContainer>
        );
    }
}

export default Contact;