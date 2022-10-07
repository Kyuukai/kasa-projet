import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner imgUrl="./BANNER_IMG.png" textMessage="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;