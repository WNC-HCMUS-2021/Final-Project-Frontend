import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./CoursesList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faStarHalfAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const CoursesList = () => {
  return (
    <>
        <Container>
            <div className="card border-top-0 border-right-0 border-left-0">
                <div className="card-body">
                    <Row>
                    <Col>
                        {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                        <img className="card-img"
                            src="https://i.ibb.co/85Ssw1y/1.png"
                            alt="" />
                    </Col>
                    <Col xs={6} style={{textAlign: "left"}}>
                        <div>
                            <b className="card-title">
                                React with Redux
                            </b>
                        </div>
                        <div className="short-description">
                            A practical programming course for office workers, academics, and administrators who want to improve their productivity.
                        </div>
                        <div className="instructor">
                            <FontAwesomeIcon
                            className="user-icon"
                            icon={faUserAlt} />
                            Stephen Grider
                        </div>
                        <div>
                            <span className="rating">
                            4.5
                            </span>
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStarHalfAlt} />
                            <span className="student">
                            (300899)
                            </span>
                        </div>
                        <div>
                            <span className="duration">
                                4 months 10hours/week
                            </span>
                            <span>
                                -
                            </span>
                            <span className="level">
                                All level
                            </span>
                            
                        </div>
                        <button
                            className="badge-best-seller">
                            <b>Best-seller</b>
                        </button>
                    </Col>
                    <Col className="price">
                        <div className="price-discount">
                            $139.99
                        </div>
                        <div className="price-original">
                            $199.99
                        </div>
                    </Col>
                    
                    </Row>
                </div>
            </div>
        </Container>

        <Container>
            <div className="card border-top-0 border-right-0 border-left-0">
                <div className="card-body">
                    <Row>
                    <Col>
                        {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                        <img className="card-img"
                            src="https://i.ibb.co/85Ssw1y/1.png"
                            alt="" />
                    </Col>
                    <Col xs={6} style={{textAlign: "left"}}>
                        <div>
                            <b className="card-title">
                                React with Redux
                            </b>
                        </div>
                        <div className="short-description">
                            A practical programming course for office workers, academics, and administrators who want to improve their productivity.
                        </div>
                        <div className="instructor">
                            <FontAwesomeIcon
                            className="user-icon"
                            icon={faUserAlt} />
                            Stephen Grider
                        </div>
                        <div>
                            <span className="rating">
                            4.5
                            </span>
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStarHalfAlt} />
                            <span className="student">
                            (300899)
                            </span>
                        </div>
                        <div>
                            <span className="duration">
                                4 months 10hours/week
                            </span>
                            <span>
                                -
                            </span>
                            <span className="level">
                                All level
                            </span>
                            
                        </div>
                    </Col>
                    <Col className="price">
                        <div className="price-discount">
                            $139.99
                        </div>
                        <div className="price-original">
                            $199.99
                        </div>
                    </Col>
                    
                    </Row>
                </div>
            </div>
        </Container>

        <Container>
            <div className="card border-top-0 border-right-0 border-left-0">
                <div className="card-body">
                    <Row>
                    <Col>
                        {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                        <img className="card-img"
                            src="https://i.ibb.co/85Ssw1y/1.png"
                            alt="" />
                    </Col>
                    <Col xs={6} style={{textAlign: "left"}}>
                        <div>
                            <b className="card-title">
                                React with Redux
                            </b>
                        </div>
                        <div className="short-description">
                            A Unique Interactive Python Experience With Nearly 200 Exercises.
                        </div>
                        <div className="instructor">
                            <FontAwesomeIcon
                            className="user-icon"
                            icon={faUserAlt} />
                            Dr. Angela Yu
                        </div>
                        <div>
                            <span className="rating">
                            4.5
                            </span>
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStar} />
                            <FontAwesomeIcon
                            className="star-icon"
                            icon={faStarHalfAlt} />
                            <span className="student">
                            (300899)
                            </span>
                        </div>
                        <div>
                            <span className="duration">
                                4 months 10hours/week
                            </span>
                            <span>
                                -
                            </span>
                            <span className="level">
                                All level
                            </span>
                            
                        </div>
                        <button
                            className="badge-hot">
                            <b>Hot & New</b>
                        </button>
                    </Col>
                    <Col className="price">
                        <div className="price-discount">
                            $139.99
                        </div>
                    </Col>
                    
                    </Row>
                </div>
            </div>
        </Container>
    </>
  );
};

export default CoursesList;