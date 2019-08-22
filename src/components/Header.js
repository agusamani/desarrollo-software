import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../styles/styles.scss';


const Header = () => {
  const options = [
    { value: 'Mi Perfil', label: 'Mi Perfil', className: 'myOptionClassName' },
    { value: 'Pedidos', label: 'Pedidos', className: 'myOptionClassName' },
    { value: 'Favoritos', label: 'Favoritos', className: 'myOptionClassName' },
    { value: "Opciones", label: 'Opciones', className: 'myOptionClassName' },
  ]

  
    return (  
     <nav>
        <div className="nav-wrapper">
          <Link to="/home" className="brand-logo left">ArreglosYa</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Dropdown options={options} className='myClassName' placeholder="User" /></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;