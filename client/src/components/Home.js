import React, { Component } from 'react';
import styled from 'styled-components';

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
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
`;

class Home extends Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Nav>
                        <Logo>kyle stauch</Logo>
                    </Nav>
                </Header>
            </React.Fragment>
        );
    }
}

export default Home;