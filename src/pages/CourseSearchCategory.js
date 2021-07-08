import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listSearchCategoryAcademys } from '../components/actions/academyActions';
import { Container, Row, Col } from 'react-bootstrap';
// import CheckBox from '../components/CheckBox/Checkbox';
import CoursesList from '../components/CoursesList/CoursesList';
import PaginationPart from '../components/PaginationPart/PaginationPart';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router';


const CourseSearchCategory = () => {
    const dispatch = useDispatch();

    const { categoryId= "", order = 'lowtohigh' } = useParams();
    
    const academyListSearchCategory = useSelector((state) => state.academyListSearchCategory);
    const {
        loading, error, academys,
    } = academyListSearchCategory;
    useEffect(() => {
        dispatch(listSearchCategoryAcademys(categoryId, order));
    }, [dispatch, categoryId, order]);

    let history = useHistory();
    const getFilterUrl = (filter) => {
        const filterCategoryId = filter.categoryId || categoryId;
        const sortOrder = filter.order || order;
        return `/search/category/${filterCategoryId}/order/${sortOrder}`;
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
                <Container>
                    <Row>
                        {/* <Col xs={3}>
                            <div className="card">
                                <div className="card-body" >
                                    <CheckBox />
                                </div>
                            </div>    
                        </Col> */}
                        <Col>
                            <Container>
                                <div className="card">
                                    <div className="card-body text-left">
                                        <span>Sorted by: </span>
                                        <select
                                            value={order}
                                            onChange={(e) => {
                                                history.push(getFilterUrl({ order: e.target.value }));
                                            }}
                                            style={{height: "30px"}}
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

export default CourseSearchCategory;