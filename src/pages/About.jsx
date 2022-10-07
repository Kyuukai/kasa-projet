import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

const About = () => {
    return (
        <div>
            <Header />
            <Banner imgUrl="./BANNER_IMG_ABOUT.png" />
            <Dropdown />
            <Footer />
        </div>
    );
};

export default About;