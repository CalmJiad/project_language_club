import React from 'react';
import { Link } from 'react-router-dom';
import Navs from '../Navs/Navs';
import './Banner.css';

const Banner = () => {
    return (
        <div className="over">
            <div className="bigImage">
                <Navs></Navs>
                <div className="overlay">
                    <div>
                    <h1>Best Language Learning Club In The Town!</h1>
                    <p>We assure the maximum quality teaching with our extensive pace and exciting modules. <br /> An intensive caring environment will let you explore the different portion of language learning process. <br /> So we always welcome our students warmly.</p>
                    <Link to="/courses">
                    <button className="btn btn-danger getStartedBtn">Get Started</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;