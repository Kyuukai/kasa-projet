import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>

            <div className='header__logo'>
                <img src={`./LOGO.png`} alt="Logo" />
            </div>

            <div className='header__links'>
                <NavLink end to="/"><h3>Accueil</h3></NavLink>
                <NavLink to="/about"><h3>A Propos</h3></NavLink>
            </div>

        </header>
    );
};

export default Header;