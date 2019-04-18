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
            currentView: '/',
            order: ['/', '/projects', '/skills', '/contact'],
            isChrome: false,
            ParallaxElement: null
        };

        this.homeRef = React.createRef();
        this.projectsRef = React.createRef();
        this.skillsRef = React.createRef();
        this.contactRef = React.createRef();
    }
    scroll = (target) => {
        const duration = 1500;
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
        this.scroll();
    }
    render() {
        const { isChrome, ParallaxElement } = this.state;

        return (
            <div style={{overflow: 'hidden'}}>
                {/* isChrome && ParallaxElement */}
                <Navbar />
                <Home ref={this.homeRef} />
                <Projects ref={this.projectsRef} />
                <Skills ref={this.skillsRef} />
                <Contact ref={this.contactRef} />
                <Footer />
            </div>
        );
    }
}

export default MainContainer;