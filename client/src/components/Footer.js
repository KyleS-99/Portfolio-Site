import React from 'react';
import styled from 'styled-components';

import Jump from './styled/Jump';
import { ButtonBlur } from './styled/ButtonAndBlur';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #eee;
    padding: 10px;
    position: relative;
`;

const Copy = styled.p`
    font-size: 1.1rem;
    margin: 0;
    text-align: center;
`;

const ViewSource = styled.a`
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    margin: 10px 0;
    color: #28A4FF;
`;

const Circle = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background: #000;
    position: absolute;
    top: -27.5px;
    right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        animation: ${Jump} 1s infinite;
    }
`;

const Footer = ({ scrollToTop }) => (
    <FooterContainer>
        <Copy>Built with<img src={window.location.origin + '/img/heart.png'} alt=" love " style={{ position: 'relative', top: '11px' }} />by Kyle Stauch &copy; {new Date().getFullYear()}</Copy>
        <ViewSource
            href="https://github.com/KyleS-99/Portfolio-Site" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            (view source)
        </ViewSource>

        <Circle onClick={scrollToTop}>
            <img src={window.location.origin + '/img/up-arrow.png'} alt="Scroll To Top" />
            <ButtonBlur style={{ position: 'absolute', bottom: '0' }} />
        </Circle>
    </FooterContainer>
);

export default Footer;