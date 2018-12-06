import React from 'react';
import styled from 'styled-components';

import SectionTitle from './styled/SectionTitle';
import ClickMe from './styled/ClickMe';

const SkillsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 10rem;
    position: relative;
`;

const SkillsInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const SkillBox = styled.div`
    width: 33.333%;
    height: 400px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 28px 102px -1px rgba(0,0,0,0.05);
    transition: 0.2s;
    margin: 2%;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 28px 102px -1px rgba(0,0,0,0.08);
    }
`;

const Title = styled.h2`
    margin-top: 2.65rem;
    text-align: center;
    font-size: 20px;
    color: #696969;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: ${props => props.size};
`;

const ColorBorder = styled.div`
    width: 100%;
    height: 5px;
    background-image: ${props => props.color}
    position: relative;
`;

const Blur = styled.div`
    filter: blur(10px);
    width: 100%;
    height: 5px;
    background-image: ${props => props.color}
    position: relative;
`;

const Skills = (props) => (
    <SkillsContainer>
        <SectionTitle text="Skills" />

        <SkillsInnerContainer>
            <SkillBox>
                <ColorBorder color="linear-gradient(90deg,#92fe9d 0,#00c9ff);" />
                <Blur color="linear-gradient(90deg,#92fe9d 0,#00c9ff);" />
                <Title size="8px">front end</Title>
            </SkillBox>

            <SkillBox>
                <ColorBorder color="linear-gradient(90deg,#92fe9d 0,#00c9ff);" />
                <Blur color="linear-gradient(90deg,#92fe9d 0,#00c9ff);" />
                <Title size="8px">back end</Title>
            </SkillBox>

            <SkillBox>
                <ColorBorder color="linear-gradient(90deg,#92fe9d 0,#00c9ff);" />
                <Blur color="linear-gradient(90deg,#92fe9d 0,#00c9ff);" />
                <Title size="6px">version control</Title>
            </SkillBox>
        </SkillsInnerContainer>

        <ClickMe />
    </SkillsContainer>
);

export default Skills;