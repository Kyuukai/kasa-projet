import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const About = () => {
    return (
        <div>
            <Header />
            <Banner imgUrl="./BANNER_IMG_ABOUT.png" />
            <Collapse textMessage="Fiabilité" />
            <Collapse textMessage="Respect" />
            <Collapse textMessage="Service" />
            <Collapse textMessage="Responsabilité" />
            <Footer />
        </div>
    );
};

export default About;