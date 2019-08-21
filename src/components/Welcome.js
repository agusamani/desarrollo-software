import React from 'react';
import { Link } from "react-router-dom"
import '../styles/styles.scss';


const Welcome = () => {
    return (
        <div className="welcome-background">
            <div className="welcome-container">
              <h2>Bienvenido User!</h2>
              <h2>Gracias por Registrarte!</h2>           
                <Link to="/home" className="waves-effect waves-light btn-large boton-ingreso">COMENZA TU BUSQUEDA</Link>
            </div>
        </div>
    )
}

export default Welcome;