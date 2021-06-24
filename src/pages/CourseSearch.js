import React from 'react';
import { Container, Row, Col, Dropdown, ButtonGroup } from 'react-bootstrap';
import CheckBox from '../components/CheckBox/Checkbox';
import CoursesList from '../components/CoursesList/CoursesList';
import PaginationPart from '../components/PaginationPart/PaginationPart';

const CourseSearch = () => {
  return (
    <>
        
        <Container fluid={true}>
            <Row>
                <Col xs={3}>
                    <div className="card">
                        <div className="card-body" >
                            <CheckBox />
                        </div>
                    </div>    
                </Col>
                <Col xs={9}>
                    <Container>
                        <div className="card">
                            <div className="card-body text-left">
                                <span>Sorted by: </span>

                                <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle id="dropdown-custom-1">Rating</Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Rating Descending</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Rating Ascending</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                                <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle id="dropdown-custom-1">Price</Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Price Descending</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Price Ascending</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                        </div>
                    </Container>
                    <CoursesList />
                </Col>
            </Row>
            <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <PaginationPart />
            </Row>
        </Container>
    </>
  );
};

export default CourseSearch;