import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    box-shadow: rgba(0, 0, 0, 0.01) 0px 7px 19px 0px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
    border-bottom: 1px solid rgb(238, 238, 238);
    height: 56px;
`;

const Nav = styled.nav`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & * {
        cursor: pointer;
        font-weight: 300;
        text-transform: capitalize;
    }
`;

const Logo = styled.h1`
    font-size: 1.5rem;
`;

const Section = styled.p`
    font-size: 1.2rem;
    margin: 0 20px;
`;

class Navbar extends Component {
    state = {
        
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Nav>
                        <Link to="/"><Logo>kyle stauch</Logo></Link>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Section>
                                <Link to="/projects">projects</Link>
                            </Section>

                            <Section>
                                <Link to="/skills">skills</Link>
                            </Section>

                            <Section>
                                <Link to="/contact">contact</Link>
                            </Section>
                        </div>
                    </Nav>
                </Header>
            </React.Fragment>
        );
    }
}

export default Navbar;