import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light background">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong className='brand-Name'>
              MediaScan
            </strong>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-margin" >
             
              <li className="nav-item">
                <Link className="nav-link link-color" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/technology">Technology</Link>
              </li>           
              <li className="nav-item">
                <Link className="nav-link link-color" to="/about">About</Link>
              </li>  
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}
