import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./CoursesList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CoursesList = ({academy}) => {
  return (
    <>
        <Container key={academy.academy_id}>
            <div className="card border-top-0 border-right-0 border-left-0">
                <div className="card-body">
                    <Row>
                    <Col>
                        {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                        <Link to="/coursedetail">
                            <img className="card-img"
                                src="https://i.ibb.co/85Ssw1y/1.png"
                                alt="" />
                        </Link>
                    </Col>
                    <Col xs={6} style={{textAlign: "left"}}>
                        <div>
                            <Link to="/coursedetail" style={{ color: 'black' }}>
                            <b className="card-title">
                                {academy.academy_name}
                            </b>
                            </Link>
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
                    <Col className="price-course-list">
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
        </Container>

        
    </>
  );
};

export default CoursesList;