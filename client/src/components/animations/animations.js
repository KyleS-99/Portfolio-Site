import { keyframes } from 'styled-components';

export const slideIn = keyframes`
    0% {
        opacity: 0;
        right: 400px;
    }
    100% {
        opacity: 1;
        right: 0;
    }
`;

export const slideInRight = keyframes`
    0% {
        opacity: 0;
        left: 400px;
    }

    100% {
        opacity: 1;
        left: 0;
    }
`;

export const slideDown = keyframes`
    0% {
        bottom: 100px;
        opacity: 0;
    }

    100% {
        bottom: 0;
        opacity: 1;
    }
`;

export const slideUp = keyframes`
    0% {
        top: 100px;
        opacity: 0;
    }

    100% {
        top: 0;
        opacity: 1;
    }
`;