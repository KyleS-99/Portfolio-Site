import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SectionTitle from './styled/SectionTitle';
import { ButtonBlur } from './styled/ButtonAndBlur';
import Error from './styled/Error';

const ContactContainer = styled.div`
    width: 100%;
    padding-bottom: 6.5rem;
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

    @media (max-width: 768px) {
        & > div + div {
            margin-top: 1rem;
        }
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

    @media (max-width: 768px) {
        flex-direction: column;

        & > div + div {
            margin: 0px;
            margin-top: 1rem;
        }
    }
`;

const Input = styled.input`
    padding: 10px;

    ${props => props.error !== undefined ? `border: 1px solid #cc0000 !important;` : ''}
`;

const TextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    resize: vertical;

    ${props => props.error !== undefined ? `border: 1px solid #cc0000 !important;` : ''}
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

const Contact = () => {
    const [inputData, setInputField] = useState({ 
        email: '',
        name: '',
        message: '',
        hiddenInput: ''
    });
    const [errors, setErrors] = useState({});
    const [formSubmitted, setSubmittedStatus] = useState(false);

    const onChange = ({ target: { name, value} }) => {
        setInputField({ ...inputData, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, name, message, hiddenInput } = inputData;

        // Prevent bot spam
        if (hiddenInput === '') {
            axios.post('/api/email', { email, name, message })
                .then(res => {
                    // console.log(res.data);
                })
                .catch(err => {
                    setErrors(err.response.data);
                });
        }
    }
    

    return (
        <ContactContainer id="contact">
            <SectionTitle text="Contact" />

            <FormContainer>
                <Form autoComplete="off" onSubmit={onSubmit}>
                    <div style={{ width: '100%' }}>
                        <InputContainer>
                            <LabelContainer>
                                <Label htmlFor="name">name</Label>
                                <Input 
                                    onChange={onChange} 
                                    placeholder="Whats your mom call you?" 
                                    value={inputData.name} 
                                    type="text"
                                    name="name"
                                    id="name"
                                    error={errors.name}
                                />
                                {
                                    errors.name && <Error error={errors.name} />
                                }
                            </LabelContainer>

                            <LabelContainer>
                                <Label htmlFor="email">email</Label>
                                <Input 
                                    onChange={onChange} 
                                    placeholder="Where can I email you back?" 
                                    value={inputData.email} 
                                    type="email"
                                    name="email"
                                    id="email"
                                    error={errors.email}
                                />
                                {
                                    errors.email && <Error error={errors.email} />
                                }
                            </LabelContainer>
                        
                            <Input 
                                onChange={onChange} 
                                style={{ display: 'none' }} 
                                value={inputData.hiddenInput} 
                                type="text"
                                name="hiddenInput"
                            />
                        </InputContainer>
                    </div>
                    
                    <div style={{ width: '100%' }}>
                        <LabelContainer>
                            <Label htmlFor="message">message</Label>
                            <TextArea 
                                onChange={onChange} 
                                placeholder="What's on your mind?" 
                                value={inputData.message} 
                                name="message" 
                                id="message"
                                rows="11"
                                error={errors.message}
                            />
                            {
                                errors.message && <Error error={errors.message} />
                            }
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

export default Contact;