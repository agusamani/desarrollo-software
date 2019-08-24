import React from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.scss';

class Sidebar extends React.Component {

      render() {
        return (
          <div id="mySidebar" className="sidebar">
           <div className="sidabar-text">Servicios:</div>
           <Link to="/filter/plomero">Plomero</Link>
           <Link to="/filter/gasista">Gasista</Link>
           <Link to="/filter/electricista">Electricista</Link>
           <Link to="/filter/albañil">Albañil</Link>
           <Link to="/filter/mecanico">Mecanico</Link>
           <Link to="/filter/pintor">Pintor</Link>
           <Link to="/filter/tapicero">Tapicero</Link>
           <Link to="/filter/carpintero">Carpintero</Link>
          </div>
        )
      }
} 




export default Sidebar;