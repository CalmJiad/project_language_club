import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div>
     <div className="footer-container p-3">
      <Row>
        <Col lg="8">
        <div className="text-white mx-5 py-5">
        <h2 className="footer-h2">Our  Mission  and  Vision  This  Year</h2>
          <p>|| Language Teaching <br />
            || Free Language Practicing Club <br />
            || Digital Library <br />
            || Integrated Learning <br />
            || Core Language Training</p>
        </div>
        </Col>
        <Col lg="4">
          <div className="text-white my-5 px-5">
          <p># Feel free to call us anytime<br /> Phone No: +00252 02555 55 <br />
          Meet us at: # 3343 Jamal Avenue | Chattagram | Bangladesh</p>
          </div>
        </Col>
        <p className="text-center text-white">&copy; All Rights Reserved || Ekramul Haque Jiad || 2021</p>
      </Row>
     </div>
    </div>
  );
};

export default Footer;