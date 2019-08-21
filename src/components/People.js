import React, { Component } from 'react';
import Image from '../assets/profile.png';
import UserService from './../services/userServices';

const userService  = new UserService();

class People extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            
               <div className="col s12 m7 card-container">
                 <div className="card">
                   <div className="card-image">
                     <img src={Image}></img>
                     <span className="card-title">{this.props.name}</span>
                   </div>
                   <div className="card-content">
                     <p>{this.props.description}</p>
                   </div>
                   <div className="rating">Rating: {this.props.rating} <i className="fas fa-star"></i></div>
                   <div className="card-action">
                     <a href="#">{this.props.category}</a>
                   </div>
                 </div>
              </div>
          
        )
    }
}

export default People;