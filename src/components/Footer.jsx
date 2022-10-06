import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src={"./LOGO.png"} alt="Logo" />
            </div>
            <p>&#169; {new Date().getFullYear()} Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;