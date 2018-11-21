import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';

class MainContainer extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default MainContainer;