import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navs from '../Navs/Navs';

const About = () => {
    return (
        <div style={{backgroundColor: '#2b7a78'}} className="over">
            <Navs></Navs>
            <Row>
                <Col className="m-5 p-5 text-white">
                    <h2>WHY CHOOSE US?</h2> <br />
                    <h3>5 Years of Experience in Language Teaching And Analysis Management. We are ensuring the best assistance in language learning journey in your life.</h3>
                    <h2 className="mt-5">SO HURRY UP! <br />
                    Meet and Join us today!</h2>
                </Col>
                <Col className="m-5 p-5">
                    <img className="w-100" src={"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80"} alt="" />
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default About;