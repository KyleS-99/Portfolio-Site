import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

class MainContainer extends Component {
    state = {
        currentView: '/',
        order: ['/', '/projects', '/skills', '/contact'],
        isChrome: false,
        ParallaxElement: null
    }
    handleScroll = (e) => {
        console.log(e);
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