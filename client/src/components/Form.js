import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Error from './styled/Error';
import Spinner from './styled/Spinner';

const FormContainer = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.submitted && `display: none;`}

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
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(4px);
        transform: scale(0.9);
    }
`;

const Form = (props) => {
    const [errors, setErrors] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        // Prevent bot spam
        if (props.hiddenInput === '') {
            axios.post('/api/email', { email: props.email, name: props.name, message: props.message })
                .then(() => {
                    props.setFormSubmitted(true);
                })
                .catch(err => {
                    setErrors(err.response.data);
                });
        }
    }

    return (
        <FormContainer>
            <ContactForm
                autoComplete="off" 
                onSubmit={onSubmit}
                submitted={props.formSubmitted}
            >
                <div style={{ width: '100%' }}>
                    <InputContainer>
                        <LabelContainer>
                            <Label htmlFor="name">name</Label>
                            <Input 
                                {...props.bindName}
                                placeholder="Jon Snow" 
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
                                {...props.bindEmail}
                                placeholder="jon@snow.com" 
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
                            {...props.bindHiddenInput}
                            style={{ display: 'none' }} 
                            type="text"
                            name="hiddenInput"
                        />
                    </InputContainer>
                </div>
                
                <div style={{ width: '100%' }}>
                    <LabelContainer>
                        <Label htmlFor="message">message</Label>
                        <TextArea 
                            {...props.bindMessage}
                            placeholder="Winter is coming... Hurry send your fastest raven!" 
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
                </Submit>
            </ContactForm>

            { props.formSubmitted && <Spinner /> }
        </FormContainer>
    );
};

export default Form;