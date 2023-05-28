/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Home/Banner';
import Gallery from './Home/Gallery';
import ToyTab from './Home/ToyTab';
import Experience from './Home/Experience';
import OurSeller from './Home/OurSeller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTab></ToyTab>
            <OurSeller></OurSeller>
            <Experience></Experience>
        </div>
    );
};

export default Home;