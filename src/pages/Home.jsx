import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <Banner imgUrl="./BANNER_IMG.png" textMessage="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
};

export default Home;