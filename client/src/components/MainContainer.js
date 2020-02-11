import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const MainContainer = () => {
    const [isChrome, setChrome] = useState(false);
    const [ParallaxComponent, setComponent] = useState(null);
    const [projectsYPos, setProjectsYPos] = useState(0);
    const [skillsYPos, setSkillsYPos] = useState(0);
    const [contactYPos, setContactYPos] = useState(0);

    useEffect(() => {
        if (window.chrome) {
            import('./Parallax')
                .then(Parallax => {
                    setChrome(true)
                    setComponent(Parallax.default());
                });
        }

        window.addEventListener('scroll', onScroll);
    }, []);

    const detectYPos = (ref) => {
        return ref.current.getBoundingClientRect().top;
    }

    const onScroll = () => {
        
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div style={{overflow: 'hidden'}}>
            {/* isChrome && ParallaxComponent */}
            <Navbar scrollToTop={scrollToTop} />
            <Home />
            <Projects detectYPos={detectYPos} setProjectsYPos={setProjectsYPos} />
            <Skills detectYPos={detectYPos} setSkillsYPos={setSkillsYPos} />
            <Contact detectYPos={detectYPos} detectYPos={detectYPos} setContactYPos={setContactYPos} />
            <Footer scrollToTop={scrollToTop} />
        </div>
    );
};

export default MainContainer;