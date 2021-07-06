import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import MessageBox from "../components/MessageBox";
import { removeFromCart } from '../components/actions/cartActions';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart; 
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <>
            <section style={{height: "100px", width: "100%", display: "flex", alignItems: "center", background: "black"}}>
                <div class="container">
                    <h3 style={{color: "white", float: "left"}}>Shopping Cart</h3>
                </div>
            </section>
            <Container>
                {
                    cartItems.length === 0 
                    ? 
                    (
                        <MessageBox>
                            Cart is now empty!!! {" "}
                            <Link to="/">Back to home to shop</Link>
                        </MessageBox>
                    )
                    :
                    (
                        <>
                            <Row className="mt-5">
                                <Col style={{textAlign: "left"}}>
                                    <h5>{cartItems.length} Course(s) in Cart</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    {
                                        cartItems.map((item) => 
                                        (
                                            <div className="card" key={item.academy}>
                                                <div className="card-body">
                                                    <Row>
                                                        <Col xs={3}>
                                                            {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                                                            <Link to={`/coursedetail/${item.academy}`}>
                                                                <img className="card-img"
                                                                    src={item.avatar}
                                                                    style={{maxWidth: "150px", maxHeight: "100px"}}
                                                                    alt="" />
                                                            </Link>
                                                        </Col>
                                                        <Col xs={4} style={{textAlign: "left"}}>
                                                            <div>
                                                                <Link to={`/coursedetail/${item.academy}`} style={{ color: 'black' }}>
                                                                <b className="card-title">
                                                                    {item.name}
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
                                                            <button onClick={() => removeFromCartHandler(item.academy)} type="button" class="btn btn-outline-danger">Remove From Cart</button>
                                                        </Col>
                                                        <Col xs={2} className="price-course-list">
                                                            <div className="price-discount-course-list">
                                                                ${item.price_discount}
                                                            </div>
                                                            <div className="price-original-course-list">
                                                                ${item.price}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        ))
                                    }
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
                                                ${cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price_discount, 0)}
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
                        </>
                    )
                }
                
            </Container>
        </>
    );
}

export default Cart;