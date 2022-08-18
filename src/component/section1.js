import React from 'react';
import { Link } from "react-router-dom";

const Section1 =(props)=> {
    let { category,image } = props;
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
export default Section1;
