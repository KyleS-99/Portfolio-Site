import React, { Component } from 'react';
import styled from 'styled-components';

import Jump from './styled/Jump';

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

const GithubImg = styled.img`
    &:hover {
        animation: ${Jump} 1s infinite;
    }
`;

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const HamburgerContainer = styled.div`
    display: ${props => props.active ? 'flex' : 'none'}
    float: right;
    width: 80px;
    cursor: pointer;
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
    }
`;

class Navbar extends Component {
    state = {
        active: true
    }
    toggleMenu = () => {
        this.setState((prevState) => ({ active: !prevState.active }));
    }
    render() {
        const { active } = this.state;

        return (
            <React.Fragment>
                <Header>
                    <HamburgerContainer active={active}>
                        <Hamburger active={active} />
                    </HamburgerContainer>

                    <Nav>
                        <Logo>kyle stauch</Logo>
                        <NavLinkContainer>
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
                        </NavLinkContainer>
                    </Nav>
                </Header>
            </React.Fragment>
        );
    }
}

export default Navbar;