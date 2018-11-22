import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = styled.header`
    box-shadow: rgba(0, 0, 0, 0.01) 0px 7px 19px 0px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
    border-bottom: 1px solid rgb(238, 238, 238);
    background: #fff;
`;

const Nav = styled.nav`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    & * {
        cursor: pointer;
        font-weight: 300;
        text-transform: capitalize;
    }
`;

const Logo = styled.h1`
    font-size: 1.5rem;

    &::after {
        content: '';
        display: block;
        width: 0px;
        height: 2px;
        background: linear-gradient(90deg, rgb(146, 254, 157) 0px, rgb(0, 201, 255));
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
    }
`;

const Section = styled.p`
    font-size: 1.2rem;
    margin: 0 20px;
    position: relative;
    top: 5px;
    display: inline-block;

    &::after {
        content: '';
        display: block;
        width: 0px;
        height: 2px;
        background: linear-gradient(90deg, rgb(146, 254, 157) 0px, rgb(0, 201, 255));
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
    }
`;

const jump = keyframes`
25% {
transform: translateY(-8px);
transform: translateY(-8px); }
50% {
transform: translateY(0px);
transform: translateY(0px); }
75% {
transform: translateY(-4px);
transform: translateY(-4px); }
100% {
transform: translateY(0px);
transform: translateY(0px); }
`;

const GithubImg = styled.img`
    &:hover {
        animation: ${jump} 1s infinite;
    }
`;

class Navbar extends Component {
    state = {
        
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Nav>
                        <Logo>kyle stauch</Logo>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Section>
                                projects
                            </Section>

                            <Section>
                                skills
                            </Section>

                            <Section>
                                contact
                            </Section>
                            
                            <a href="https://github.com/KyleS-99" target="_blank" rel="noopener noreferrer">
                                <GithubImg src={window.location.origin + '/img/github.png'} alt="Github" />
                            </a>
                        </div>
                    </Nav>
                </Header>
            </React.Fragment>
        );
    }
}

export default Navbar;