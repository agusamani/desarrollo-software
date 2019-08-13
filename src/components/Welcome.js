import React from 'react';
import '../styles/styles.scss';


const Welcome = () => {
    return (
        <div className="welcome-background">
            <div className="welcome-container">
              <h2>Bienvenido User!</h2>
              <h2>Gracias por Registrarte!</h2>
              <a className="waves-effect waves-light btn-large boton-ingreso">COMENZA TU BUSQUEDA</a>
            </div>
        </div>
    )
}

export default Welcome;