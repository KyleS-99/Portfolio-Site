import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #eee;
    padding: 10px;
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

const Footer = () => (
    <FooterContainer>
        <Copy>Built with<img src={window.location.origin + '/img/heart.png'} alt=" love " style={{ position: 'relative', top: '11px' }} />by Kyle Stauch &copy; {new Date().getFullYear()}</Copy>
        <ViewSource
            href="https://github.com/KyleS-99/Portfolio-Site" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            (view source)
        </ViewSource>
    </FooterContainer>
);

export default Footer;