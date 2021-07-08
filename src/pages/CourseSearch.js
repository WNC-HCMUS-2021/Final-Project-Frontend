import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listSearchAcademys } from '../components/actions/academyActions';
import { Container, Row, Col } from 'react-bootstrap';
import CheckBox from '../components/CheckBox/Checkbox';
import CoursesList from '../components/CoursesList/CoursesList';
import PaginationPart from '../components/PaginationPart/PaginationPart';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router';

const CourseSearch = () => {
    const dispatch = useDispatch();

    const { keyword = '', order = 'lowtohigh', } = useParams();
    const academyListSearch = useSelector((state) => state.academyListSearch);
    const { loading, error, academys } = academyListSearch;
    console.log(keyword);
    console.log(order);
    useEffect(() => {
        dispatch(listSearchAcademys({ keyword: keyword !== '' ? keyword : '', order }));
    }, [dispatch, keyword, order]);

    let history = useHistory();
    const getFilterUrl = (filter) => {
        const filterKeyword = filter.keyword || keyword;
        const sortOrder = filter.order || order;
        return `/search/keyword/${filterKeyword}/order/${sortOrder}`;
    };

    return (
    <>
        {/* <div>
            {academys.map((academy) => (
                <div>
                    {academy.academy_name}
                </div>
            ))}
        </div> */}

        <div className="row">
            {loading ? (
            <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox>{error}</MessageBox>
            ) : (
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
                                        <select
                                            value={order}
                                            onChange={(e) => {
                                                history.push(getFilterUrl({ order: e.target.value }));
                                            }}
                                        >
                                            <option value="lowtohigh">Price: Low to High</option>
                                            <option value="hightolow">Price: High to Low</option>
                                            <option value="toprated">Student Ratings</option>
                                        </select>
                                        
                                    </div>
                                </div>
                            </Container>
                            { academys.map((academy) => (
                                <CoursesList key={academy.academy_id} academy={academy} />
                            ))}  
                        </Col>
                    </Row>
                    <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <PaginationPart />
                    </Row>
                </Container>             
            </>   
            )}
        </div>
        
        {/* <Container fluid={true}>
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
        </Container> */}
    </>
  );
};

export default CourseSearch;