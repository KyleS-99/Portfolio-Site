import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            isChrome: false,
            ParallaxElement: null
        };
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    }
    componentDidMount() {
        if (window.chrome) {
            import('./Parallax')
                .then(Parallax => {
                    this.setState({
                        isChrome: true,
                        ParallaxElement: Parallax.default()
                    });
                });
        }
    }
    render() {
        const { isChrome, ParallaxElement } = this.state;

        return (
            <div style={{overflow: 'hidden'}}>
                {/* isChrome && ParallaxElement */}
                <Navbar scrollToTop={this.scrollToTop} />
                <Home />
                <Projects />
                <Skills />
                <Contact />
                <Footer scrollToTop={this.scrollToTop} />
            </div>
        );
    }
}

export default MainContainer;