import React, { Component } from 'react';

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
    scroll = targetId => {
        
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
        this.scroll('#skills');
    }
    render() {
        const { isChrome, ParallaxElement } = this.state;

        return (
            <div style={{overflow: 'hidden'}}>
                {/* isChrome && ParallaxElement */}
                <Navbar scroll={this.scroll} />
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