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

const Skills = (props) => (
    <SkillsContainer>
        <SectionTitle text="Skills" />

        <ClickMe />
    </SkillsContainer>
);

export default Skills;