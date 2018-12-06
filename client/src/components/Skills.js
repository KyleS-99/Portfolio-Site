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

const Skills = (props) => (
    <SkillsContainer>
        <SectionTitle text="Skills" />

        <SkillsInnerContainer>
            <SkillBox>
            
            </SkillBox>

            <SkillBox>
            
            </SkillBox>

            <SkillBox>
            
            </SkillBox>
        </SkillsInnerContainer>

        <ClickMe />
    </SkillsContainer>
);

export default Skills;