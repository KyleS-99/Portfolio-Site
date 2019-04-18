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
            order: ['/', '/projects', '/skills', '/contact'],
            isChrome: false,
            ParallaxElement: null
        };
    }
    scroll = (target) => {
        const duration = 1500;
        target = this.state.order.indexOf(target);
        let targetPos;

        // switch (target) {
        //     case 0:
        //         targetPos = this.homeRef.current.getBoundingClientRect();
        //         break;
        //     default:
        //         targetPos = this.homeRef.current.getBoundingClientRect();
        // }
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
        this.scroll('/');
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