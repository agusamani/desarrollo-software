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
           <Link to="/filter/conductor">Conductor</Link>
           <Link to="/filter/chef">Chef</Link>
           <Link to="/filter/diseñador">Diseñador</Link>
           <Link to="/filter/fotografo">Fotografo</Link>
           <Link to="/filter/mecanico">Mecanico</Link>
           <Link to="/filter/periodista">Periodista</Link>
           <Link to="/filter/policia">Policia</Link>
           <Link to="/filter/sercretario">Sercretario</Link>
           <Link to="/filter/traductor">Traductor</Link>
          </div>
        )
      }
} 




export default Sidebar;