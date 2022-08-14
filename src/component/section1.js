import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Section1 extends Component {

  render() {
    let { category,image } = this.props;
    console.log(category);
    return (
      <>
        <div className='card-container'>
          <div className='innercard-container'>
            <Link className='link-container' to={{pathname:`/${category}`}}>
              <img className='img-container' src={image} alt="sports" />
            </Link>
          </div>
          <h5 className='text-center'>{category.toUpperCase()}</h5>
        </div>

      </>
    )
  }
}
