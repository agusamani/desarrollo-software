import React from 'react';
import Sidebar from '../components/Sidebar';
import PeopleList from '../components/PeopleList';



class Home extends React.Component {
    render() {
        return (        
           <div className="home-container">
            <Sidebar />
            <PeopleList />
           </div>
        )
    }
}

export default Home;