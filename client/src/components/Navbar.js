import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Jump from './styled/Jump';
import FadeInAndOut from './styled/FadeInAndOut';

const Header = styled.header`
    box-shadow: rgba(0, 0, 0, 0.01) 0px 7px 19px 0px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
    border-bottom: 1px solid rgb(238, 238, 238);
    background: #fff;

    @media (max-width: 1000px) {
        box-shadow: none;
        width: 100%;
        ${({ active }) => active && 'position: fixed;'}
    }
`;

const Nav = styled.nav`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    ${({ active }) => active && 'width: 100%'}

    & * {
        cursor: pointer;
        font-weight: 300;
        text-transform: capitalize;
    }
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    ${({ active }) => active && 'display: none;'}

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

    @media (max-width: 1000px) {
        font-size: 2.2rem;
        margin: 1rem 0;
    }
`;

const GithubImg = styled.img`
    &:hover {
        animation: ${Jump} 1s infinite;
    }
`;

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
        ${({ active }) => active ? 
            `
                display: flex;
                flex-direction: column;
                height: 100vh;
                width: 100vw;
                justify-content: center;
                align-items: center;
                z-index: 10;
                background-color: #fff;

                & > a {
                    margin-top: 1rem;
                }
            ` 
            : 
            `display: none;`
        }

        ${({ active }) => active && css`animation: 0.5s ${FadeInAndOut};`}
    }
`;

const HamburgerContainer = styled.div`
    display: none;
    float: right;
    width: 80px;
    cursor: pointer;

    @media (max-width: 1000px) {
        display: flex;

        & > div {
            position: fixed;
        }
    }
`;

const Hamburger = styled.div`
    z-index: 20;
    position: absolute;
    width: 42px;
    height: 5px;
    border-radius: 10px;
    background-color: #000;
    box-shadow: 2px 2px 12px 0px rgba(179,179,179,1);
    margin: 38px 20px;
    transition: .5s;
    top: -10px;
    right: 5%;
    ${({ active }) => active && `
        background-color: transparent;
        box-shadow: none;
    `}

    &::before, &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 42px;
        height: 5px;
        border-radius: 10px;
        box-shadow: 2px 2px 12px 0px rgba(179,179,179,1);
        transition: .5s;
        background: #000;
    }

    &::before {
        top: -9px;
        ${({ active }) => active && `
            top: 0;
            transform: rotate(45deg);
            width: 42px;
        `}
    }

    &::after {
        top: 9px;
        ${({ active }) => active && `
            top: 0;
            transform: rotate(135deg);
            width: 42px;
        `
    }
`;

class Navbar extends Component {
    state = {
        active: false
    }
    toggleMenu = () => {
        this.setState((prevState) => ({ active: !prevState.active }));
    }
    closeMenu = () => {
        this.setState({ active: false });
    }
    render() {
        const { active } = this.state;

        return (
            <React.Fragment>
                <Header active={active}>
                    <HamburgerContainer active={active}>
                        <Hamburger active={active} onClick={this.toggleMenu} />
                    </HamburgerContainer>

                    <Nav active={active}>
                        <Logo active={active}>kyle stauch</Logo>
                        <NavLinkContainer active={active}>
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
                                <GithubImg src={active ? window.location.origin + '/img/github-large.png' : window.location.origin + '/img/github.png'} alt="Github" />
                            </a>
                        </NavLinkContainer>
                    </Nav>
                </Header>
            </React.Fragment>
        );
    }
}

export default Navbar;