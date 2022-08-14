import React, { Component } from 'react';
import news from "../img/about.jpg";

export default class About extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center my-3 category-heading'>About us</h1>
        <p>NewsCenter is a company aims to provide best possible news to their customers.
          Using real time smart strategies, we attempt to provide the meaningfull results in a
          minimum time lap. <br></br>We brings latest news from India and World on breaking news,
          today news headlines, politics, business, technology, bollywood, entertainment etc.
        </p>
        <img className="about-news" src={news} alt="about-news"/>

      </div>
    )
  }
}
