import './App.css';
import React, { Component } from 'react'
import Navbar from "./component/navBar"
import News from './component/news';


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App