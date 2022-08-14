import './App.css';
import React, { Component } from 'react'
import Navbar from "./component/navBar"
import News from './component/news';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './component/about';
import  "./css/home.css";
import Home from './component/home';

export class App extends Component {
  //apikey = process.env.REACT_APP_API
  apikey = '460031b7f4c448efbefce5800753d0c4'
  render() {
    return (
      <div>
        
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/all"><News key="general"pageSize={15} apikey={this.apikey}country = "in" category = "general"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={15} apikey={this.apikey} country = "in" category = "sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={15} apikey={this.apikey} country = "in" category = "technology"/></Route>
          <Route exact path="/science"><News key="science" pageSize={15} apikey={this.apikey} country = "in" category = "science"/></Route>
          <Route exact path="/business"><News key="business" pageSize={15} apikey={this.apikey} country = "in" category = "business"/></Route>
          <Route exact path="/health"><News key="health" pageSize={15} apikey={this.apikey} country = "in" category = "health"/></Route>
          <Route exact path="/general"><News key="general" pageSize={15} apikey={this.apikey} country = "in" category = "general"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={15} apikey={this.apikey} country = "in" category = "entertainment"/></Route>
          <Route exact path="/about"><About/></Route>
        </Switch>
        
        </Router>
        <div className="footer">All copyright reserved to MediaScan 2022.</div>
      </div>
    )
  }
}

export default App