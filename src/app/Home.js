import React from 'react';
import './home.less';
import Banner from '../components/banner';
import HomeBody from '../components/homeBody';

const Home = () => {
  return (<div className="home">
    <Banner />
    <HomeBody />
  </div>);
};

export default Home;