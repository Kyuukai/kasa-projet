import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Error = () => {
    return (
        <div className='undefined'>
            <Header />
            <div className='undefined__content'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/accueil">Retourner sur la page d'accueil</NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;