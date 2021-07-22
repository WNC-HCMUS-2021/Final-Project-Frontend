import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "./WatchList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";
import api from "../../../API/listAPI";

const WatchList = ({ academy, setWatchList, watchList }) => {
  async function removeWatchList(id) {
    try {
      await api.removeFromWatchList(id);
      alert("Xoá thành công!");
      setWatchList(watchList.filter((item) => item !== academy));
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  }
  return (
    <>
      <Container key={academy.academy_id}>
        <div className="card border-top-0 border-right-0 border-left-0">
          <div className="card-body">
            <Row>
              <Col xs={3}>
                <Link to={`/coursedetail/${academy.academy_id}`}>
                  <img
                    className="card-img"
                    src={academy.avatar || "/no-image.png"}
                    alt=""
                  />
                </Link>
              </Col>
              <Col xs={7} style={{ textAlign: "left" }}>
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
              <Col xs={2}>
                <Button
                  variant="danger"
                  onClick={() => removeWatchList(academy.academy_id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WatchList;
