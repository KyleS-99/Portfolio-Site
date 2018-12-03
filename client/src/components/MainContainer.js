import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Parallax from './Parallax';
import Skills from './Skills';

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
            </div>
        );
    }
}

export default MainContainer;