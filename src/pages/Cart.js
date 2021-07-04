import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    return (
        <>
            <section style={{height: "100px", width: "100%", display: "flex", alignItems: "center", background: "black"}}>
                <div class="container">
                    <h3 style={{color: "white", float: "left"}}>Shopping Cart</h3>
                </div>
            </section>
            <Container>
                <Row className="mt-5">
                    <Col style={{textAlign: "left"}}>
                        <h5>3 Course(s) in Cart</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}>
                        <div className="card ">
                            <div className="card-body">
                                <Row>
                                <Col xs={3}>
                                    {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                                    <Link to="/coursedetail">
                                        <img className="card-img"
                                            src="https://i.ibb.co/85Ssw1y/1.png"
                                            style={{maxWidth: "150px", maxHeight: "100px"}}
                                            alt="" />
                                    </Link>
                                </Col>
                                <Col xs={4} style={{textAlign: "left"}}>
                                    <div>
                                        <Link to="/coursedetail" style={{ color: 'black' }}>
                                        <b className="card-title">
                                            React with Redux
                                        </b>
                                        </Link>
                                    </div>
                                    <div className="instructor">
                                        <FontAwesomeIcon
                                        className="user-icon"
                                        icon={faUserAlt} />
                                        Stephen Grider
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Link to="/">
                                        <p>Remove From Cart</p>
                                    </Link>
                                </Col>
                                <Col xs={2} className="price-course-list">
                                    <div className="price-discount-course-list">
                                        $139.99
                                    </div>
                                    <div className="price-original-course-list">
                                        $199.99
                                    </div>
                                </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="card-body">
                                <Row>
                                <Col xs={3}>
                                    {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                                    <Link to="/coursedetail">
                                        <img className="card-img"
                                            src="https://i.ibb.co/85Ssw1y/1.png"
                                            style={{maxWidth: "150px", maxHeight: "100px"}}
                                            alt="" />
                                    </Link>
                                </Col>
                                <Col xs={4} style={{textAlign: "left"}}>
                                    <div>
                                        <Link to="/coursedetail" style={{ color: 'black' }}>
                                        <b className="card-title">
                                            React with Redux
                                        </b>
                                        </Link>
                                    </div>
                                    <div className="instructor">
                                        <FontAwesomeIcon
                                        className="user-icon"
                                        icon={faUserAlt} />
                                        Stephen Grider
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Link to="/">
                                        <p>Remove Form Cart</p>
                                    </Link>
                                </Col>
                                <Col xs={2} className="price-course-list">
                                    <div className="price-discount-course-list">
                                        $139.99
                                    </div>
                                    <div className="price-original-course-list">
                                        $199.99
                                    </div>
                                </Col>
                                
                                </Row>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="card-body">
                                <Row>
                                <Col xs={3}>
                                    {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                                    <Link to="/coursedetail">
                                        <img className="card-img"
                                            src="https://i.ibb.co/85Ssw1y/1.png"
                                            style={{maxWidth: "150px", maxHeight: "100px"}}
                                            alt="" />
                                    </Link>
                                </Col>
                                <Col xs={4} style={{textAlign: "left"}}>
                                    <div>
                                        <Link to="/coursedetail" style={{ color: 'black' }}>
                                        <b className="card-title">
                                            React with Redux
                                        </b>
                                        </Link>
                                    </div>
                                    <div className="instructor">
                                        <FontAwesomeIcon
                                        className="user-icon"
                                        icon={faUserAlt} />
                                        Stephen Grider
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Link to="/">
                                        <p>Remove Form Cart</p>
                                    </Link>
                                </Col>
                                <Col xs={2} className="price-course-list">
                                    <div className="price-discount-course-list">
                                        $139.99
                                    </div>
                                    <div className="price-original-course-list">
                                        $199.99
                                    </div>
                                </Col>
                                
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card card-body card border-top-0 border-right-0 border-left-0 border-bottom-0">
                            <Row>
                                <h5>
                                    Total:
                                </h5>
                            </Row>
                            <Row>
                                <h2>
                                    $199.99
                                </h2>
                            </Row>
                            <Row>
                                <button className="btn btn-success" style={{width: "200px"}}>
                                    <FontAwesomeIcon icon={faCheckSquare} /> Buy Course(s)
                                </button>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cart;
