import styled from 'styled-components';

export const Button = styled.a`
    width: 150px;
    height: 40px;
    background: #000;
    border: none;
    outline: none;
    border-radius: 50px;
    color: #fff;
    text-transform: capitalize;
    font-weight: 300;
    transition: .2s;
    text-align: center;
    line-height: 40px;
    font-size: 1.1rem;
    z-index: 5;
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