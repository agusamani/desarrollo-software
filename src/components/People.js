import React, { Component } from 'react';
import Image from '../assets/profile.png';


class People extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return (
            <div className="row">
               <div className="col s12 m7 card-container">
                 <div className="card">
                   <div className="card-image">
                     <img src={Image}></img>
                     <span className="card-title">Pedro Gonzalez</span>
                   </div>
                   <div className="card-content">
                     <p>Tengo 15 años de experiencia arreglando cualquier tipo de cañeria. Me encuentro en San Miguel de Tucuman.</p>
                   </div>
                   <div className="rating">Rating: <i className="fas fa-star"></i></div>
                   <div className="card-action">
                     <a href="#">Plomero</a>
                   </div>
                 </div>
              </div>
           </div>
        )
    }
}

export default People;