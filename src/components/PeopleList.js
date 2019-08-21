import React, { Component } from 'react';
import UserService from './../services/userServices';
import People from './People';

const userService  = new UserService();

class PeopleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }
    componentDidMount(){
        //console.log(userService.getByCategory(),"heeee");
        this.setState({
           list: userService.getAll()
        })
    }
    render() {
        return (
            <div className='people-container'>
                {this.state.list.map( (people) => <People key={people.id} {...people}/>)}
            </div>
        )
    }
}

export default PeopleList;