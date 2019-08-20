import React from 'react';
import UserService from './../services/userServices';

const userService  = new UserService();

class PeopleList extends React {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }
    
    componentDidMount(){
        console.log(userService);
        console.log('ashdsada');
        
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default PeopleList;