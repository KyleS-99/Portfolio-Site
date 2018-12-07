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

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: stretch;
    max-width: 450px;
    min-height: 400px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 28px 102px -1px rgba(0,0,0,0.05);
    transition: 0.2s;
    margin: 2%;
    padding-bottom: 2rem;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 28px 102px -1px rgba(0,0,0,0.08);
    }

    @media (max-width: 1000px) {
        width: 80%;
        margin: 2% auto;
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
    background-image: linear-gradient(90deg,#92fe9d 0,#00c9ff);
    position: relative;
`;

const Blur = styled.div`
    filter: blur(10px);
    width: 100%;
    height: 5px;
    background-image: linear-gradient(90deg,#92fe9d 0,#00c9ff);
    position: relative;
`;

const List = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Skill = styled.p`
    font-weight: bold;
    color: #696969;
    margin-left: 8px;
    font-size: 20px;
`;

const Skills = (props) => (
    <SkillsContainer>
        <SectionTitle text="Skills" />

        <SkillsInnerContainer>
            <SkillBox>
                <ColorBorder />
                <Blur />
                <Title size="8px">front end</Title>

                <List>
                    <ListItem>
                        <img src={window.location.origin + '/img/html.png'} alt="" />
                        <Skill>HTML</Skill>
                    </ListItem>

                    <ListItem>
                        <img src={window.location.origin + '/img/css.png'} alt="" />
                        <Skill>CSS</Skill>
                    </ListItem>

                    <ListItem>
                        <img src={window.location.origin + '/img/styled-components.png'} alt="" />
                        <Skill style={{ fontSize: '19px' }}>Styled-Components</Skill>
                    </ListItem>

                    <ListItem>
                        <img src={window.location.origin + '/img/js.png'} alt="" />
                        <Skill>JavaScript</Skill>
                    </ListItem>

                    <ListItem>
                        <img src={window.location.origin + '/img/react.png'} alt="" />
                        <Skill>React</Skill>
                    </ListItem>                    

                    <ListItem>
                        <img src={window.location.origin + '/img/redux.png'} alt="" />
                        <Skill>Redux</Skill>
                    </ListItem>                    
                </List>
            </SkillBox>

            <SkillBox>
                <ColorBorder />
                <Blur />
                <Title size="8px">back end</Title>
            </SkillBox>

            <SkillBox>
                <ColorBorder />
                <Blur />
                <Title size="6px">version control</Title>
            </SkillBox>
        </SkillsInnerContainer>

        <ClickMe />
    </SkillsContainer>
);

export default Skills;