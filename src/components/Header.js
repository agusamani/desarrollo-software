import React from 'react';
import '../styles/styles.scss';

const Header = () => {
    return (  
     <nav>
        <div className="nav-wrapper">
          <a href="facebook.com" className="brand-logo left">ArreglosYa</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="collapsible.html">User</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;