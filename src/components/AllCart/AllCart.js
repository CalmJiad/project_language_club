import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AllCart.css";

const AllCart = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
                fetch("/fakedata.json")
                .then(res => res.json())
                .then(data => setCarts(data))
            }, []);
    
    return (
        <div>
            <h1 className="text-center mt-5 mb-4">Our Most Dedicated Courses. ."</h1>
            <div className="text-center mb-5">
                <input className="input w-50 py-2" type="text" placeholder=" Search Courses" />
                <button className="btn btn-success searchBtn">Search</button>
            </div>
            <div className="d-flex justify-content-center text-center mb-5">
                {
                    carts.slice(1, 5).map(cart => (
                        <Card className="mx-2 item" style={{ width: '18rem', height: '28rem'}}>
                        <Card.Img variant="top" src={cart.img} />
                        <Card.Title className="my-3"><h4>{cart.name}</h4></Card.Title>
                        <Card.Body>
                            <h6>Available Seats: {cart.sit}</h6>
                            <h6>Price: ${cart.price}</h6>
                        </Card.Body>
                        <div className="text-center d-block mt-3">
                            <Link to="/courses">                            
                            <Button className="detailbtn mb-3" variant="">Details</Button>
                            </Link>
                        </div>
                        </Card>
                    ))
                }    
            </div>
        </div>
    );
};

export default AllCart;