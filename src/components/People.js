import React from 'react';
import Image from '../assets/profile.png';


  const People = (props) => (
      <div className="card-container">
             <div className="card">
               <div className="card-image">
                 <img alt="Person" src={Image}></img>
                 <span className="card-title">{props.name}</span>
               </div>
               <div className="card-content">
                 <p>{props.description}</p>
               </div>
               <div className="rating">Rating: {props.rating} <i className="fas fa-star"></i></div>
               <div className="card-action">
                 <a href="/">{props.category}</a>
               </div>
             </div>
          </div>
 
  )
    


export default People;