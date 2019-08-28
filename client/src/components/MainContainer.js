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

    useEffect(() => {
        if (window.chrome) {
            import('./Parallax')
                .then(Parallax => {
                    setChrome(true)
                    setComponent(Parallax.default());
                });
        }
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div style={{overflow: 'hidden'}}>
            {/* isChrome && ParallaxComponent */}
            <Navbar scrollToTop={scrollToTop} />
            <Home />
            <Projects />
            <Skills />
            <Contact />
            <Footer scrollToTop={scrollToTop} />
        </div>
    );
};

export default MainContainer;