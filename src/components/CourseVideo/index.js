import React from "react";
import Video from "./Video";
// import { getShortLink } from "utils/courses";
import CardDescription from "./CardDescription";
import CourseMap from "../SingleCourse/CourseMap";
import { Container, Row, Col } from "react-bootstrap";

export default function index() {

  return (
    <>  
      <div style={{minHeight: "75vh"}}>
        <Container fluid={true}>
          <Row>
              <Col xs={9}>
                <Video />
                <CardDescription />
              </Col>
              <Col xs={3}>
                <CourseMap />
              </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
