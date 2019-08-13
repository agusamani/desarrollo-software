import React from 'react';
import Sidebar from '../components/Sidebar';
import People from '../components/People';



class Home extends React.Component {
    render() {
        return (        
           <div className="home-container">
            <Sidebar />
            <People />
           </div>
        )
    }
}

export default Home;