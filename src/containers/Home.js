import React from 'react';
import Sidebar from '../components/Sidebar';
import PeopleList from '../components/PeopleList';

const Home = (props) => {
    return (        
        <div className="home-container">
        <Sidebar />
        <PeopleList category={props.match.params.category}  />
        </div>
    )
}
export default Home;