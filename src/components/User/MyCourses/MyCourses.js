import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./MyCourses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";

const MyCourses = ({ academy }) => {
  return (
    <>
      <Container key={academy.academy_id}>
        <div className="card border-top-0 border-right-0 border-left-0">
          <div className="card-body">
            <Row>
              <Col xs={3}>
                {/* <Image src="https://i.ibb.co/ch8dHPv/4.jpg" thumbnail /> */}
                <Link to={`/coursedetail/${academy.academy_id}`}>
                  <img
                    className="card-img"
                    src={academy.avatar || "/no-image.png"}
                    alt=""
                  />
                </Link>
              </Col>
              <Col xs={9} style={{ textAlign: "left" }}>
                <div>
                  <Link
                    to={`/coursedetail/${academy.academy_id}`}
                    style={{ color: "black" }}
                  >
                    <b className="card-title">{academy.academy_name}</b>
                  </Link>
                </div>
                <div className="short-description">
                  {academy.description_short}
                </div>
                <div className="instructor">
                  <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
                  {/* {academy.teacher.name} */}
                  {" " + academy.teacher.name}
                </div>
                <Rating rate={academy.rate} register={academy.register} />
                {academy.register >= 5 ? (
                  <button className="badge-best-seller">
                    <b>Best-seller</b>
                  </button>
                ) : null}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyCourses;
