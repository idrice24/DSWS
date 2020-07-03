import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import React, { Component } from 'react';
//Component
        import navbar from './component/navbar';
//pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

class App extends Component{
    render(){
        return(
        <div className="App">
<Router>
<navbar/>
<Switch>
    <Route exact path="/" component={home}/>
    <Route exact path="/login" component={login}/>
    <Route exact path="/signup" component={signup}/>
</Switch>
</Router>
        </div>
        )
    }
}

export default App;
