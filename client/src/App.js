import React, { Component } from 'react';
import './App.css';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';

import MainContainer from './components/MainContainer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainContainer />
            </BrowserRouter>
        );
    }
}

export default App;