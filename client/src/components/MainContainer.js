import React, { Component } from 'react';

import Parallax from './Parallax';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

class MainContainer extends Component {
    state = {
        currentView: '/',
        order: ['/', '/projects', '/skills', '/contact']
    }
    handleScroll = (e) => {
        console.log(e);
    }
    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll, { passive: true });
    }
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                { /* <Parallax /> */}
                <Navbar />
                <Home />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default MainContainer;