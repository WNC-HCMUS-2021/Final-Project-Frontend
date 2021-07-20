import React from "react";
import api from "../API/listAPI";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import MyCourses from "../components/User/MyCourses/MyCourses";

function MyAcademy() {
  let [myAcademy, setMyAcademy] = useState();
  useEffect(() => {
    const getMyAcademy = async () => {
      try {
        let res = await api.myAcademy();
        if (res.data) {
          setMyAcademy(res.data.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      }
    };

    getMyAcademy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  document.title = "My Academy";
  return !myAcademy ? (
    <LoadingBox />
  ) : (
    <Container>
      <Row>
        <Col>
          {myAcademy.map((academy) => (
            <MyCourses key={academy.academy_id} academy={academy} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default MyAcademy;
