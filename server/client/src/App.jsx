import React, { Component } from 'react';
import HomePage from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/home' component={HomePage} />
                    <Route path='/login' component={LoginPage} />
                </div>
            </BrowserRouter>
        );
    };
}

export default App;
