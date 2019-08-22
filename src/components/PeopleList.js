import React from 'react';
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
        this.setState({
           list: userService.getAll()
        })
    }
    render() {
        let persons;
        if( this.props.category ) {
            persons = this.state.list.filter( filterPerson => filterPerson.category.toLowerCase() === this.props.category.toLowerCase());
        } else {
            persons = this.state.list;
        }
        return (
            
            <div className='people-container'>
                {persons.map( (people) => <People key={people.id} {...people}/>)}
            </div>
        )
    }
}

export default PeopleList;