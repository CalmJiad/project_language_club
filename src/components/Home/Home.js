import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Extra from '../Extra/Extra';
import AllCart from '../AllCart/AllCart';
import "./Home.css"

const Home = () => {
    return (
        <div className="over">
            <Banner></Banner>
            <AllCart></AllCart>
            <Extra></Extra>
            <Footer></Footer>
        </div>
    );
};

export default Home;