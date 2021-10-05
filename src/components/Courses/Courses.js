import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navs from '../Navs/Navs';

const Courses = () => {
    
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=>setCourses(data))
    }, [])


    return (
        <div style={{backgroundColor: '#2b7a78'}} className="over">
            <Navs></Navs>
            <h2 className="text-center text-white my-4">We Have {courses.length} Courses To Ensure The Best Learning For You.</h2>
            <div className="d-flex justify-content-center text-center p-5">
            <Row className="g-4 mb-5">
            {
            courses.map(cart => (
                    <Col lg="3">
                        <Card className="mx-2 p-1 item" style={{ width: '18rem', height: '28rem'}}>
                    <Card.Img className="img" variant="top" src={cart.img} />
                    <Card.Title className="my-3"><h4>{cart.name}</h4></Card.Title>
                    <Card.Body>
                        <h6>Available Seats: {cart.sit}</h6>
                        <h6>Price: ${cart.price}</h6>
                    </Card.Body>
                    <div className="text-center d-block mt-3">
                    <Link to="/courses">                            
                        <Button className="detailbtn mb-3" variant="">Purchase</Button>
                    </Link>
                    </div>
                    </Card> 
                    </Col>
                ))
            }
            </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;