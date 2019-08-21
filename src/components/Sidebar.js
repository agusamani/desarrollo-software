import React from 'react';
import '../styles/styles.scss';

class Sidebar extends React.Component {
      constructor(props) {
        super(props)
      }

      render() {
        return (
          <div id="mySidebar" className="sidebar">
           <div className="sidabar-text">Servicios:</div>
           <a href="#">Plomero</a>
           <a href="#">Gasista</a>
           <a href="#">Electricista</a>
           <a href="#">Albañil</a>
          </div>
        )
      }
} 




export default Sidebar;